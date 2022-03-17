import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter/Filter';
import List from '../components/List/List';
import Card from '../components/Card/Card';
import { getAllCaracters } from '../store/caracters/caracters-action';
import { caractersSelector } from '../store/caracters/caracters-selector';
import { allFilterSelector } from '../store/filter/filter-selector';
import './Main.css';


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