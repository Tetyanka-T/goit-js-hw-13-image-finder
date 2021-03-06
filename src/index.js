// import ApiService from './js/apiService';
import API from './js/apiService';
import photoCards from './templates/photo-card';
import './sass/main.scss';


const refs = {
    searchForm: document.querySelector('#search-form'),
    galleryList: document.querySelector('.gallery'),
    showMoreBtn: document.querySelector('.show-more-button'),
}

// const apiService = new ApiService ();

refs.searchForm.addEventListener('submit', onSearch);
refs.showMoreBtn.addEventListener('click', onLoadMore);



function onSearch (e) {
    e.preventDefault();

clearContainer ()
API.query = e.currentTarget.elements.query.value;
API.resetPage();
API.fetchPhoto().then(addGallery);

}

function onLoadMore () {
    API.fetchPhoto().then(addGallery);
}

function addGallery (hits) {
    refs.galleryList.insertAdjacentHTML('beforeend', photoCards(hits));

    window.scrollTo(0, 1000);

    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
}

function clearContainer () {
    refs.galleryList.innerHTML = '';
}