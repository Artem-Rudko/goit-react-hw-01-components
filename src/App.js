// import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/Friend-list/FriendList';
import friends from './components/Friend-list/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/TransactionHistory.json';

function App() {
    return (
        <div className="App">
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics title="Upload stats" stats={statisticalData} />

            <FriendList friends={friends} />

            <TransactionHistory transactions={transactions} />
        </div>
    );
}

export default App;
