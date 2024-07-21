import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2575fc;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #1a5bbf;
  }
`;

const Navbar = ({ fetchUsers }) => {
  return (
    <Nav>
      <div className="brand">My Brand</div>
      <Button onClick={fetchUsers}>Get Users</Button>
    </Nav>
  );
};

export default Navbar;
