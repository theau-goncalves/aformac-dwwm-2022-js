document.addEventListener('DOMContentLoaded', () => {

    let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&sol=1000&api_key=';
    const key = 'Nr2x9fWYPBnRcLmRxxdHCdknx3ZljSOxeQFUf37b';

    fetch(url+key)
        .then((response)=> {return response.json()})
        .then((pictures) => {
            console.log(pictures)
        })
});