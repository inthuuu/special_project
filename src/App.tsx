import { Container, Form, Col, Button} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useRef } from "react";
import { AuthContext } from "./Auth/AuthContext";
import { auth } from "./fireauth";
import FirstPage from './FirstPage';

function App() {

  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <>

    {!user ? (
      <>
      <div className="App-header">
      KMITL <br />
      TEACHLOAD
      </div>
      <Container style={{maxWidth: "500px"}} fluid>
      <Form className="mt-4">
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="email@kmitl.ac.th"></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="password"></Form.Control>
        </Form.Group>
        <Form.Group><center>
        <Col>
          <Button type="button" onClick={signIn}>Sign in</Button>
        </Col>
        </center></Form.Group> 
      </Form>
    </Container>
    </>
    ) : (
      <>
      <FirstPage user={user}></FirstPage>
      </>
    )}
    </>
  )
}

export default App;
