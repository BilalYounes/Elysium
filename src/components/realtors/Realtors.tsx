
import './realtors.scss'
import person1 from '../../assets/realtor-3.jpeg'
import person2 from '../../assets/realtor-1.jpeg'

import person3 from '../../assets/realtor-2.jpeg'

const Realtoors = () => {
  return (
    <div className='realtors'>
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        <img src={person3} alt="Realtor 1" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
          <p className="realtors__sold">245 houses sold</p>
        </div>

        <img src={person1} alt="Realtor 2" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Kim Brown</h4>
          <p className="realtors__sold">212 houses sold</p>
        </div>

        <img src={person2} alt="Realtor 3" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
          <p className="realtors__sold">198 houses sold</p>
        </div>

      </div>
    </div>
  )
}

export default Realtoors