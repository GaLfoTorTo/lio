import Api from './Api'

const PerfilUsuario = async (callback, id) => {
    const HttpResponse = await Api
        .get('/perfil/'+id)
        .then(function(response){
            return response.data;
        })
        .catch(function(e){
            console.warn(e)
        })
    callback(HttpResponse);
}

export default PerfilUsuario;