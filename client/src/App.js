import './App.css';
import {Route} from 'react-router-dom';
import {Landing} from './components/Landing/Landing'
import { Home } from './components/Home/Home';
import {Nav} from './components/NavBar/Nav'
import { VideoGame } from './components/Videogames/Videogames';
import Filter from './components/Filter/Filter';
import Paginate from './components/Paginate/Paginate';
import CreateVG from './components/Generar/CreateVG';
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}></Route>
      <Route path={["/home", "/videogame/:id", "/create"]}><Nav /></Route>
      <Route path='/home' component={Filter}/>
      <Route path='/home' component={Home}/>
      <Route path='/home' component={Paginate} /> 
      <Route path='/videogame/:id' component={VideoGame}/>
      <Route path='/create' component={CreateVG} />
    </div>
  );
}

export default App;
