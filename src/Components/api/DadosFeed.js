const ID = '5fcac6d4c0549154953906dc';

const DadosFeed = async (callback) => {

    const cabecalho = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'app-id': ID
        }
    }

    const dadosHTTP = await(fetch('https://dummyapi.io/data/api/post', cabecalho));
    const dadosJson = await dadosHTTP.json();
    const post = dadosJson.data
    const id = (post) => {
        for (var i = 0; post.length > i; i++) {
            if (post[0].id) {
                var idFoto = post[0].id
            }
        }
        return idFoto
    }
    const idFoto = id(post)
    callback(dadosJson.data, idFoto);
}

export default DadosFeed;