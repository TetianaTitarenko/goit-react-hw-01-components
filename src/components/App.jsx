import friends from 'friends.json'
import data from 'data.json'
import user from 'user.json'
import {Profile} from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from 'components/friends/friends';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >      
      <Profile user={user} />
      <Statistics title="Upload stats" allData={data} />
      <Friends allFrends={friends} />
    </div>
  );
};
