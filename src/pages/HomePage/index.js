
import Pagination from '@mui/material/Pagination';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import  Axios  from 'axios';
import CardView from '~/component/Card';
import Search from '~/component/Search/search';
import './StyleHomepage.css';

function HomePage() {
    const [page, setPage] = React.useState(1);

    const numberOfCards = 6;



    const [arr,setArr]=React.useState([]);
    const [card,setCard]=React.useState(arr);

    React.useEffect(()=>{
        Axios.get("http://localhost:2345/api/post/roomList")
        .then(res=>{
            setArr(res.data)
            setCard(res.data)
        }).catch(err=>console.log(err))
    },[])


    

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

        console.log("arr: ")
        console.log(arr)

        if(inputContext!="")
        {
            let temp=[];

            for(let i=0;i<arr.length;i++)
                if(arr[i].hotelName.toLocaleLowerCase()==inputContext.toLocaleLowerCase() 
                    || arr[i].location.toLocaleLowerCase()==inputContext.toLocaleLowerCase()
                    || arr[i].roomName.toLocaleLowerCase()==inputContext.toLocaleLowerCase()) 
                    temp.push(arr[i]);

            if(filterValue==="Starts") temp.sort((a,b) => a.numberStar-b.numberStar)
            else if(filterValue==="Price") temp.sort((a,b) => a.price-b.price)
            else if(filterValue==="Location")
            {

                const temp2=temp.filter(value => value.location.toLocaleLowerCase()===inputContext.toLocaleLowerCase())
                
                if(temp2.length!=0) temp=temp2
                console.log("Location:")
                console.log(temp)
                temp.sort(function (a, b) {
               
                    if(a.location>b.location) return 1;
                    else if(a.location<b.location) return -1;
                    return 0;})
            } 
            setCard(temp);
        }
        else{
            if(filterValue.localeCompare("Filter")!=0) 
                alert("You must enter the search information before filtering or cliking button search!!!");
            setCard(arr);
        }
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
                                            className="card"
                                            img={card[i].roomImg}
                                            roomName={card[i].roomName}
                                            hotelName={card[i].hotelName}
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

          
            <Pagination page={page} onChange={handleChange} className="pagegination"
                count={Math.ceil(card.length/numberOfCards)} variant="outlined" color="primary" />
            
        </>
    );
}

export default HomePage;
