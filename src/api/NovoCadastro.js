import Api from "./Api";

const NovoCadastro = async (callback, values) => {
    const HttpResponse = await Api
        .post('/cadastrar', values,{
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(function(response){
            return response.data.success;
        }).catch(function(e){
            console.warn(e)
            return undefined;
        })
    callback(HttpResponse)
}

export default NovoCadastro;