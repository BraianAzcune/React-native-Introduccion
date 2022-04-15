import { useReducer } from 'react';

interface IAuthState {
    validando: boolean;
    username: string;
    nombre: string;
    token: string;
}

//objeto literal
const initialState: IAuthState = {
    validando: true,
    token: '',
    username: '',
    nombre: '',
};

type AuthAction = {
    type: 'login' | 'logout';
};

function authReducer(state: IAuthState, action: AuthAction): IAuthState {
    return initialState;
}

export default function Login() {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <>
            <h3>Login</h3>
            <div className="alert alert-info">Validando...</div>
            <div className="alert alert-danger">No autenticado</div>
            <div className="alert alert-success">Autenticado</div>
            <button className="btn btn-primary m-3">Login</button>
            <button className="btn btn-danger m-3">Log out</button>
        </>
    );
}
