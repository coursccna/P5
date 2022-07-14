const url = './package-lock.json';

let requete = new XMLHttpRequest ();
requete.open ('GET' , url)
requete.responseType = 'json'
requete.send ();
requete.onload = function () {
    if ( requete.readyState === XMLHttpRequest.DONE)
    {
        if (requete.status === 200) 
        {
            let reponse = requete.response;
            console.log(reponse)
        }
    }
}
