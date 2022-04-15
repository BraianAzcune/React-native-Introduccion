import { useState } from 'react';
import useCounter from '../hooks/useCounter';

export default function ContadorHook() {
    const [valor, acumular] = useCounter(0);
    return (
        <>
            <h3>
                Contador Hook <small>{valor}</small>{' '}
            </h3>
            <button onClick={() => acumular(1)} className="btn btn-primary m-0">
                add
            </button>
            <button
                onClick={() => acumular(-1)}
                className="btn btn-warning m-2"
            >
                sub
            </button>
        </>
    );
}
