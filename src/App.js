import './App.css';
import User from './layouts/User';

function App() {
  return (
    <div className="App">
      <User data = {{name:'Lucky Kumar', age:'28'}}/>
    </div>
  );
}

export default App;
