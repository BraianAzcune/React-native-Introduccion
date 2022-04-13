import ObjetosLiterales from "./typescript/ObjetosLiterales";
import TiposBasicos from "./typescript/TiposBasicos";
import React from 'react';
import Separador from "./Separador";
export default function App() {
  return (
    <div className="mt-2">
      <h1>Introduccion a TypeScript con React</h1>
      <Separador></Separador>
      <hr />
      <ObjetosLiterales></ObjetosLiterales>
      <hr />
      <TiposBasicos></TiposBasicos>

    </div>
  );
}
