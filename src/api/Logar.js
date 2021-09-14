import Api from './Api';

const Logar = async (email, senha, platform) => {
    const HttpResponse = await Api
        .post('/logarApp', {
            email: email,
            senha: senha,
            device_name: platform
        }).then( function(response) {
            return response.data;
        }).catch(function (e){
            console.warn(e)
            return undefined
        });
    return HttpResponse;
}

export default Logar;