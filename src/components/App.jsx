import user from 'user.json'
import data from 'data.json'
import {Profile} from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >      
      <Profile user={user} />
      <Statistics items={data} />
    </div>
  );
};
