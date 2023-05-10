import React from 'react'
import Button from 'react-bootstrap/Button'

function Header() {
  return (
    <>
        <header style={{padding:"1%"}} >
            <form >
                <input type='text' placeholder='Search'/>
            </form>
            <Button variant="warning" style={{float:"right", width:"5%"}}>Generate</Button>
            <Button variant="success" style={{float:"right", width:"5%"}}>Generate</Button>
        </header>
    </>
  )
}

export default Header