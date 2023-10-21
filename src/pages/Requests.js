

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
    requesrTopRated: {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/top_rated',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Zjg3YzYyM2EzMWRjZTA2OTk1NWM1YWU4Y2VhNjNiNyIsInN1YiI6IjY1MmQ0YTgxZWE4NGM3MDE0ZTA2Mzc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6i0iye_ywpGqoj0GuW5P55Ny-0Wg6VCqao8I8xLV2M'
      }
    },
    requestTrending: {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day',
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Zjg3YzYyM2EzMWRjZTA2OTk1NWM1YWU4Y2VhNjNiNyIsInN1YiI6IjY1MmQ0YTgxZWE4NGM3MDE0ZTA2Mzc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6i0iye_ywpGqoj0GuW5P55Ny-0Wg6VCqao8I8xLV2M'
      }
    },
    requestGenres:  {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/genre/movie/list',
      params: {language: 'en'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Zjg3YzYyM2EzMWRjZTA2OTk1NWM1YWU4Y2VhNjNiNyIsInN1YiI6IjY1MmQ0YTgxZWE4NGM3MDE0ZTA2Mzc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6i0iye_ywpGqoj0GuW5P55Ny-0Wg6VCqao8I8xLV2M'
      }
    },
    requestUpcoming: {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/upcoming',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Zjg3YzYyM2EzMWRjZTA2OTk1NWM1YWU4Y2VhNjNiNyIsInN1YiI6IjY1MmQ0YTgxZWE4NGM3MDE0ZTA2Mzc1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6i0iye_ywpGqoj0GuW5P55Ny-0Wg6VCqao8I8xLV2M'
      }
    },

}


export default requests