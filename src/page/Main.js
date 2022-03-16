import React, { useEffect } from 'react';
import './Main.css';
import Filter from '../components/Filter';
import List from '../components/List';
import Card from '../components/Card';
import { getAllCaracters } from '../store/caracters/caracters-action';
import { useDispatch, useSelector } from 'react-redux';
import { caractersSelector } from '../store/caracters/caracters-selector';
import { allFilterSelector } from '../store/filter/filter-selector';


const Main = () => {

  const dispatch = useDispatch();
  const filter = useSelector( state => allFilterSelector(state));
  const caracters = useSelector( state => caractersSelector(state, filter));

  useEffect(() => {
    dispatch(getAllCaracters())
  }, [])

  return (
    <main className='main'>
      <Filter/>
      <List>
        {
          caracters.map(item => (
            <Card key={item.char_id} {...item}/>
          ))
        }
      </List>
    </main>
  );
};

export default Main;