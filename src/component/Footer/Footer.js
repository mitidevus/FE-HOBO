import { CoPresent } from '@mui/icons-material'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './style.css'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='py-3'>
            <h4 id='Head'>COLUMN 1</h4>
            <ul className='list-unstyled'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Col>
          <Col className='py-3'>
            <h4 id='Head'>COLUMN 2</h4>
            <ul className='list-unstyled'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Col>
          <Col className='py-3'>
            <h4 id='Head'>CONTACT</h4>
            <ul className='list-unstyled'>
              <li><i className='fas fa-brands fa-square-facebook'></i> www.facebook.com/HOBO</li>
              <li><i className='fas fa-brands fa-instagram'></i> www.instagram.com/HOBO</li>
              <li></li>
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