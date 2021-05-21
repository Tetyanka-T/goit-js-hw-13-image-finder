import axios from 'axios';



axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ';
axios.defaults.headers.common.Authorization = '21724467-4ce0638ba06e77e7c079dfe7e';