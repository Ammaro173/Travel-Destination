import './Tours.css';
import Tour from './tour/Tour';

// import travelData from '../../data/db.json';

// import { useState } from 'react';

// function HandelClick() {
//   //   setCount(!count);
//   //   //   setTimeout(() => setCount([Math.random()]), 2000);
//   //   //   setTimeout(() => setCount(!count), 2000);

//   //   console.log(count);
//   //   if (count === true) {
//   //     return (
//   //       <>
//   //         <hr></hr>
//   //       </>
//   //     );
//   //   }
// //   return <hr></hr>;
// }

// function HandelClick() {
//   return <hr></hr>;
// }

function Tours(props) {
  return (
    <>
      {props.data.map((ele, id) => {
        return <Tour tour={ele} key={id} />;
      })}
      {/* <button onClick={HandelClick}>show more</button> */}
    </>
  );
}

export default Tours;

//   const [count, setCount] = useState(false);
//  // console.log(props)
//  return (
//   <>
//     <Tour data={travelData} />
//   </>
// );

// return (
//   <>
//     {props.data.map((ele) => {
//       return (
//         <>
//           <div>Name : {ele.name}</div>
//           <br></br>
//           <img src={ele.image} alt=' ' />
//           <br></br>
//           <hr></hr>
//           <br></br>
//           <button onClick={HandelClick}>show more</button>
//         </>
//       );
//     })}

//     <HandelClick />
//   </>
// );
