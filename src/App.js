import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import stats from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const { avatar, name, tag, location } = user;
const { followers, views, likes } = user.stats;
const { title } = stats;

function App() {
  return (
    <>
      <Profile
        avatar={avatar}
        name={name}
        tag={tag}
        location={location}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title={title} stats={stats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
