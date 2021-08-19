import Header from "./header";
import Resume from "./Resume";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import batmanComic from "./batman-comic-1.png";
import { Container, Row, Image } from 'react-bootstrap';
//import { Link } from "react-router-dom";

function App (){
    return (
        <div className="App">
            <Header></Header>
            <Router>
                <Switch>
                    <Route path="/about-me">
                        <h3>WIP.</h3>
                    </Route>
                    <Route path="/fun-stuff">
                        <Container>
                            <Row>
                                <h3>Comics</h3>
                                <h5>Sometimes I like to draw comics about batman doing everyday stuff. They're not the best but there's a few im proud of.</h5>
                                <h5>Here's one, for example:</h5> 
                                <Image style={{ maxWidth: '30rem'}} src={batmanComic} fuild alt="batman meets rorschach"></Image>
                            </Row>
                        </Container>
                    </Route>
                    <Route path="/">
                        <Resume />
                    </Route>
                </Switch>
            </Router>
            
        </div>
    )

}

export default App;