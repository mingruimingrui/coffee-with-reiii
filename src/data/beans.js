import ethiopianGedech from "../imgs/ethiopian_gedech.jpg";
import fincaBetelPinkBourbon from "../imgs/finca_betel_pink_bourbon.jpg";
import elDivisoSidra from "../imgs/el_diviso_sidra.jpg";
import honeyApricot from "../imgs/honey_apricot.jpg";
import yeastChiroso from "../imgs/yeast_chiroso.jpg";

const DEFAULT_VAL =
  "This is missing but I don't want to throw error, so I use a default value instead.";

export class BeanInfo {
  constructor({
    imgSrc = "holder.js",
    title = DEFAULT_VAL,
    origin = DEFAULT_VAL,
    varietal = DEFAULT_VAL,
    processing = DEFAULT_VAL,
    roaster = DEFAULT_VAL,
    roastLevel = DEFAULT_VAL,
    tastingNotes = undefined,
    shortDescription = undefined,
  }) {
    if (tastingNotes === undefined) {
      tastingNotes = [];
    }

    this.imgSrc = imgSrc;
    this.title = title;
    this.origin = origin;
    this.varietal = varietal;
    this.processing = processing;
    this.roaster = roaster;
    this.roastLevel = roastLevel;
    this.tastingNotes = tastingNotes;
    this.shortDescription = shortDescription;
  }
}

export const BEAN_INFOS = [
  new BeanInfo({
    imgSrc: ethiopianGedech,
    title: "Asegedech Sholi - Red Grape",
    origin: "Ethiopia, Gedeb, Banko Tatatu",
    varietal: "74110, 74112",
    processing: "Natural",
    roaster: "Apartment",
    roastLevel: "Light",
    tastingNotes: ["Red Grape", "Nectarine", "Rose"],
    shortDescription: "Gentle and clean like sipping on red tea",
  }),
  new BeanInfo({
    imgSrc: fincaBetelPinkBourbon,
    title: "Finca Betel - Cherry Roselle",
    origin: "Colombia, Valle de Cauca, Finca Betel",
    varietal: "Pink Bourbon",
    processing: "Semi-Washed",
    roaster: "Twenty Grams Roastery",
    roastLevel: "Very Light",
    tastingNotes: ["Promegranate", "Raspberry", "Roselle"],
    shortDescription:
      "Floral with a rosey note that intensifies towards the finish",
  }),
  new BeanInfo({
    imgSrc: elDivisoSidra,
    title: "El Diviso - Elderflower Sidra",
    origin: "Colombia, Huila, El Diviso",
    varietal: "Bourbon Sidra",
    processing: "Washed",
    roaster: "Twenty Grams Roastery",
    roastLevel: "Very Light",
    tastingNotes: ["Tropical Guanabana", "Elderflower"],
    shortDescription: "Mellow sweetness like an elegant dance",
  }),
  new BeanInfo({
    imgSrc: honeyApricot,
    title: "La Zulia - Honey Apricot Heart",
    origin: "Colombia, Quindio, La Zulia",
    varietal: "Castillo",
    processing: "Honey Apricot Heart",
    roaster: "Kennta Roast",
    roastLevel: "Medium",
    tastingNotes: ["Apricot", "Nut", "Honey"],
    shortDescription:
      "Fruity aromatic yet clean and bright, a masterpiece by Ken",
  }),
  new BeanInfo({
    imgSrc: yeastChiroso,
    title: "Las Flores - Chiroso Yeast Anaerobic",
    origin: "Colombia, Huilia, Las Flores",
    varietal: "Caturra Chiroso",
    processing: "Thermal Shock, Yeast Anaerobic Natural",
    roaster: "Kennta Roast",
    roastLevel: "Medium",
    tastingNotes: ["White Peach", "Mango", "Candy-Sweetness"],
    shortDescription: "Sweet funky and juicy, perfect for the adventurous",
  }),
];
