window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);
const $ = (id) => document.querySelector(id);
const trendingBtn = $('.trendingPreview-btn');
const arrowBtn = $('.header-arrow');
const searchFormBtn = $("#searchBtn");



trendingBtn.addEventListener("click", ()=>{
    location.hash = "#trends";
});

arrowBtn.addEventListener('click', () => {
    history.back();
    // location.hash = "#home="
 });

searchFormBtn.addEventListener("click", () => {
    location.hash = "#search=" + searchFormInput.value
    ;
});

function navigator(){
    console.log({ location });

    if(location.hash.startsWith("#trends")){
        trensdsPage();
    } else if(location.hash.startsWith("#search=")){
        searchPage();
    }else if(location.hash.startsWith("#movie=")){
        movieDetailsPage();
    }else if(location.hash.startsWith("#category=")){
        categoriesPage();
    }else {homePage()}

}

function homePage(){
    console.log("Home");

headerSection.classList.remove("header-container--long");
headerSection.style.background = "";
arrowBtn.classList.add("inactive");
arrowBtn.classList.remove("header-arrow--white");
headerTitle.classList.remove("inactive");
headerCategoryTitle.classList.add("inactive");
searchForm.classList.remove("inactive");

trendingPreviewSection.classList.remove("inactive");
categoriesPreviewSection.classList.remove("inactive");
genericSection.classList.add("inactive");
movieDetailSection.classList.add("inactive");

}

function categoriesPage(){
    console.log("Categories");
    window.scrollTo(0, 0);

headerSection.classList.remove("header-container--long");
headerSection.style.background = "";
arrowBtn.classList.remove("inactive");
arrowBtn.classList.remove("header-arrow--white");
headerTitle.classList.add("inactive");
headerCategoryTitle.classList.remove("inactive");
searchForm.classList.add("inactive");

trendingPreviewSection.classList.add("inactive");
categoriesPreviewSection.classList.add("inactive");
genericSection.classList.remove("inactive");
movieDetailSection.classList.add("inactive");

//["#category", "id-name"]
const [_, categoryData] = location.hash.split("=");
const [categoryId, categoryName] = categoryData.split("-");
headerCategoryTitle.innerHTML = categoryName.replaceAll("%20"," ");
getMoviesByCategory(categoryId);
}

function  movieDetailsPage(){
    console.log("Movies");
    
headerSection.classList.add("header-container--long");
// headerSection.style.background = "";
arrowBtn.classList.remove("inactive");
arrowBtn.classList.add("header-arrow--white");
headerTitle.classList.add("inactive");
headerCategoryTitle.classList.add("inactive");
searchForm.classList.add("inactive");

trendingPreviewSection.classList.add("inactive");
categoriesPreviewSection.classList.add("inactive");
genericSection.classList.add("inactive");
movieDetailSection.classList.remove("inactive");
}

function searchPage(){
    console.log("Search");

headerSection.classList.remove("header-container--long");
// headerSection.style.background = "";
arrowBtn.classList.remove("inactive");
arrowBtn.classList.remove("header-arrow--white");
headerTitle.classList.add("inactive");
headerCategoryTitle.classList.add("inactive");
searchForm.classList.remove("inactive");

trendingPreviewSection.classList.add("inactive");
categoriesPreviewSection.classList.add("inactive");
genericSection.classList.remove("inactive");
movieDetailSection.classList.add("inactive");

//["#search", "id-name"]
const [_, query] = location.hash.split("=");
getMoviesBySearch(query);
}

function  trensdsPage(){
    console.log("Trensds");
    
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");
    
    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    headerCategoryTitle.innerHTML = "TRENDS";
    getTrendingMovies();
}

getTrendingMoviesPreview();
getCategoriesPreview();