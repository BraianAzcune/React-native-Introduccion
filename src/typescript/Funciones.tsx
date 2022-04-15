import React from 'react';

export default function Funciones() {
    const suma = (a: number, b: number) => a + b;

    return (
        <>
            <h3>Funciones</h3>
            {suma(1, 2)}
        </>
    );
}
