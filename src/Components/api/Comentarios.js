const ID = '601c5d687dcb908539bc5d5f';
//601c5d687dcb908539bc5d5f 5fcac6d4c0549154953906dc

const Comentarios = async (callback, idFoto ) => {

    const cabecalho = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'app-id': ID
        }
    }

    const feedHTTP = await(fetch(`https://dummyapi.io/data/api/post/${idFoto}/comment?limit=10`, cabecalho));
    const dadosJson = await feedHTTP.json();
    callback(dadosJson.data);
}

export default Comentarios;