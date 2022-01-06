import React from 'react';

export default function LogoutButton({ Logout, history }) {
  const handleClick = () => {
    Logout();
    history.push('/');
  };
  return <button onClick={handleClick}> Logout</button>;
}
