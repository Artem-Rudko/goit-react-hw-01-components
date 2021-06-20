// import './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './components/user.json';
import statisticalData from './components/statistical-data.json';

function App() {
  return (
    <div className="App">
      <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />

      <Statistics stats={statisticalData} />
    </div>
  );
}

export default App;