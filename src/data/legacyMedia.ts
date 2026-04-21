import octagonalImg from "@/assets/product-octagonal.jpg";
import tubularImg from "@/assets/product-tubular.jpg";
import conicalImg from "@/assets/product-conical.jpg";
import decorativeImg from "@/assets/product-decorative.jpg";
import highmastImg from "@/assets/product-highmast.jpg";
import streetlightImg from "@/assets/product-streetlight.jpg";
import homeOctagonal from "@/assets/home products/octagonal pole.png";
import homeTubular from "@/assets/home products/Tubular Pole.png";
import homeConical from "@/assets/home products/Conical Pole.png";
import homeDecorative from "@/assets/home products/Decorative light Pole.png";
import homeHighmast from "@/assets/home products/High Mast Pole.png";
import homeStreetlight from "@/assets/home products/Street Light Pole.png";
import oct1 from "@/assets/octogonal pole/Octagonal  Pole1.png";
import oct2 from "@/assets/octogonal pole/Octagonal  Pole2.png";
import oct3 from "@/assets/octogonal pole/Octagonal  Pole3.png";
import oct4 from "@/assets/octogonal pole/Octagonal  Pole4.png";
import highMast1 from "@/assets/High Mast Pole/High Mast Pole1.png";
import highMast2 from "@/assets/High Mast Pole/High Mast Pole2.png";
import highMast3 from "@/assets/High Mast Pole/High Mast Pole3.png";
import highMast4 from "@/assets/High Mast Pole/High Mast Pole4.png";
import tubular1 from "@/assets/Tubular Pole/Tubular Poles1.png";
import tubular2 from "@/assets/Tubular Pole/Tubular Poles2.png";
import tubular3 from "@/assets/Tubular Pole/Tubular Poles3.png";
import tubular4 from "@/assets/Tubular Pole/Tubular Poles4.png";
import tubular5 from "@/assets/Tubular Pole/Tubular Poles5.png";
import decorative1 from "@/assets/Decorative Pole/Decorative Lighting Pole1.png";
import decorative2 from "@/assets/Decorative Pole/Decorative Lighting Pole2.png";
import decorative3 from "@/assets/Decorative Pole/Decorative Lighting Pole3.png";
import decorative4 from "@/assets/Decorative Pole/Decorative Lighting Pole4.png";
import street1 from "@/assets/Street Light Pole/Street Light Pole1.png";
import street2 from "@/assets/Street Light Pole/Street Light Pole2.png";
import street3 from "@/assets/Street Light Pole/Street Light Pole3.png";
import street4 from "@/assets/Street Light Pole/Street Light Pole4.png";

const tokenMap: Record<string, string> = {
  "legacy-cover:octagonal-pole": octagonalImg,
  "legacy-cover:tubular-pole": tubularImg,
  "legacy-cover:conical-pole": conicalImg,
  "legacy-cover:decorative-pole": decorativeImg,
  "legacy-cover:high-mast-pole": highmastImg,
  "legacy-cover:street-light-pole": streetlightImg,
  "legacy-cover-home:octagonal-pole": homeOctagonal,
  "legacy-cover-home:tubular-pole": homeTubular,
  "legacy-cover-home:conical-pole": homeConical,
  "legacy-cover-home:decorative-pole": homeDecorative,
  "legacy-cover-home:high-mast-pole": homeHighmast,
  "legacy-cover-home:street-light-pole": homeStreetlight,
  "legacy-gallery:octagonal-pole:1": oct1,
  "legacy-gallery:octagonal-pole:2": oct2,
  "legacy-gallery:octagonal-pole:3": oct3,
  "legacy-gallery:octagonal-pole:4": oct4,
  "legacy-gallery:tubular-pole:1": tubular1,
  "legacy-gallery:tubular-pole:2": tubular2,
  "legacy-gallery:tubular-pole:3": tubular3,
  "legacy-gallery:tubular-pole:4": tubular4,
  "legacy-gallery:tubular-pole:5": tubular5,
  "legacy-gallery:decorative-pole:1": decorative1,
  "legacy-gallery:decorative-pole:2": decorative2,
  "legacy-gallery:decorative-pole:3": decorative3,
  "legacy-gallery:decorative-pole:4": decorative4,
  "legacy-gallery:high-mast-pole:1": highMast1,
  "legacy-gallery:high-mast-pole:2": highMast2,
  "legacy-gallery:high-mast-pole:3": highMast3,
  "legacy-gallery:high-mast-pole:4": highMast4,
  "legacy-gallery:street-light-pole:1": street1,
  "legacy-gallery:street-light-pole:2": street2,
  "legacy-gallery:street-light-pole:3": street3,
  "legacy-gallery:street-light-pole:4": street4,
};

const homeTokenBySlug: Record<string, string> = {
  "octagonal-pole": "legacy-cover-home:octagonal-pole",
  "tubular-pole": "legacy-cover-home:tubular-pole",
  "conical-pole": "legacy-cover-home:conical-pole",
  "decorative-pole": "legacy-cover-home:decorative-pole",
  "high-mast-pole": "legacy-cover-home:high-mast-pole",
  "street-light-pole": "legacy-cover-home:street-light-pole",
};

export const resolveLegacyImage = (value: string) => tokenMap[value] ?? value;

export const resolveProductCardImage = (slug: string, image: string) =>
  resolveLegacyImage(homeTokenBySlug[slug] ?? image);
