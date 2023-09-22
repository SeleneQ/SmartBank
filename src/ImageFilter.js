import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import utilidades from "./assets/images/utilidades.svg";
import salud from "./assets/images/salud.svg";
import transporte from "./assets/images/transporte.svg";
import otros from "./assets/images/otros.svg";
import { Icono, IconoTema } from "./Components/UI";



export default (type) => {
    console.log(type);
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
        Utilidades: <IconoTema src={utilidades} alt="Utilidades" />,
        Salud: <IconoTema src={salud} alt="Salud" />,
        Transporte: <IconoTema src={transporte} alt="Transporte" />,
        Otros: <IconoTema src={otros} alt="Otros" />,
        default: <IconoTema src={otros} alt="Otros" />,
    };

    return Images[type] || Images["default"];
};