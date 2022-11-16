import CardView from "../Card";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import './StyleGrid.css'

function GridView() {
    const numberOfCards = 10;

    const card=[
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "1",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "2",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "3",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "4",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "4",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "5",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "6",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "7",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "8",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "9",
            price:"4.500$",
            numberStar:"4",
        },
        {
            img: "https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg",
            name: "10",
            price:"4.500$",
            numberStar:"4",
        }

    ]


    return(
        <div className="App">
            <Container>
                <Row xs={3} >
                {[...Array(numberOfCards)].map((e, i) => {
                    return (
                        <Col className="col-card">
                            <CardView img={card[i].img}
                                name={card[i].name} price={card[i].price} location="Thanh Hóa" numberStar="4"></CardView>
                        </Col>
                    )
                })}
                </Row>
            </Container>
        </div>
    );
}

export default GridView;