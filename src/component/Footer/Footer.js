import { CoPresent } from '@mui/icons-material'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './style.css'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='text-center'>
          <Col className='py-3'>
            <ul className='list-unstyled'>
              <li><i className='ftri fas fa-brands fa-facebook-f'/> www.facebook.com/HOBO</li>
            </ul>
          </Col>
          <Col className='py-3'>
            <ul className='list-unstyled'>
              <li><i className='ftri fas fa-brands fa-instagram'/> www.instagram.com/HOBO</li>
            </ul>
          </Col>
          <Col className='py-3'>
            <ul className='list-unstyled'>
              <li><i className='ftri fas fa-regular fa-envelope'/> hobovn.website@gmail.com</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col id='Copyright' className='text-center'>Copyright &copy;{new Date().getFullYear()} HOBO</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer