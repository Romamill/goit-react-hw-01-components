import { Profile } from "./Profile/Profile";
import user from '../data/user.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className="container"
      style={{
        height: '100vh',
        display: 'flex',
        gap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101' 
        
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList />

      <TransactionHistory
        items={transactions}
      />
    </div>
  );
};
