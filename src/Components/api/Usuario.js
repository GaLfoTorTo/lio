const dummyID = '5fcac6d4c0549154953906dc';

const Usuario = async (callback, idUsuario, setLocation = null) => {

    const cabecalho = {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            'app-id': dummyID
        }
    }

    const usuarioHTTP = await (fetch(`https://dummyapi.io/data/api/user/${idUsuario}`, cabecalho));
    const dadosJson = await usuarioHTTP.json();
    callback(dadosJson);
    if(setLocation){
        setLocation(dadosJson.location);
    }
}

export default Usuario;