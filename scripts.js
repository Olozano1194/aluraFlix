const peliculas = [
    { title: 'Señor de los anillos', image: 'https://es.web.img3.acsta.net/medias/nmedia/18/89/67/45/20061512.jpg' },
    { title: 'DeadPool', image: 'https://es.web.img3.acsta.net/pictures/18/04/26/11/50/5029006.jpg' },
    { title: 'La noche del demonio', image: 'https://m.media-amazon.com/images/S/pv-target-images/aa1947a0f6c789f7f978b64f2cf312ed1145c96057224641128b552cf73d8649.jpg' },
    { title: 'Avatar 2', image: 'https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg' },
    { title: 'Avatar 2', image: 'https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg' },
    { title: 'Avatar 2', image: 'https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg' },
    
    

    
    
]

const contenedorPadre = document.createElement('div');
contenedorPadre.classList.add('contenedor-padre');

peliculas.forEach(pelicula => {
    const contenedor = document.createElement('div');
    contenedor.classList.add('pelicula');
    contenedorPadre.appendChild(contenedor);

    const imgPelicula = document.createElement('img');
    imgPelicula.src = pelicula.image;
    contenedor.appendChild(imgPelicula);

    const titulo = document.createElement('p');
    titulo.textContent = pelicula.title;
    contenedor.appendChild(titulo);

});
document.body.appendChild(contenedorPadre);

//como hacer para las imagenes dependiendo el width se vayan poniendo uno abajo del otro?