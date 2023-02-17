import React from 'react'
import { Outlet} from "react-router-dom"

const CountryRoot = () => {
  return (
    <div>
        <h1>Country-app</h1>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default CountryRoot