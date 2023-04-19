const botonOscuro = document.getElementById("icono");
const fondo = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    "api_key": API_KEY,
  },
});

async function getTrendingMoviesPreview(){
    const { data } = await api("trending/movie/day");
    const movies = data.results;

    //mostrar las peliculas en tencendcias 
    movies.forEach(movie => {
      const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
      
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container');
  
      const movieImg = document.createElement('img');
      movieImg.classList.add('movie-img');
      movieImg.setAttribute('alt', movie.title);
      movieImg.setAttribute(
        'src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,
      );
  
      movieContainer.appendChild(movieImg);
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
    
}


async function getCategoriesPreview(){
    const { data } = await api("genre/movie/list");
    // const data = await res.json();
    const categories = data.genres;

    //mostrar las peliculas en tencendcias 
    categories.forEach(category => {
      const previewcategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')
      
     const categoryContainer = document.createElement('div');
     categoryContainer.classList.add('category-container');
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.setAttribute('id', "id" + category.id);
        const categoryTitleText = document.createTextNode(category.name);
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewcategoriesContainer.appendChild(categoryContainer);


    //   categoryImg.setAttribute(
    //     'src',
    //     'https://image.tmdb.org/t/p/w300' + category.poster_path,
    //   );
  
     
    });
    
}

botonOscuro.addEventListener("click", cambio)

function cambio(){
    fondo.classList.toggle("active");
    h1.classList.toggle("active");
    h2.classList.toggle("active");
    h3.classList.toggle("active");
    
    
}
getTrendingMoviesPreview();
getCategoriesPreview()
