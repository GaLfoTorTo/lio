import Api from './Api';

const DadosFeed = async (callback) => {
    const HttpResponse = await Api
        .get('/feed')
        .then(function (response){
            return response.data;
        }).catch(function(e){
            console.warn(e);
        })
    callback(HttpResponse);
}

export default DadosFeed;