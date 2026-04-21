const bcrypt = require("bcryptjs");
const { pool } = require("./db.cjs");
const { legacyProducts } = require("./data/legacy-products.cjs");

const legacySiteGallery = [
  { title: "Manufacturing Floor", description: "Images will be added here. Each card will display a full-size photo with title.", imageUrl: "", sortOrder: 0 },
  { title: "Welding Line", description: "Images will be added here. Each card will display a full-size photo with title.", imageUrl: "", sortOrder: 1 },
  { title: "Galvanization Unit", description: "Images will be added here. Each card will display a full-size photo with title.", imageUrl: "", sortOrder: 2 },
  { title: "Quality Lab", description: "Images will be added here. Each card will display a full-size photo with title.", imageUrl: "", sortOrder: 3 },
  { title: "Finished Poles", description: "Images will be added here. Each card will display a full-size photo with title.", imageUrl: "", sortOrder: 4 },
  { title: "Dispatch Area", description: "Images will be added here. Each card will display a full-size photo with title.", imageUrl: "", sortOrder: 5 },
  { title: "Material Yard", description: "Images will be added here. Each card will display a full-size photo with title.", imageUrl: "", sortOrder: 6 },
  { title: "Fabrication Bay", description: "Images will be added here. Each card will display a full-size photo with title.", imageUrl: "", sortOrder: 7 },
  { title: "Warehouse", description: "Images will be added here. Each card will display a full-size photo with title.", imageUrl: "", sortOrder: 8 },
];

const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      short_description TEXT NOT NULL,
      description LONGTEXT NOT NULL,
      image TEXT NOT NULL,
      category VARCHAR(255) NOT NULL,
      material VARCHAR(255) NOT NULL,
      height VARCHAR(255) NOT NULL,
      shape VARCHAR(255) NOT NULL,
      finish VARCHAR(255) NOT NULL,
      applications_json JSON NOT NULL,
      customization_json JSON NOT NULL,
      moq VARCHAR(255) NOT NULL,
      specifications_json JSON NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS product_gallery (
      id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      image_url TEXT NOT NULL,
      sort_order INT NOT NULL DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_product_gallery_product
        FOREIGN KEY (product_id) REFERENCES products(id)
        ON DELETE CASCADE
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS site_gallery (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT NOT NULL,
      sort_order INT NOT NULL DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
};

const seedAdmin = async () => {
  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  const [existingAdmins] = await pool.query("SELECT id FROM admins WHERE username = ?", [username]);

  if (existingAdmins.length > 0) {
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await pool.query("INSERT INTO admins (username, password_hash) VALUES (?, ?)", [username, passwordHash]);
};

const seedProducts = async () => {
  const [rows] = await pool.query("SELECT COUNT(*) AS count FROM products");
  const count = rows[0]?.count ?? 0;

  if (count > 0) {
    return;
  }

  for (const product of legacyProducts) {
    const [result] = await pool.query(
      `
        INSERT INTO products (
          name, slug, short_description, description, image, category, material, height,
          shape, finish, applications_json, customization_json, moq, specifications_json
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        product.name,
        product.slug,
        product.shortDescription,
        product.description,
        product.image,
        product.category,
        product.material,
        product.height,
        product.shape,
        product.finish,
        JSON.stringify(product.applications),
        JSON.stringify(product.customization),
        product.moq,
        JSON.stringify(product.specifications),
      ],
    );

    for (const [index, imageUrl] of product.galleryImages.entries()) {
      await pool.query(
        "INSERT INTO product_gallery (product_id, image_url, sort_order) VALUES (?, ?, ?)",
        [result.insertId, imageUrl, index],
      );
    }
  }
};

const seedSiteGallery = async () => {
  const [rows] = await pool.query("SELECT COUNT(*) AS count FROM site_gallery");
  const count = rows[0]?.count ?? 0;

  if (count > 0) {
    return;
  }

  for (const item of legacySiteGallery) {
    await pool.query(
      "INSERT INTO site_gallery (title, description, image_url, sort_order) VALUES (?, ?, ?, ?)",
      [item.title, item.description, item.imageUrl, item.sortOrder],
    );
  }
};

const initializeDatabase = async () => {
  await createTables();
  await seedAdmin();
  await seedProducts();
  await seedSiteGallery();
};

module.exports = {
  initializeDatabase,
};
