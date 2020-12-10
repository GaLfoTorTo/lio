const ID = '5fcac6d4c0549154953906dc';

const DadosUsuarios = async (callback) => {

    const cabecalho = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'app-id': ID
        }
    }

    const dadosUsuariosHTTP = await(fetch('https://dummyapi.io/data/api/user?limit=15', cabecalho));
    const dadosJson = await dadosUsuariosHTTP.json();
    callback(dadosJson.data);
}

export default DadosUsuarios;