import './App.css';
import Activities from './Components/Activities/Activities';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <Blog></Blog>
    </div>
  );
}

export default App;
