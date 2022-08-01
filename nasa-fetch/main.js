document.addEventListener('DOMContentLoaded', () => {

    let $gallery = document.querySelector('.gallery');
    let $cardModel = $gallery.querySelector('.model');
    let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?camera=MAST&page=1&sol=1000&api_key=';
    const key = 'Nr2x9fWYPBnRcLmRxxdHCdknx3ZljSOxeQFUf37b';

    fetch(url+key)
        .then((response)=> {return response.json()})
        .then((pictures) => {

            pictures.photos.forEach((photo, key) => {
                //On clone le model pour obtenir un nouvel élément
                let $card = $cardModel.cloneNode(true)

                //Retire la classe model (seul le modèle la conserve pour ne pas être afficher)
                $card.classList.remove('model');


                $card.querySelector('img').setAttribute('src', photo.img_src );

                //Modification du nom du rover
                $card.querySelector('.info .rover-name').innerText = photo.rover.name

                //Modification de la date
                $card.querySelector('.info .earth_date').innerText = photo.earth_date

                //Ajout de la card à la fin de la galerie
                $gallery.appendChild($card);
            })

            $cardModel.remove();
        })
});