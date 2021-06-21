// import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './components/transactionHistory/TransactionHistory.json';

function App() {
  return (
    <div className="App">
      <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends ={ friends } />

      <TransactionHistory transactions={ transactions } />
    </div>
  );
}

export default App;