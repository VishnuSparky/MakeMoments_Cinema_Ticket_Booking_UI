import React,{ useContext } from 'react';
import Data from '../../DataContext';
import { FaRegStar } from "react-icons/fa6";
import ReviewData from '../../api/ReviewData';

const Reviews = () => {
    const { reviews } = useContext(Data);
    const pictures = [`${process.env.PUBLIC_URL}/assets/allmovies/user1.jpg`, `${process.env.PUBLIC_URL}/assets/allmovies/user2.png`, `${process.env.PUBLIC_URL}/assets/allmovies/user3.png`, `${process.env.PUBLIC_URL}/assets/allmovies/user4.png`];

    const reviewDiv = (data, index) => {
        let randnum = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        return (
            <div key={index}>
                <figure>
                    <img src={pictures[randnum]} alt={data.username} />
                    <figcaption> {data.username} </figcaption>
                </figure>
                <p> {data.hashtags} </p>
                <p> {data.content} </p>
                <div>
                    <p> <FaRegStar /> {data.ratings} </p>
                </div>
            </div>
        );
    }

  return (
    <section>
        {
            reviews && reviews.length>0 ? reviews.map( (rev,index) => reviewDiv(rev, index) )
            : ReviewData.map( (rev,index) => reviewDiv(rev, index) )
        }
      </section>
  )
}

export default Reviews;
