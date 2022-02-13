import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from '../tours/Tours'
import travelData from "../../data/db.json"

function Home (){
return( 
    <> 
    <div>
<Header/>
    </div>

    <Tours data={travelData}/>
    
    <div>
        <Footer/>
    </div>
    </>
)
}
export default Home;