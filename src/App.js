import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import EpisodeDetails from './components/Episode';
import CharacterDetails from './components/Character';


function App() {

  return (
    <div className="App">
     
     <Router>
       <Routes>
         <Route exact path = '/' element={<HomePage/>}></Route>
         <Route  path = '/episode/:id' element={<EpisodeDetails/>}></Route>
         <Route path = '/character/:id' element={<CharacterDetails/>}></Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
