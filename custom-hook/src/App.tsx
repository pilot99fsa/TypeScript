import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import axios from 'axios';

const user = {
  id: 1,
  name: 'ホゲホゲ',
  email: 'guest@example.com',
  address: 'ADDRESS',
};

export default function App() {
  function onClickFetchUser() {
    axios.get('https://jsonplaceholder.typicode.com/users');
  }
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
