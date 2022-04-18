import React, { useEffect, useRef, useState } from 'react';
import { Usuario, UsuariosResponse } from '../interfaces/reqRespUsuarios';

export default function useUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);
    const [finPagina, setfinPagina] = useState(false);
    const [primeraPagina, setprimeraPagina] = useState(true);

    async function cargarUsuarios() {
        const data = await fetch(
            `https://reqres.in/api/users?${new URLSearchParams({
                page: paginaRef.current.toString(),
            })}`
        ).catch((error) => console.error(error));
        const resp: UsuariosResponse = await data?.json();
        if (resp) {
            return resp.data;
        }
        return [];
    }

    async function paginaSiguiente() {
        paginaRef.current++;
        const usuarios = await cargarUsuarios();
        if (usuarios.length > 0) {
            setprimeraPagina(false);
            setUsuarios(usuarios);
        } else {
            setfinPagina(true);
            paginaRef.current--;
        }
    }

    async function paginaAnterior() {
        paginaRef.current--;
        if (paginaRef.current >= 1) {
            const usuarios = await cargarUsuarios();
            setfinPagina(false);
            setUsuarios(usuarios);
            if (paginaRef.current === 1) {
                setprimeraPagina(true);
            }
        } else {
            paginaRef.current = 1;
        }
    }

    useEffect(() => {
        cargarUsuarios().then((usuarios) => {
            setUsuarios(usuarios);
        });
    }, []);
    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente,
        primeraPagina,
        finPagina,
    } as const;
}
