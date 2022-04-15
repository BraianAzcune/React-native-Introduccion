import { useState } from 'react';

export default function useCounter(initialState: number) {
    const [valor, setValor] = useState(initialState);
    const acumular = (increment: number) => setValor(valor + increment);
    // usamos el as const, porque sino typescript molesta y mucho.
    return [valor, acumular] as const;
}
