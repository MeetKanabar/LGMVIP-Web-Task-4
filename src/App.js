import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Loader from './components/Loader';

const AppWrapper = styled.div`
  text-align: center;
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  return (
    <AppWrapper>
      <Navbar fetchUsers={fetchUsers} />
      {loading && <Loader />}
      <UserGrid>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </UserGrid>
    </AppWrapper>
  );
};

export default App;
