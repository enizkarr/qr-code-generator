import React from 'react'
import Button from 'react-bootstrap/Button'
import Logo from '../assets/images/logo.png'
import Generate from './Generate'

function Header() {
  return (
    <div className='headerDiv'>
        <header style={{padding:"1%", height:"6em", borderBottom:"1px solid black"}} >
          <img src={Logo} alt="Logo" style={{maxWidth:"60px", float:"left"}}/>
            <form >
                <input className='searchInput' type='text' placeholder='search' />
            </form>
            <Button variant="warning" style={{float:"right", width:"5%"}}>Show</Button>
            <Generate />
        </header>
    </div>
  )
}

export default Header