import { Flight, Sort } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardView from '~/component/Card';
import Search from '~/component/Search/search';
import './StyleHomepage.css';

function HomePage() {
    const [page, setPage] = React.useState(1);

    const numberOfCards = 3;

    const data = [
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '1',
            price: 1500,
            location: 'a',
            service: 'q1',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '2',
            price: 2500,
            location: 'a',
            service: 'q2',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '3',
            price: 3500,
            location: 'a',
            service: 'q3',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '4',
            price: 4500,
            location: 'a',
            service: 'q4',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '5',
            price: 5500,
            location: 'a',
            service: 'q5',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '6',
            price: 6500,
            location: 'a',
            service: 'q6',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '7',
            price: 7500,
            location: 'a',
            service: 'q7',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '8',
            price: 8500,
            location: 'a',
            service: 'q8',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '9',
            price: 9500,
            location: 'VIN',
            service: 'q9',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: '10',
            price: 10500,
            location: 'a',
            service: 'q10',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: 'Vin',
            price: 14500,
            location: 'Suraj',
            service: 'q11',
            numberStar: 4,
        },
        {
            img: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-logo-arsenal-cuc-dep_025558579.jpg',
            name: 'vin',
            price: 13500,
            location: 'Sanjeev',
            service: 'q12',
            numberStar: 3,
        },
    ];

    const [card,setCard]=React.useState(data);

    const handleChange = (event, page) => {
        setPage(page);
    };

    let inputContext="";
    let filterContext="";

    const handleOnSelectFilter = (value) => {
        filterContext = value;
        console.log(filterContext);
    }

    const handleOnClickSearch = (value,filterValue) => {
        inputContext=value;

        //console.log(inputContext +" - "+ filterValue);

        if(inputContext!="")
        {
            let temp=[];

            for(let i=0;i<data.length;i++)
                if(data[i].name.toLocaleLowerCase()==inputContext.toLocaleLowerCase() 
                    || data[i].location.toLocaleLowerCase()==inputContext.toLocaleLowerCase()) 
                    temp.push(data[i]);

            if(filterValue==="Starts") temp.sort((a,b) => a.numberStar-b.numberStar)
            else if(filterValue==="Price") temp.sort((a,b) => a.price-b.price)
            else if(filterValue==="Location")
            {

                temp=temp.filter(value => value.location.toLocaleLowerCase()===inputContext.toLocaleLowerCase())
                console.log(temp)
                temp.sort(function (a, b) {
               
                    if(a.location>b.location) return 1;
                    else if(a.location<b.location) return -1;
                    return 0;})
            } 
            else if (filterValue==="Service") {
                temp.sort(function (a, b) {
               
                    if(a.service>b.service) return 1;
                    else if(a.service<b.service) return -1;
                    return 0;})
            }
            setCard(temp);
        }
        else setCard(data);
    } 

    

    return (
        <>
            <div className="background">
                <Search onClickButton={handleOnClickSearch} onSelectFilter={handleOnSelectFilter}></Search>
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
                                            location={card[i].location}
                                            numberStar={card[i].numberStar}
                                        ></CardView>
                                    </Col>
                                );
                            else return <></>;
                        })}
                    </Row>
                </Container>
            </div>

            <div>
                <Pagination page={page} onChange={handleChange} count={Math.ceil(card.length/numberOfCards)} variant="outlined" color="primary" />
            </div>
        </>
    );
}

export default HomePage;
