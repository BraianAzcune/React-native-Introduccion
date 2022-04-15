import { useEffect, useReducer } from 'react';

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

type LoginPayload = {
    username: string;
    nombre: string;
};

type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginPayload };

function authReducer(state: IAuthState, action: AuthAction): IAuthState {
    switch (action.type) {
        case 'login':
            return {
                validando: false,
                token: 'token-prueba-123',
                ...action.payload,
            };
        case 'logout':
            return {
                validando: false,
                token: '',
                username: '',
                nombre: '',
            };
        default:
            console.warn('Accion no reconocida', action);
            return state;
    }
}

export default function Login() {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, []);

    // Que mensaje mostrar segun el estado.
    let mensaje;
    if (state.validando) {
        mensaje = <div className="alert alert-info">Validando...</div>;
    } else {
        if (!state.token) {
            const login = () =>
                dispatch({ type: 'login', payload: { username: 'juan', nombre: 'Juan Perez' } });

            mensaje = (
                <>
                    <div className="alert alert-danger">No autenticado</div>
                    <button onClick={login} className="btn btn-primary m-3">
                        Login
                    </button>
                </>
            );
        } else {
            const logout = () => dispatch({ type: 'logout' });

            mensaje = (
                <>
                    <div className="alert alert-success">Autenticado como: {state.nombre}</div>
                    <button onClick={logout} className="btn btn-danger m-3">
                        Log out
                    </button>
                </>
            );
        }
    }

    return (
        <>
            <h3>Login</h3>
            {mensaje}
        </>
    );
}
