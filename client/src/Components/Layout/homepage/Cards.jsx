import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import NewCards from './newcards';
import img1 from "./img 1.jpg"
import img2 from "./img 2.jpg"
import img4 from "./img 4.jpg"


function Cards() {

 

  return (
    <div style={{width:"100vw"}}>
    <div className='cards'>
      <h1>Testimonials</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='The portal is very user friendly in terms of searching resumes and job postings. Also, they have a good database to search resumes. As far as services are concerned its excellent! Thank you so much for all your effort.'
              path='/'
            />
            <CardItem
              src={img2}
              text='This is an excellent job portal, we value the resumes received through this channel. It provides relevant and accurate matches as per the job openings. Magic Search and Power search are extremely useful tools.'
              path='/'
            />
            <CardItem
              src={img4}
              text='The Websites database has been one of our reliable sources for recruitment, backed by a very efficient team who would go out of their way to make sure that requests are taken ahead with immediate and complete closure.'
              path='/'
            />
          </ul>
          {/* <ul>
            <CardItem
              src='images/img 1.jpg'
              text='The Websites database has been one of our reliable sources for recruitment, backed by a very efficient team who would go out of their way to make sure that requests are taken ahead with immediate and complete closure.'
              path='/'
            />
            <CardItem
              // src='images/img 1.jpg'
              // text='The Websites database has been one of our reliable sources for recruitment, backed by a very efficient team who would go out of their way to make sure that requests are taken ahead with immediate and complete closure.'
              // path='/'
            />
            <CardItem
              // src='images/img 1.jpg'
              // text='The Websites database has been one of our reliable sources for recruitment, backed by a very efficient team who would go out of their way to make sure that requests are taken ahead with immediate and complete closure.'
              // path='/'
            />
          </ul> */}
           
        </div>
      </div>
      <h3 style={{textAlign:"center"}}>Creator</h3> 
    </div>
    </div>
  );
}

export default Cards;
