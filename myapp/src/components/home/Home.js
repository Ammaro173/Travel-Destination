import Footer from '../footer/Footer';
import Header from '../header/Header';
import Tours from '../tours/Tours';
import data from '../../data/db.json';

function Home() {
  return (
    <>
      <Header />

      <Tours data={data} />

      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
