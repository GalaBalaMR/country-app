import React,{ useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { fetchCountries } from '../store/country-action'

import Header from './Header'



const Root = () => {
  const [ initialState, setInitialState ] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [])

  return (
    <div className='container'>
        <Header />
        <main className='text-center'><Outlet /></main>
    </div>
  )
}

export default Root