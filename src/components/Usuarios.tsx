import { useEffect, useState } from 'react';
import { Usuario, UsuariosResponse } from '../interfaces/reqRespUsuarios';

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then((response) => response.json())
            .then((data: UsuariosResponse) => {
                console.log(data.data[2].first_name);
                setUsuarios(data.data);
            })
            .catch((error) => console.error(error));
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
            <button className="btn btn-primary">Siguientes</button>
        </>
    );
}
