import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import { getAllCaracters } from '../../store/caracters/caracters-action';
import { caractersSelector, caractersInfoSelector } from '../../store/caracters/caracters-selector';
import { allFilterSelector } from '../../store/filter/filter-selector';
import './Main.css';


const Main = () => {

  const dispatch = useDispatch();
  const filter = useSelector( state => allFilterSelector(state));
  const caracters = useSelector( state => caractersSelector(state, filter));
  const {loading, qty} = useSelector( state => caractersInfoSelector(state));

  useEffect(() => {
    if(!qty) {
      dispatch(getAllCaracters())
    }
  }, [qty, dispatch])

  return (
    <main className='main'>
      <Filter/>
      {
        loading ?
          <Loader/> :
        <List>
          {
            caracters.map(item => (
              <Card key={item.char_id} {...item}/>
            ))
          }
        </List>
      }
      
    </main>
  );
};

export default Main;