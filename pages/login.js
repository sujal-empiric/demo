import { useRouter } from "next/router";
import { useState } from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";

export default function Home() {
  const [error, setError] = useState(null)
  const router = useRouter()
  const login = ()=>{
    const email = document.getElementById("formBasicEmail")
    const pass = document.getElementById("formBasicPassword")
    console.log(pass.value)
    fetch('/api/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email:email.value, pass:pass.value })
  }).then( async (response)=>{
      const res = await response.json()
      console.log("res========>",res)
      if(res.authenticate==true){
        setError(null)
        console.log(res)
        router.push({pathname:"/dashboard", query:{ email:res.email }},"/dashboard")
      }else{
        setError("Wrong Email or Password")
      }
    })
  }
  return (
    <>
    <Container>
      <h1>Login</h1>
      {error?<h3>{error}</h3>:null}
    </Container>
      <Container fluid >
        <Card style={{ width: "25rem" }} className="mx-auto">
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  />
                <Form.Text className="text-muted" >
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" onClick={login}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
