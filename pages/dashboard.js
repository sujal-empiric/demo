import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

import { Button, Container, Nav, Navbar } from "react-bootstrap";
function dashboard() {
    const router = useRouter()
    console.log(router)
    useEffect(() => {
      if(!router.query.email){
        router.push('/login')
      }
    }, [])
    
    const connectMetamask = async ()=>{
        console.log("Connecting metamask")
        if(window.ethereum!=undefined){
            const account = await window.ethereum.request({ method: 'eth_requestAccounts' }) 
            console.log(account)
            console.log(router.query.email)
            fetch('/api/user/addwallet',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email:router.query.email, wallet:account[0] })
            }).then( async (response)=>{
                const res = await response.json()
                console.log("res========>",res)
              })
        }
    }   
  return (
    <>
        <Navbar>
        <Container>
            <Navbar.Brand>Admin</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>User</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Button onClick={connectMetamask}>Connect Metamask</Button>
        </Container>
    </Navbar>
    </>
  )
}

export default dashboard