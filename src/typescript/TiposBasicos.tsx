import React from "react";

export default function TiposBasicos() {

  let nombre: string | number = 'Juan';
  nombre = 121;
  let verdadero: boolean = true;
  const nombreHermanos: string[] = ['Juan', 'Pedro', 'Maria'];

  return (
      <>
          <h2>clase 8 tipos basicos</h2>
          <hr />
          {nombre}
          <hr />
          {verdadero ? 'Verdadero' : 'Falso'}
          <hr />
          <div style={{ background: 'cyan' }}>
              {nombreHermanos.map((nombreHermano: string) => (
                  <span key={nombreHermano}>{nombreHermano}, </span>
              ))}
          </div>
      </>
  );
}
