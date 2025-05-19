import logo from './logo.svg';
import Auth from "./components/auth"
import Posts from './components/post';
import './App.css';


function App() {
  return (
    <div className="App">
      <Auth></Auth>
      <Posts></Posts>
    </div>
  );
}

export default App;
