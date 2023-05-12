import React from 'react'
import Button from 'react-bootstrap/Button'
import Logo from '../assets/images/logo.png'

function Header() {
  return (
    <div>
        <header style={{padding:"1%", height:"6em", borderBottom:"1px solid black"}} >
          <img src={Logo} style={{maxWidth:"60px", float:"left"}}/>
            <form >
                <input type='text' placeholder='Search' />
            </form>
            <Button variant="warning" style={{float:"right", width:"5%"}}>Generate</Button>
            <Button variant="success" style={{float:"right", width:"5%"}}>Generate</Button>
        </header>
    </div>
  )
}

export default Header