import axios from 'axios';
import {Header,ProductList} from './components'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './rdux/usersReducer';

function App() {

  const dispatch = useDispatch()
  const {userDetail} = useSelector((state)=>state.user)
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <>
      <Header/>

      <h1>{userDetail.message? userDetail.message : userDetail.title}</h1>
      <ProductList/>

    </>
  );
}

export default App;
