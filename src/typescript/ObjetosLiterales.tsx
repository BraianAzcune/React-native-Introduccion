import React from 'react';

interface Direccion {
    calle: string;
    numero: number;
}

interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

export default function ObjetosLiterales() {
    const persona: Persona = {
        nombre: 'Juan',
        edad: 21,
        direccion: {
            calle: 'Calle falsa',
            numero: 123,
        },
    };
    return (
        <div>
            <h3>clase 12 objetos literales</h3>
            <code>
                <pre>{JSON.stringify(persona, null, 2)}</pre>
            </code>
        </div>
    );
}
