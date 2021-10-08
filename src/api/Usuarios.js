import Api from "./Api";

const Usuarios = async (callback) => {
    const HttpResponse = await Api
        .get('/usuarios')
        .then(function(response){
            return response.data;
        }).catch(function(e){
            console.warn(e)
        })
    callback(HttpResponse);
}

export default Usuarios;