// Con esta variable nos ahorramos pone querySelector en las otras variables y solo ponemos "X" y el id
const X = (id) => document.querySelector(id);

// Sections
const headerSection = X('#header');
const trendingPreviewSection = X('#trendingPreview');
const categoriesPreviewSection = X('#categoriesPreview');
const genericSection = X('#genericList');
const movieDetailSection = X('#movieDetail');

// Lists & Containers
const searchForm = X('#searchForm');
const trendingMoviesPreviewList = X('.trendingPreview-movieList');
const categoriesPreviewList = X('.categoriesPreview-list');
const movieDetailCategoriesList = X('#movieDetail .categories-list');
const relatedMoviesContainer = X('.relatedMovies-scrollContainer');

// Elements
const headerTitle = X('.header-title');
// const arrowBtn = X('.header-arrow');
const headerCategoryTitle = X('.header-title--categoryView');

const searchFormInput = X('#searchForm input');
// const searchFormBtn = X('#searchBtn');

// const trendingBtn = X('.trendingPreview-btn');
const relatedMoviesTitle = X(".relatedMovies-title")

const movieDetailTitle = X('.movieDetail-title');
const movieDetailDescription = X('.movieDetail-description');
const movieDetailScore = X('.movieDetail-score');
const categoryTitle = X(".category-title");
const categoriesPreviewTitle = X(".categoriesPreview-title");


const posterPath = document.createElement("div");
  const imgPosterPath = document.createElement("img");