import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from './Requests'


const Home = () => {
  return (
    <>
     <Main />
     <Row rowID='1' title='UpComming' fetchURL={requests.requestUpcoming}/>
     <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
     <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
     <Row rowID='4' title='TopRated' fetchURL={requests.requesrTopRated}/>
     <Row rowID='5' title='Genres' fetchURL={requests.requestGenres}/>
    </>
  )
}

export default Home