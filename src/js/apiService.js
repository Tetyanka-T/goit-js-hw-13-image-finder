export default class ApiService {
  constructor() {
    this.searhQuery = '';
    this.page = 1;
  }

  fetchPhoto() {
      console.log(this);
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searhQuery}&page=${this.page}&per_page=12&key=21724467-4ce0638ba06e77e7c079dfe7e`;
    // const autKey = '21724467-4ce0638ba06e77e7c079dfe7e';
    return fetch(url)
      .then(r => r.json())
      .then(photo => {
          this.page +=1;
          
          return photo.hits;
      });
  }
  resetPage () {
      this.page = 1;
  }
  get query() {
    return this.searhQuery;
  }
  set query(newQuery) {
      this.searhQuery = newQuery;
  }
}
