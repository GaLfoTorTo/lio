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
    callback(dadosJson);
}

export default DadosFeed;