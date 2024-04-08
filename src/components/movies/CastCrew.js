import React,{ useContext }  from 'react';
import Data from '../../DataContext';
import { useNavigate } from 'react-router-dom';

const CastCrew = () => {
    const { singleMovie } = useContext(Data);
    const navigate = useNavigate();
    if(!singleMovie){
      navigate('/');
    }
    
  return (
    <section>
        <div>
          <h4> CAST </h4>
          <div>
            <figure>
              <img src={singleMovie.actor.pic} alt='actor' />
              <figcaption> {singleMovie.actor.name} <span>Actor</span></figcaption>
            </figure>
            <figure>
              <img src={singleMovie.actress.pic} alt='actress' />
              <figcaption> {singleMovie.actress.name} <span>Actress</span></figcaption>
            </figure>
            <figure>
              <img src={singleMovie.director.pic} alt='director' />
              <figcaption> {singleMovie.director.name} <span>Director</span></figcaption>
            </figure>
          </div>
        </div>
        <div>
          <h4> CREW </h4>
          <div>
            <figure>
              <img src={singleMovie.music.pic} alt='cast' />
              <figcaption> {singleMovie.music.name} <span>Music</span></figcaption>
            </figure>
            <figure>
              <img src={singleMovie.story.pic} alt='cast' />
              <figcaption> {singleMovie.story.name} <span>story</span></figcaption>
            </figure>
            <figure>
              <img src={singleMovie.cinematography.pic} alt='cast' />
              <figcaption> {singleMovie.cinematography.name} <span>Cinematography</span></figcaption>
            </figure>
          </div>
        </div>
      </section>
  )
}

export default CastCrew;
