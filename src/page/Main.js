import React from 'react';
import './Main.css';
import Filter from '../components/Filter';
import List from '../components/List';
import Card from '../components/Card';


const Main = () => {
  return (
    <main className='main'>
      <Filter/>
      <List>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </List>
    </main>
  );
};

export default Main;