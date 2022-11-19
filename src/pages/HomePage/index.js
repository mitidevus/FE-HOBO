import Pagination from '@mui/material/Pagination';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardView from '~/component/Card';
import Search from '~/component/Search/search';
import './StyleHomepage.css';

function HomePage() {
    const [page, setPage] = React.useState(1);

    const numberOfCards = 6;

    const card = [
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '1',
            price: '1.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '2',
            price: '2.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '3',
            price: '3.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '4',
            price: '4.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '5',
            price: '5.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '6',
            price: '6.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '7',
            price: '7.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '8',
            price: '8.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '9',
            price: '9.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '10',
            price: '10.500$',
            numberStar: '4',
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '11',
            price: '11.500$',
            numberStar: '4',
        },
    ];

    const handleChange = (event, page) => {
        setPage(page);
    };

    return (
        <>
            <div className="background">
                <Search></Search>
            </div>

            <div className="App">
                <Container>
                    <Row xs={3}>
                        {[...Array(numberOfCards)].map((e, i) => {
                            i += (page - 1) * numberOfCards;

                            if (i < card.length)
                                return (
                                    <Col className="col-card">
                                        <CardView
                                            img={card[i].img}
                                            name={card[i].name}
                                            price={card[i].price}
                                            location="Thanh Hóa"
                                            numberStar="4"
                                        ></CardView>
                                    </Col>
                                );
                            else return <></>;
                        })}
                    </Row>
                </Container>
            </div>

            <div>
                <Pagination page={page} onChange={handleChange} count={2} variant="outlined" color="primary" />
            </div>
        </>
    );
}

export default HomePage;
