
import './error.scss'
import Erorrimg from '../../assets/error.gif'
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="content">
          <div className="imgContiner">
          <img src={Erorrimg} className="gif" />
          </div>
          <h1 className='heading-2'>Oops! There's a problem.</h1>
          <p >Please check your internet connection or If you are in Syria try using a VPN.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
