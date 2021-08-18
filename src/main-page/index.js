import Header from "./header";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import face from "./face.jpg";

function App (){
    return (
        <div className="App">
            <Header></Header>
            <Container>
                <Row>
                    <Col md={3}>
                        <Image src={face}  alt="mi cara" thumbnail ></Image>
                    </Col>
                    <Col>
                        <h1>Miguel Beltrán Milán</h1>
                        <h3>Fullstack Developer</h3>
                        <h5>Linked In profile: <a href="https://www.linkedin.com/in/miguel-beltrán-milán-9018a9bb/" target="_blank">linkedin.com/in/miguel-beltrán-milán-9018a9bb/</a></h5>
                        <h5>Email: miguel.beltran.milan@gmail.com</h5>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={3}>
                        <h2>Skills</h2>
                    </Col>
                    <Col>
                        <h3>Web development n shit</h3>
                        <h5>I can create like a whole website with c#. Web services also. I'll do 'em and host em in Azure or AWS whicever works best.</h5>
                        <h5>Experience lies mostly on back-end but have worked as full-stack developer for over 4 years.</h5>
                        <br/>
                        <h3>Console Apps</h3>
                        <h5>Worked developing console apps as complement to ContPaq i, which are used as payroll and enterprise management in México mostly.</h5>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={3}>
                        <h2> Experience</h2>
                    </Col>
                    <Col>
                    <h3>Rockwell Collins</h3>
                    <h5>Lorem ipsum</h5>
                    <br/>
                    <h3>Spark Technologies</h3>
                    <h5>Lorem ipsum</h5>
                    <br/>
                    <h3>Actualizate Ya!</h3>
                    <h5>Lorem ipsum</h5>
                    <br/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={3}>
                        <h2>Education</h2>
                    </Col>
                    <Col>
                        <h3>Centro de Enseñanza Técnica Y Superior</h3>
                        <h5>Computer Science Engineering</h5>
                        <h6>AUGUST 2013 - JUNE  2017,  Mexicali, BC, México</h6>
                    </Col>
                </Row>
                <Button type="button">Send me an email</Button>
            </Container>
        </div>
    )

}

export default App;