import React, { useEffect, useRef, useState } from 'react';
import { Usuario, UsuariosResponse } from '../interfaces/reqRespUsuarios';

export default function useUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);

    const cargarUsuarios = () => {
        fetch(
            `https://reqres.in/api/users?${new URLSearchParams({
                page: paginaRef.current.toString(),
            })}`
        )
            .then((response) => response.json())
            .then((data: UsuariosResponse) => {
                console.log(data.data.length);
                if (data.data.length > 0) {
                    paginaRef.current++;
                    setUsuarios(data.data);
                } else {
                    alert('No hay mas usuarios');
                }
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        cargarUsuarios();
    }, []);

    return { usuarios, cargarUsuarios } as const;
}
