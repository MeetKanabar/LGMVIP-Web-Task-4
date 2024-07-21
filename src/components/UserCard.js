import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.email}</p>
    </Card>
  );
};

export default UserCard;
