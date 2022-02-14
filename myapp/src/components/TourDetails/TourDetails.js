import { useParams } from 'react-router-dom';

function TourDetails(props) {
  const { id } = useParams();
  const filtr = props.data.filter((ele) => {
    return ele.id === id;
  });
}

export default TourDetails;

// to be continue..........
