import './App.css';
import Garage from './components/List';

function App() {
  const carsz = ['toyota', 'honda', 'george floyd', 'testing', "dasdsa1"]
  return (
    <div className="App">
      <h1>Hello react!</h1>
      <Garage cars={carsz}/>
    </div>
  );
}

export default App;
