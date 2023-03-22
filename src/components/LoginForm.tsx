import { Container, Form, Col, Button} from 'react-bootstrap';
import { useRef } from "react"
import { auth } from "../fireauth";

const LoginForm = () => {

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
        <div className="App-header">
            KMITL <br />
            TEACHLOAD
        </div>

        <Container style={{maxWidth: "500px"}} fluid>
            <Form className="mt-4 element">
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="email@kmitl.ac.th"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="password"></Form.Control>
                </Form.Group>
                <Form.Group className='element'><center>
                    <Col>
                        <Button className='btn' type="button" onClick={signIn}>Sign in</Button>
                    </Col>
                </center></Form.Group> 
            </Form>
        </Container>
        </>
    )
}

export default LoginForm;