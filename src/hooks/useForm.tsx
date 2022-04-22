import { useState } from 'react';

export default function useForm<T extends Object>(formulario: T) {
    const [state, setState] = useState(formulario);

    const onChange = (value: string, campo: keyof T) => {
        setState({
            ...state,
            [campo]: value,
        });
    };

    return {
        onChange,
        state,
    };
}
