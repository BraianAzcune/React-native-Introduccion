# Curso REACT-NATIVE SECCION-2 REFORZAMIENTO Profesor: Fernando Herrera

se recomienda tener instalado los plugins y herramientas que muestra aqui

https://gist.github.com/Klerith/e2c1fe2bcf5bfcd0a12fff653e725284


estos para vscode:

(paste JSON an create typescript interface) https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype
(autoimport typescript) https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter
(React, redux, snippet) https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
(React, redux, snippet) https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets 

## clase 8 inicio

creamos el proyecto Create-react-app con el template typescript.
### Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

ademas adjuntamos al index.html el .css de boostrap.

## clase 9-... componentes funcionales con Typescript
borramos todo lo inutil, y creamos un template basico

# clase 10 tipos basicos typescript
jugando con definir tipos basicos.

# clase 12 objetos literales e interfaces

los objetos literales no se pueden mostrar asi como asi, es necesario recorrer sus atributos. o pasarlo por JSON.stringify.

con los objetos literales typescript no te permite añadirle propiedades al vuelo.

diferencia entre type, class e interface.
las clases crean instancias.
las interfaces no existen en javascript, asi que son 0 impacto, esta sirven para definir una estructura de datos en typescript y poder apoyarte de ellas.
type es una version simple de las interfaces.

# clase 13 funciones y su retorno
mostrar que esta tipado el retorno aunque no lo explicitemos.

# clase 14 hook useState

# clase 15 custom hook useCounter

# clase 16 componente login, preparacion para practicar useReducer

# clase 17, useReducer

en Typescript para que el useReducer funcione correctamente tendremos que definir
una Interfaz de estado, que nuestro objeto literal initialState dira que es de ese tipo.

luego el reducer dira que retorna un objeto que implementa la interfaz.
y recibe el estado que implementa la interfaz, y la accion que sera un type.

# clase 18, usando useReducer.
implementamos el primer caso logout, al principio esta en estado de validacion, y al ratito pasa al estado logout.
cambiando el cartel de "validando".

# clase 19, terminando useReducer.

cambiamos como se define el type AuthAction a dos posibles objetos.
esto permite que cuando estamos dentro de un switch si entramos al case de logout nos advierta que el payload no esta disponible.

ademas podemos usar 
```js
{
    ...action.payload
}
```
y si falta algun campo, nos avisara de que LoginPayload no satisface la definicion del IAuthState

# clase 20-22 peticiones http axios, mostrar usuarios

usuaremos esta api que esta siempre disponible para obtener fake data

https://reqres.in/

en particular:

https://reqres.in/api/users?page=2

esto nos devulve un json. Pero lo convertiremos a interfaces de Typescript para no equivocarnos, esto ademas lo haremos con el plugin que instalamos.

Pero antes probarlo en Postman o Insomnia, para ver que la Raw data, venga bien.

