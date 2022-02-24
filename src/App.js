import react from 'react';
import ProfilePhoto  from './profile/ProfilePhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';
import './App.css';

  const App = () => {
    return (
      <>
        <ProfilePhoto />
        <FullName />
        <Address />
      </>
    );
  }

export default App;
