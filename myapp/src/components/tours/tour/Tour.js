import { Link } from 'react-router-dom';
import '../tour/Tour.css';

function Tour(props, elee) {
  return (
    <>
      <h2 className='name'>City Name : {props.tour.name}</h2>

      <Link key={elee.key} to={`city/${props.tour.id}`}>
        <img className='image' src={props.tour.image} />
      </Link>

      <hr></hr>
    </>
  );
}
export default Tour;
