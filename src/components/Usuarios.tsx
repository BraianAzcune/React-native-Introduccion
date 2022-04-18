import useUsuarios from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRespUsuarios';

export default function Usuarios() {
    const { usuarios, paginaAnterior, paginaSiguiente, primeraPagina, finPagina } = useUsuarios();

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
            <button disabled={primeraPagina} onClick={paginaAnterior} className="btn btn-primary">
                Anterior
            </button>
            <button disabled={finPagina} onClick={paginaSiguiente} className="btn btn-primary">
                Siguientes
            </button>
        </>
    );
}
