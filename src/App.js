import './App.css';
import Navbars from './componenet/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Provider } from './componenet/MyContex';
import HomePage from './componenet/HomePage';
import CategoryCard from './componenet/CategoryCard';
import Banner from './componenet/Banner';


function App() {
  return (
    <div className="App">
      <>
      <Provider>
      <Navbars/>
     
    <Banner/>
    <HomePage/>
    <CategoryCard/>
      </Provider>
      </>
    </div>
  );
}

export default App;
