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

//molde para los llamados de las apis
function createMovies(movies, container){
  container.innerHTML = "";
    //mostrar las peliculas  
  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    movieContainer.addEventListener("click", ()=>{
      posterPath.innerHTML = "";
      location.hash = "#movie=" + movie.id;
    })

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute(
      'src',
      'https://image.tmdb.org/t/p/w300' + movie.poster_path,
    );

    movieContainer.appendChild(movieImg);
    container.appendChild(movieContainer);
  });
};

function createCategories(categories, container){
  container.innerHTML = "";
    //mostrar las peliculas en tencendcias 
    categories.forEach(category => {
    
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
   
       const categoryTitle = document.createElement('h3');
       categoryTitle.classList.add('category-title');
       categoryTitle.setAttribute('id', "id" + category.id);
         const categoryTitleText = document.createTextNode(category.name);
         categoryTitle.addEventListener("click", ()=>{
           location.hash = `#category=${category.id}-${category.name}`
         })
         categoryTitle.appendChild(categoryTitleText);
         categoryContainer.appendChild(categoryTitle);
         container.appendChild(categoryContainer);
   
     });
}

//llamados a las apis
async function getTrendingMoviesPreview(){
  const { data } = await api("trending/movie/day");
  const movies = data.results;

   createMovies(movies, trendingMoviesPreviewList);
}

async function getTrendingMovies(){
  const { data } = await api("trending/movie/day");
  const movies = data.results;

createMovies(movies, genericSection);
}

async function getMovieById(id){
  const { data: movie } = await api("movie/" + id);
  // headerSection.innerHTML = "";
  const movieImgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  headerSection.style.background = `
  linear-gradient(
    180deg, 
    rgba(0, 0, 0, 0.35) 19.27%, 
    rgba(0, 0, 0, 0) 29.17%
    ),
    url(${movieImgUrl})`;
  movieDetailTitle.textContent = movie.title;
  movieDetailDescription.textContent = movie.overview;
  movieDetailScore.textContent = movie.vote_average;
  
  imgPosterPath.src = movieImgUrl;
  imgPosterPath.classList.add("imgPosterPath");
  posterPath.appendChild(imgPosterPath);
  headerSection.appendChild(posterPath);

  createCategories(movie.genres, movieDetailCategoriesList);
  getRelatedMoviesId(id);
}

async function getRelatedMoviesId(id){
  const { data } = await api(`movie/${id}/recommendations`);
  const relatedMovies = data.results;

  createMovies(relatedMovies, relatedMoviesContainer)
  relatedMoviesContainer.scrollTo(0, 0);
}

async function getMoviesByCategory(id){
  const { data } = await api("discover/movie",{
    params: {
      with_genres: id,
    },
  });
  const movies = data.results;
  // genericSection.innerHTML = "";
  createMovies(movies, genericSection );
}

async function getMoviesBySearch(query){
  const { data } = await api("search/movie",{
    params: {
      query,
    },
  });
  const movies = data.results;
  
  createMovies(movies, genericSection);
}

async function getCategoriesPreview(){
    const { data } = await api("genre/movie/list");
    // const data = await res.json();
    const categories = data.genres;

  createCategories(categories, categoriesPreviewList);
}

botonOscuro.addEventListener("click", modoOscuro)

function modoOscuro(){
    fondo.classList.toggle("active");
    movieDetailSection.classList.toggle("active");
    movieDetailTitle.classList.toggle("active");
    h1.classList.toggle("active");
    h2.classList.toggle("active");
    h3.classList.toggle("active");
    relatedMoviesTitle.classList.toggle("active");
    categoryTitle.classList.toggle("active");
    categoriesPreviewTitle.classList.toggle("active");
    headerCategoryTitle.classList.toggle("active");

}

