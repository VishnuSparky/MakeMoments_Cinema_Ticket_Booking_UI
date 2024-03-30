import React,{ useContext, useState} from 'react';
import UpdatesData from '../../api/UpdatesData';
import Data from '../../DataContext';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";

const Update = () => {
    let [ count, setCount ] = useState(0);
    const { updates } = useContext(Data);
    let updatesData = updates.length>0 ? updates : UpdatesData;
    const [ movieName, setMovieName ] = useState(updatesData[count].name);
    const [ poster, setPoster ] = useState(updatesData[count].poster);
    const [ actor, setActor ] = useState(updatesData[count].actor.name);
    const [ actress, setActress ] = useState(updatesData[count].actress.name);
    const [ director, setDirector ] = useState(updatesData[count].director.name);
    const [ music, setMusic ] = useState(updatesData[count].music.name);
  return (
    <section className='updates'>
        <img src={poster} alt='updateBackground' />
        <h2> updates </h2>
        <div className='container'>
          <img src={poster} alt={movieName} />
          <div className='details'>
            <h3>{ movieName }</h3>
            <p> actor : { actor } </p>
            <p> actress : { actress} </p>
            <p> director : { director} </p>
            <p> music : { music} </p>
            <Link to={'/updates'}>see all{'>>'}</Link>   {/* changes happened here*/}
          </div>
          <IoMdArrowDropright onClick={()=>{ 
            if(count >= (updatesData.length-1))
                setCount(0);
            else
                setCount(++count);
            setMovieName(updatesData[count].name);
            setPoster(updatesData[count].poster);
            setActor(updatesData[count].actor.name);
            setActress(updatesData[count].actress.name);
            setDirector(updatesData[count].director.name);
            setMusic(updatesData[count].music.name);
          }}/>
        </div>
      </section>
  )
}

export default Update;
