const key = '6f87c623a31dce069955c5ae8cea63b7'




const requests = {
requestPopular: {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Zjg3YzYyM2EzMWRjZTA2OTk1NWM1YWU4Y2VhNjNiNyIsInN1YiI6IjY1MmQ0YTgxZWE4NGM3MDE0ZTA2Mzc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6i0iye_ywpGqoj0GuW5P55Ny-0Wg6VCqao8I8xLV2M'
  }
},
    requesrTopRated: 'https://moviesminidatabase.p.rapidapi.com/movie/order/byRating/',
    requestTrending: 'https://moviesminidatabase.p.rapidapi.com/movie/id/%7Bmovie_id%7D/',
    requestGenres:  'https://moviesminidatabase.p.rapidapi.com/genres/',
    requestUpcoming: 'https://moviesminidatabase.p.rapidapi.com/movie/order/upcoming/',

}


export default requests