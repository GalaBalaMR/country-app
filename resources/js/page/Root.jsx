import React,{ useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { fetchCountries } from '../store/country-action'

import Header from './Header'



const Root = () => {
  const [ initialState, setInitialState ] = useState(true);
  // const [ page, setPage ] = useState(1);
  const dispatch = useDispatch();
  
  // const onClickNextPage = () => {
  //   setPage(page +1);
  // }

  useEffect(() => {
    dispatch(fetchCountries());
  }, [])

  return (
    <div className='container'>
        <button > +</button>
        <Header />
        <main className='text-center'><Outlet /></main>
    </div>
  )
}

export default Root