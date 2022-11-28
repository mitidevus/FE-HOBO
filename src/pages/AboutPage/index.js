import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

import './about.css'

const About = () => {
  return (
    <div className="about-container">
        <Container className='text-center py-5'>
            <h1>ABOUT US</h1>
            <p>HOBO is a website for ...</p>
            <h4>DEVELOPER TEAM</h4>
            <Row>
                <Col>  
                    <ul className='list-unstyled'>
                        <li>
                            <Image src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/300371050_3206641882999462_3984725470906183888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QEOzdlgBAFIAX8laMi1&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAecg8bsO7mR2mM7rQOuqnUcgRHKa2wI-e5UC3iEF_DSw&oe=63850954" roundedCircle className='ava'>
                            </Image>
                        </li>
                        <li>Hiển</li>
                    </ul>
                </Col>
                <Col>
                    <ul className='list-unstyled'>
                        <li>
                            <Image src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/300371050_3206641882999462_3984725470906183888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QEOzdlgBAFIAX8laMi1&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAecg8bsO7mR2mM7rQOuqnUcgRHKa2wI-e5UC3iEF_DSw&oe=63850954" roundedCircle className='ava'>  
                            </Image>
                        </li>
                        <li>Duy</li>
                    </ul>
                </Col>
                <Col>
                    <ul className='list-unstyled'>
                        <li>
                            <Image src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/300371050_3206641882999462_3984725470906183888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QEOzdlgBAFIAX8laMi1&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAecg8bsO7mR2mM7rQOuqnUcgRHKa2wI-e5UC3iEF_DSw&oe=63850954" roundedCircle className='ava'>  
                            </Image>
                        </li>
                        <li>Trí</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col/>
                <Col>
                    <ul className='list-unstyled'>
                        <li>
                            <Image src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/300371050_3206641882999462_3984725470906183888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QEOzdlgBAFIAX8laMi1&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAecg8bsO7mR2mM7rQOuqnUcgRHKa2wI-e5UC3iEF_DSw&oe=63850954" roundedCircle className='ava'>  
                            </Image>
                        </li>
                        <li>Hải</li>
                    </ul>
                </Col>
                <Col/>
                <Col>
                    <ul className='list-unstyled'>
                        <li>
                            <Image src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/300371050_3206641882999462_3984725470906183888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QEOzdlgBAFIAX8laMi1&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAecg8bsO7mR2mM7rQOuqnUcgRHKa2wI-e5UC3iEF_DSw&oe=63850954" roundedCircle className='ava'>  
                            </Image>
                        </li>
                        <li>Hoà</li>
                    </ul>
                </Col>
                <Col/>
            </Row>
        </Container>
    </div>
  )
}

export default About