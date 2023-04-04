import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="text-center">
                    <Col className="py-3">
                        <ul className="list-unstyled">
                            <li>
                                <i className={cx('ftri', 'fas fa-brands fa-facebook-f')} /> www.facebook.com/HOBO
                            </li>
                        </ul>
                    </Col>
                    <Col className="py-3">
                        <ul className="list-unstyled">
                            <li>
                                <i className={cx('ftri', 'fas fa-brands fa-instagram')} /> www.instagram.com/HOBO
                            </li>
                        </ul>
                    </Col>
                    <Col className="py-3">
                        <ul className="list-unstyled">
                            <li>
                                <i className={cx('ftri', 'fas fa-regular fa-envelope')} /> hobovn.website@gmail.com
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className={cx('Copyright', 'text-center')}>
                        Copyright &copy;{new Date().getFullYear()} HOBO
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
