import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <h3>Sample</h3>
      <Provider store = {store}>
        <Home></Home>
      </Provider>
      
    </div>
  );
}

export default App;
