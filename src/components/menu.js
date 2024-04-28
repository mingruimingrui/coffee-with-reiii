import { Component } from "react";
import "./menu.css";

const BEAN_INFOS = [
  {
    title: "La Zulia - Castillo Honey Apricot Heart",
    origin: "Colombia, Quindio, La Zulia",
    varietal: "Castillo",
    processing: "Honey Apricot Heart",
    roaster: "Kennta Roast",
    roastLevel: "Medium",
    tastingNotes: "Apricot, Nut, Honey Sweetness",
  },
  {
    title: "Las Flores - Caturra Chiroso Yeast Anaerobic",
    origin: "Colombia, Huilia, Las Flores",
    varietal: "Caturra Chiroso",
    processing: "Thermal Shock, Yeast Anaerobic Natural",
    roaster: "Kennta Roast",
    roastLevel: "Medium",
    tastingNotes: "Rose, White Peach, Mango",
  },
  {
    title: "Finca Betel - Pink Bourbon",
    origin: "Colombia, Valle de Cauca, Finca Betel",
    varietal: "Pink Bourbon",
    processing: "Semi-Washed",
    roaster: "Twenty Grams Roastery",
    roastLevel: "Very Light",
    tastingNotes: "Promegranate, Raspberry, Roselle",
  },
  {
    title: "El Diviso - Bourbon Sidra",
    origin: "Colombia, Huila, El Diviso",
    varietal: "Bourbon Sidra",
    processing: "Washed",
    roaster: "Twenty Grams Roastery",
    roastLevel: "Very Light",
    tastingNotes: "Tropical Guanabana, Elderflower",
  },
  {
    title: "Ethiopia Asegedech Sholi",
    origin: "Ethiopia, Gedeb, Banko Tatatu",
    varietal: "74110, 74112",
    processing: "Natural",
    roaster: "Apartment",
    roastLevel: "Light",
    tastingNotes: "Red grape, Nectarine, Roselle",
  },
];

export class Menu extends Component {
  render() {
    let cards = BEAN_INFOS.map((info) => (
      <div className="MenuCard">
        <h3>{info.title}</h3>
        <hr/>
        <p><span className="">Tasting Notes:</span> <span className="bold">{info.tastingNotes}</span></p>
        <p>Origin: {info.origin} | Varietal: {info.varietal} | Processing: {info.processing}</p>
        <p>Roaster: {info.roaster} | Roast Level: {info.roastLevel}</p>
      </div>
    ));

    return <div className="Menu">{cards}</div>;
  }
}
