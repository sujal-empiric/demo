import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";


export default function Home() {
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
            <Link href="/login"><Button>Login</Button></Link>
            <Link href="/signup"><Button>Sign Up</Button></Link>
        </Container>
    </Navbar>
    </>
  );
}
