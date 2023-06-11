import './card.scss'
import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { IDataList } from '../../type/type';

interface ICardProps {

    item: IDataList;
}const Card = ({ item }: ICardProps) => {
    // console.log(item)
    return (
        <Link to={`/details/${item.externalID}`} style={{ textDecoration: 'none' ,color: 'inherit'}}>
        <div className='card'>
        <LazyLoad height={100} once>
        <img src={item.coverPhoto.url} alt="House $" className="card__img" />

        </LazyLoad>
                <svg className="card__like">
                    <use xlinkHref={`${sprite}#icon-heart-full`}></use>
                </svg>
                <h5 className="card__name">{item.agency.name}</h5>


                <div className="card__location">
                    <svg>
                        <use xlinkHref={`${sprite}#icon-map-pin`}></use>
                    </svg>
                    <p>{item.location[0].name}</p>
                </div>
                <div className="card__rooms">
                    <svg>
                        <use xlinkHref={`${sprite}#icon-profile-male`}></use>
                    </svg>
                    <p>{item.rooms} rooms</p>
                </div>
                <div className="card__area">
                    <svg>
                        <use xlinkHref={`${sprite}#icon-expand`}></use>
                    </svg>
                    <p>{Math.floor(item.area)}m<sup>2</sup></p>
                </div>
                <div className="card__price">
                    <svg>
                        <use xlinkHref={`${sprite}#icon-key`}></use>
                    </svg>
                    <p>${item.price}</p>
                </div>

                <button className="btn card__btn">Contact realtor</button>
        </div>
                </Link>
    )
}

export default Card