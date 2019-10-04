/* var xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){//4 - voltou pra gente.
        console.log(JSON.parse( xhr.responseText ));
    }
} */

/* var minhaPromisse = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}
 */
// minhaPromisse()

axios.get('https://api.github.com/users/bladellano')
.then(function(response){
    console.log(response.data.avatar_url);
})
.catch(function(error){
    console.warn(error);
});

// console.log(resultado);