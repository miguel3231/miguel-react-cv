import { Container, Row, Col, Image } from 'react-bootstrap';
import face from "./face.jpg";

const Resume = () =>{

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <Image src={face}  alt="mi cara" thumbnail ></Image>
                </Col>
                <Col>
                    <h1>Miguel Beltrán Milán</h1>
                    <h3>Software Developer</h3>
                    <h5>LinkedIn profile: <a href="https://www.linkedin.com/in/miguel-beltrán-milán-9018a9bb/" target="_blank" rel="noreferrer">linkedin.com/in/miguel-beltrán-milán-9018a9bb/</a></h5>
                    <h5>Email: miguel.beltran.milan@gmail.com</h5>

                    <p>I'm a geek that likes to work hard and figure out how to use new cool stuff.</p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={3}>
                    <h2>Skills</h2>
                </Col>
                <Col>
                    <p>C#: Desktop applications, Web apps, Web services, use of APIs, SQL DB, integration with Azure, MVC, Razor pages, WinForms</p>
                    <p>Azure: App Services, Azure Functions, Azure SQL Databases, Storage Accounts, Queues, Service Bus, Data Factory</p>
                    <p>AWS: Lambdas, ECS, CodePipeline, CloudFormation, CodeCommit</p>
                    <p>HTML/CSS, Javascript, Bootstrap, Java, PHP, Actionscript3.</p>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={3}>
                    <h2> Experience</h2>
                </Col>
                <Col>
                <h3>Rockwell Collins</h3>
                <p>(October 2020- PRESENT, MEXICALI)</p>
                <p>Dev Ops Engineer. Work with Infrastructure-as-Code apps to support dev teams within the company. </p>
                <p>Design and develop data-processing applications hosted in AWS. </p>
                <br/>

                <h3>Spark Technologies</h3>
                <p>(September 2017 - October 2020,  MEXICALI)</p>
                <p>Work remotely with the Web development team of Welk Resorts (client in the US). 100% English communication.</p>
                <p>Developed web services  in C# (.Net and .Net Core) hosted in Azure. Worked on WordPress web pages by editing the theme’s code in PHP and consuming web services hosted in Azure through CURL calls.</p>
                <p>Assist in the design of new solutions in Azure involving Web Services, Azure Functions, Storage Accounts, Queues for asynchronous processing.</p>
                <p>Worked in .Net WebForms project on new development and bugfixes.</p>

                <br/>
                <h3>Actualizate Ya!</h3>
                <p>(FEBRUARY 2017 - SEPTEMBER 2017,  MEXICALI)</p>
                <p>Develop desktop applications using the Contpaqi SDK for custom development in C#.</p>
                <p>Started development on a new desktop app in C# for Human Resource management, using Material design as UI.</p>
                <p>Developed a program that translates payroll XML’s into a PDF using Crystal Reports and email them to their respective recipients.</p>
                <p>Work on VisualBasic legacy code. </p>

                <br/>
                <h3>Apprentix</h3>
                <p>(AUGUST 2016 - JANUARY 2017,  MEXICALI)</p>
                <p>Develop simulators in ActionScript3 for production-line machines to facilitate the learning process for new operators.</p>
                <p>Take on-site requirements for the modules to be developed.</p>
                <p>Research ActionScript’s best practices and layout foundation for future developments for the company.</p>
                <p>Technologies used: ActionScript 3</p>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={3}>
                    <h2>Education</h2>
                </Col>
                <Col>
                    <h4>Centro de Enseñanza Técnica Y Superior</h4>
                    <p>Computer Science Engineering</p>
                    <h6>AUGUST 2013 - JUNE  2017,  Mexicali, BC, México</h6>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={3}>
                    <h2>Languages</h2>
                </Col>
                <Col>
                    <p>Spanish: Native</p>
                    <p>English: Proficient</p>
                    <p>Japanese: JLPT N4 Certification (Japanese Language Proficiency Testing)</p>
                </Col>
            </Row>
            <br/>
        </Container>
    )
}

export default Resume;