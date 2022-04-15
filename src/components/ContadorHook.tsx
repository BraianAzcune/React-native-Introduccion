import { useState } from 'react';

export default function ContadorHook() {
    const [valor, setValor] = useState(0);

    const acumular = () => setValor(valor + 1);
    const descontar = () => setValor(valor - 1);

    return (
        <>
            <h3>
                Contador Hook <small>{valor}</small>{' '}
            </h3>
            <button onClick={acumular} className="btn btn-primary m-0">
                add
            </button>
            <button onClick={descontar} className="btn btn-warning m-2">
                sub
            </button>
        </>
    );
}
