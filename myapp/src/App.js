import './App.css';
// import { BrowserRouter } from 'react-router-dom';

import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import data from './data/db.json';
import { Routes, Route, Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    404! - <Link to='/'>Home</Link>
  </div>
);

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:id' element={<TourDetails data={data} />} />
        <Route component={PageNotFound} />
      </Routes>
    </>
  );
}
export default App;

///////////////////////////////////////////////////
// import logo from './logo.svg';
// <> </>    make this if you want to have 2 parents!! like <h1> & <P> & <h2> etc..
// Remeber the Capitals !!!
// remeber export and import !!! then <UserInfo/>
// props is an object wich has key and value and mean propariety
// when writing Js use {}

// import Footer from 'myapp/src/components/footer/Footer.js';
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
