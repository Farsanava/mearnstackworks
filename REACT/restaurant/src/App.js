import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
// import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';


function App() {
  return (  
   <Router>
     <Header/>
       <Routes>
       
         <Route path='/' element={<Home/>}/>
         <Route path='/restaurants/:id' element={<RestaurantDetails/>}/>
         
       </Routes>
      
     </Router>
     );
   
}

export default App;
