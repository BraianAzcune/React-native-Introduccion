import { useEffect, useRef, useState } from 'react';
import { Usuario, UsuariosResponse } from '../interfaces/reqRespUsuarios';

export default function Usuarios() {
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

    const renderItem = (usuario: Usuario) => {
        const { id, first_name, avatar, email } = usuario;
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt={first_name} style={{ width: 30, height: 30 }} />
                </td>
                <td>{first_name}</td>
                <td>{email}</td>
            </tr>
        );
    };

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>{usuarios.map((user) => renderItem(user))}</tbody>
            </table>
            <button onClick={cargarUsuarios} className="btn btn-primary">
                Siguientes
            </button>
        </>
    );
}
