let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'andres',
        id,
    }

    if (id === 20) {
        callback(`el usuario con id ${ id }, no existe en la BD`)

    } else {
        callback(usuario);
    }
}

getUsuarioById(20, (usuario) => {
    console.log('el numero de base de dato es', usuario);
});