# Curso REACT-NATIVE SECCION-2 REFORZAMIENTO Profesor: Fernando Herrera

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