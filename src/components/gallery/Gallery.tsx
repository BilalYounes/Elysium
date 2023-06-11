import './gallery.scss'

import { images } from '../../assets';
const Gallery = () => {
  return (
    <div className='gallery'>
        {images.map((img, i) => (
        <figure key={i} className={`gallery__item gallery__item--${i + 1}`}>
          <img src={img} alt='' className='gallery__img' />
        </figure>
      ))}
    </div>
  )
}

export default Gallery