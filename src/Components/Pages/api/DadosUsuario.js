const ID = '5fcac6d4c0549154953906dc';

const DadosUsuario = async (callback, idUsuario) => {

    const cabecalho = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'app-id': ID
        }
    }

    const dadosUsuarioHTTP = await(fetch(`https://dummyapi.io/data/api/user/${idUsuario}/post?limit=10`, cabecalho));
    const dadosJson = await dadosUsuarioHTTP.json();
    callback(dadosJson.data);
}

export default DadosUsuario;