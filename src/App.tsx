import ObjetosLiterales from "./typescript/ObjetosLiterales";
import TiposBasicos from "./typescript/TiposBasicos";
import React from 'react';
import Separador from "./Separador";
import Funciones from './typescript/Funciones';
import Contador from './components/Contador';
import ContadorHook from './components/ContadorHook';
export default function App() {
    return (
        <div className="mt-2">
            <h1>Introduccion a TypeScript con React</h1>
            <Separador></Separador>
            <hr />
            <ContadorHook></ContadorHook>
            <hr />
            <Contador></Contador>
            <hr />
            <Funciones></Funciones>
            <hr />
            <ObjetosLiterales></ObjetosLiterales>
            <hr />
            <TiposBasicos></TiposBasicos>
        </div>
    );
}
