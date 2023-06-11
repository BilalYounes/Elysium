import React, { useState, useEffect } from 'react';
import { ErrorPage, Sidebar } from "../../components";
import './PropertiesDetils.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from 'react-router-dom';
import {
  faCircleArrowLeft,
  faCircleArrowRight,

  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import LazyLoad from 'react-lazyload';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";

import { LinearProgress } from '@mui/material';

const PropertiesDetils = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);


  ///ScrolToTheTop
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);



  const { id } = useParams();
  const params = {
    externalID: id
  };
  const url = 'https://bayut.p.rapidapi.com/properties/detail';

  const { data_details, data, isLoading: fetchIsLoading, error } = useFetch(params, url);
  
  console.log(2*2);


  const handleMove = (direction: string) => {
    if (isLoading) {
      return; // Ignore the move if already loading
    }
  
    setIsLoading(true);

    setTimeout(() => {
      let newSlideNumber;
      
      const photosArray = Array.isArray(data_details.photos) ? data_details.photos : [];
      const photosLength = photosArray.length;

      if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? photosLength - 1 : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === photosLength - 1 ? 0 : slideNumber + 1;
      }

      setSlideNumber(newSlideNumber);
      setIsLoading(false);
    }, 3000);
  };


  const photosArray = Array.isArray(data_details.photos) ? data_details.photos : [];
  const validSlideNumber = slideNumber >= 0 && slideNumber < photosArray.length;
  const locationArray = Array.isArray(data_details.location) ? data_details.location : [];
  const locationName = locationArray.length > 0 ? locationArray[0].name : '';

  return (
    <>
    {error ? (
      <ErrorPage/>
    ) : (
<div className="container__home">
      <Sidebar />
      {fetchIsLoading ? <LinearProgress className='linearProgress'  style={{ width: '100%', position: 'fixed', top: 0, left: 0 }}/>
      
    : 
    <div className="hotelcontiner">
        <div className="hotelwrapper">
          <div className="top">
            <Link to={'/'}>
            <button className="topButton">
              <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow-back"

            />
            Go Back to The Home 
             </button>
             </Link>
            <h1 className="heading-2 heading-2--dark">{data_details.title}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon className="loc-icon" icon={faLocationDot} />
              <span className="heading-4 heading-4--dark">{locationName}</span>
            </div>
            <span className="hotelDistance heading-3">
              Excellent location – 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
          </div>
         

          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">

              {validSlideNumber && (
                <LazyLoad height={100} once>
                  <img src={photosArray[slideNumber].url} alt="image gallery" className="sliderImg" />
                </LazyLoad>
              )}
              {isLoading && (
                <div className="spinner">
                  <FontAwesomeIcon icon={faSpinner} spin />
                </div>
              )}

            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>

          <div className="bottom">
            <div className="discraption">
              <h1 className="hbottom">The Contect Info: {data_details.phoneNumber?.mobile} </h1>
              <span className="pbottom">{data_details.description}</span>
            </div>
            <div className="details">
              <h1 className="hdetail">Perfect for lovely family </h1>
              <span className="sdetail"></span>
              <h2>
                <b>${data_details.price}</b>
              </h2>
              <button className="btn">Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    }
      
    </div>
    
    )}
    </>
  );
}

export default PropertiesDetils;
