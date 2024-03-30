import React, { useEffect, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import KollywoodData from './api/KollywoodData';
import BollywoodData from './api/BollywoodData';
import MollywoodData from './api/MollywoodData';
import AnimeData from './api/AnimeData';

const Data = createContext({});
axios.defaults.withCredentials = true;
const checkRefreshToken = async ( setUserName ,setAccessToken, setProfile)=>{
  try {
    const res = await axios.get('http://localhost:3500/refresh');
    if(res && res.data) {
      setUserName(res.data['username']);
      setAccessToken(res.data['accessToken']);
      setProfile(res.data['profile']);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data['accessToken']}`
    }
  } catch (err) {
    if(err.response){
      console.log(err.response.data.message);
      console.log(err.response.status);
    }
    console.log(`Error : ${err.message}`);
  }
}

const errorBoxModifier = (err) => {
  const errElemt =  document.querySelector('#errMsg');
  if(err.response){
    errElemt.innerHTML = `<span>${err.response.status}</span>${err.response.data.message}`
    errElemt.classList.remove('remove');
    errElemt.classList.add('add-block');
    errElemt.classList.add('errorBox');
    console.log(err.response.data.message);
    console.log(err.response.status);
  } else {
    errElemt.textContent = `Error : ${err.message}`;
  }
}

export const DataContext = ({ children }) => {
  const navigate = useNavigate();
  let [userName,setUserName] = useState(null);
  let [ accessToken, setAccessToken ] = useState(null);
  let [ authPage, setAuthPage ] = useState(false);
  let [ profile, setProfile ] = useState(null);
  const [ screen, setScreen ] = useState({});
  const [ time, setTime ] = useState(null);
  const [ date, setDate ] = useState(null);
  const [ cost, setCost ] = useState(0);
  const [ selectedSeats, setSelectedSeats ] = useState([]);
  const [ snacksCost, setSnacksCost] = useState(0);
  const [ movies, setMovies ] = useState([]);
  const [ kollywood, setKollywood ] = useState([]);
  const [ bollywood, setBollywood ] = useState([]);
  const [ mollywood, setMollywood ] = useState([]);
  const [ anime, setAnime ] = useState([]);
  const [ updates, setUpdates ] = useState([]);
  const [ movieName, setMovieName ] = useState('');
  const [ singleMovie, setSingleMovie ] = useState({});
  const [ reviews, setReviews ] = useState([]);
  const [ tickets, setTickets ] = useState([]);
  
  
  const successAuthentication = (name, atoken, pic) =>{
    setUserName(name);
    setAccessToken(atoken);
    setProfile(pic);
    setAuthPage(false);
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

  useEffect(()=>{
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    if(authPage){
      if(header?.classList.contains('header')){
        header.classList.toggle('header');
        header.classList.toggle('remove');
      }
      if(footer?.classList.contains('footer')){
        footer.classList.toggle('footer');
        footer.classList.toggle('remove');
      }
    } else {
      if(header?.classList.contains('remove')){
        header.classList.toggle('remove');
        header.classList.toggle('header');
      }
      if(footer?.classList.contains('remove')){
        footer.classList.toggle('remove');
        footer.classList.toggle('footer');
      }
    }
  },[authPage]);

  useEffect(()=>{
    extractData();
  },[movies]);

  useEffect(()=>{
    const data = getSingleMovie();
    setSingleMovie(data[0]);
    getReview();
  },[movieName]);

  useEffect(()=>{
    if(userName){
      fetchTickets();
    }
  },[userName]);

  const extractData = () => {
    movies.forEach( movie => {
    if(movie.hashTags.toLowerCase() === '#kollywood') setKollywood([...kollywood, movie]);
    else if(movie.hashTags.toLowerCase() === '#bollywood') setBollywood([...bollywood, movie]);
    else if(movie.hashTags.toLowerCase() === '#mollywood') setMollywood([...mollywood, movie]);
    else if(movie.hashTags.toLowerCase() === '#updates') setUpdates([...updates, movie]);
    else if(movie.hashTags.toLowerCase() === '#anime') setAnime([...anime, movie]);
    else console.log(`movie with hashTag ${movie.hashTags} is exists in database`);
    });
  }

  const fetchMovies = async() => {
    try {
      const res = await axios.get('http://localhost:3500/movies');
      if(res && res.data){
        return res.data;
      }
      return [];
    } catch (err) {
      if(err.response){
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
      console.log(`Error : ${err.message}`);
    }
  }

  const handleSignup = async (event, name, password, email, phone) => {
    event.preventDefault();
    const profile = document.getElementById('profile-input');
    if(!profile.files || !name || !password || !email ){
      alert('All fields are required');
      window.location.reload();
      return;
    }
    let bodyForm = new FormData();
    bodyForm.append('username', name);
    bodyForm.append('email',email);
    bodyForm.append('phoneno',phone);
    bodyForm.append('password',password);
    bodyForm.append('image',profile.files[0]);
    try {
      const res = await axios.post('http://localhost:3500/register',bodyForm);
      if(res && res.data) {
        successAuthentication(res.data['username'],res.data['accessToken'],res.data['profile']);
        navigate('/');
      }
    } catch (err) {
      errorBoxModifier(err);
    }
  }

  const handleLogin = async(event,email,password) =>{
    event.preventDefault();
    if(!email || !password) {
      alert('All fields are required');
      window.location.reload();
      return;
    }
    try {
      const res = await axios.post('http://localhost:3500/auth',{ email: email, password: password});
      if(res && res.data) {
        successAuthentication(res.data['username'],res.data['accessToken'],res.data['profile']);
        navigate('/');
      }
    } catch (err) {
      errorBoxModifier(err);
    }
  }
  
  const fetchScreenData = async() => {
    try{
      const res = await axios.get(`http://localhost:3500/screens/${movieName}`);
      if(res && res.data) {
        setScreen(res.data);
      }
    } catch(err) {
      if(err.response){
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
      console.log(`Error : ${err.message}`);
    }
  }

  const getSingleMovie = () =>{
    let combined = [];
    if(movies.length <= 0 ) {
      combined = [...combined, ...KollywoodData];
      combined = [...combined, ...BollywoodData];
      combined = [...combined, ...MollywoodData];
      combined = [...combined, ...AnimeData];
      const data = combined.filter( movie =>  movie.name.toLowerCase() === movieName );
      return data;
    }
    else {
      const data = movies.filter( movie =>  movie.name.toLowerCase() === movieName );
      return data;
    }
  }

  const getReview = async() =>{
    try {
      const res = await axios.get('http://localhost:3500/reviews');
      if(res && res.data) {
        res.data.forEach( rev => {
          if(rev.movie_name.toLowerCase() === movieName)
            setReviews([...reviews, rev]);
        })
      }
    } catch (err) {
      if(err.response){
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
      console.log(`Error : ${err.message}`);
    }
  }

  const fetchTickets = async() => {
    try {
      const res = await axios.get(`http://localhost:3500/tickets/${userName}`);
      if(res && res.data.length > 0){
        setTickets(res.data);
      }
    } catch (err) {
      if(err.response){
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
      console.log(`Error : ${err.message}`);
      
    }
  }

  const updateScreen = async() =>{
    let bodyData = {
      screenName : screen.screenName,
      screenNo : screen.screenNo
    };
    if(time === '10.00AM'){
      bodyData['show1'] = [...screen.show1, ...selectedSeats];
    }
    else if(time === '1.00PM'){
      bodyData['show2'] = [...screen.show2, ...selectedSeats];
    }
    else{
      bodyData['show3'] = [...screen.show3, ...selectedSeats ];
    }
    try {
      const res = await axios.patch('http://localhost:3500/screens',bodyData);
      if(res && res.data){
        console.log(res.data.message);
      }
    } catch (err) {
      if(err.response){
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
      console.log(`Error : ${err.message}`);
    }
  }

  const handlePayment = async() =>{
    try {
      const res = await axios.post('http://localhost:3500/tickets',{
        screenName : screen.screenName,
        screenNo :  screen.screenNo,
        show : time,
        movieName : movieName,
        cost : cost+snacksCost,
        no_of_tickets : selectedSeats.length,
        seatNo : `${selectedSeats[0]} - ${selectedSeats[selectedSeats.length -1]}`,
        date : date 
      });
      if(res.status === 201 && res.data){
        setTickets([...tickets, res.data]);
        console.log(res.data);
        updateScreen();
      }
      else{
        alert(`Error : ${res.status} ${res.data}`);
      }
      navigate('/');
    } catch (err) {
      if(err.response){
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
      console.log(`Error : ${err.message}`);
    }
  }

  const handleCancelTicket = async(tno) => {
    try {
        const res = await axios.delete('http://localhost:3500/tickets',{ ticketNo : tno});
        if(res && res.data) console.log(res.data.message);
        navigate('/');
    } catch (err) {
      if(err.response){
          console.log(err.response.data.message);
          console.log(err.response.status);
      }
      console.log(`Error : ${err.message}`);
    }
  }

  const handleUploadReview = async(con,tag,rat) =>{
    try {
      const res = await axios.post('http://localhost:3500/tickets',{
        movie_name : movieName,
        hashtags : tag,
        content : con,
        no_of_likes : 100,
        ratings : rat
      });
      if(res && res.data) console.log(res.data.message);
      navigate('/');
    } catch (err) {
      if(err.response){
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
      console.log(`Error : ${err.message}`);
    }
  }

  const handleLogOut = async() =>{
    try {
      const res = await axios.post('http://localhost:3500/logout', { username : userName});
      if(res && res.data) console.log(res.data.message);
      setUserName(null);
      setProfile(null);
    } catch (err) {
      if(err.response){
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
      console.log(`Error : ${err.message}`);
    }
  }

  return (
    <Data.Provider value={{ 
        userName, setUserName, accessToken, setAccessToken,
        handleSignup, handleLogin, authPage, setAuthPage,
        profile, setProfile, checkRefreshToken, fetchScreenData, screen, time, date,
        setTime, setDate, cost, setCost, selectedSeats, setSelectedSeats, setSnacksCost, snacksCost,
        fetchMovies, extractData ,movies, kollywood, bollywood, mollywood, anime, updates, setMovies, setAnime, setBollywood, setKollywood, setMollywood, setUpdates,
        singleMovie, setSingleMovie, movieName, setMovieName, getSingleMovie, handlePayment, 
        handleCancelTicket, handleUploadReview, handleLogOut
    }}>
      { children }
    </Data.Provider>
  )
}

export default Data;