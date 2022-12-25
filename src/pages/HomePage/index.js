
import Pagination from '@mui/material/Pagination';
import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Spinner from "react-spinkit";
import  Axios  from 'axios';
import CardView from '~/component/Card';
import { Route,Routes,Link } from 'react-router-dom';
import Search from '~/component/Search/search';
import './StyleHomepage.css';
import { FaStar } from "react-icons/fa";

function HomePage() {
    const [page, setPage] = React.useState(1);

    const numberOfCards = 6;

    const [arr,setArr]=React.useState([]);
    const [card,setCard]=React.useState(arr);
    const [loading,setLoading]=React.useState(false);

    

    React.useEffect(()=>{
        Axios.get("http://localhost:2345/api/post/postlist")
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
        setLoading(true)
        setTimeout(()=>setLoading(false),2000)

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

    const printStar = (a) => {
        const result=[]
        for(let i=0;i<a;i++) result.push(<FaStar></FaStar>)
        console.log(" + "+a)
        return <div>{result}</div>
    }

    return (
        
        <>
            <div className="background">
                <Search onClickButton={handleOnClickSearch} onSelectFilter={handleOnSelectFilter}></Search>
            </div>

            <div className="App">
                <Container>
                    { loading? <Spinner className='spinner' name="circle" style={{ width: 100, height: 100 }} />
                        :<Row xs={3}>
                            {[...Array(numberOfCards)].map((e, i) => {
                                i += (page - 1) * numberOfCards;
                                
                                if (i < card.length)
                                    return (
                                        // <Col className="col-card">
                                        //     <CardView
                                        //         className="card"
                                        //         img={card[i].roomImg}
                                        //         roomName={card[i].roomName}
                                        //         hotelName={card[i].hotelName}
                                        //         price={card[i].price}
                                        //         location={card[i].location}
                                        //         numberStar={card[i].numberStar}
                                        //     ></CardView>
                                        // </Col>

                                        
                                         
                                        <div className="col-4 mt-3">
                                            <div className="card text-center">
                                                <img className="card-img-top" src={card[i].thumbnail} alt="Room" />
                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold">{card[i].roomName}</h5>
                                                            
                                                 </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">{card[i].hotelName}</li>
                                                    <li className="list-group-item">{card[i].price}</li>
                                                    <li className="list-group-item">{printStar(card[i].starNumber)}</li>
                        
                                                </ul>
                                                {/* <div className="card-body">
                                                    <button className='card-button'>Details</button>
                                                </div> */}

                                                <div className="card-body">

                                                    <Link to={`/room/${card[i]._id}`} activeStyle>
                                                        <button className='card-button'>Details</button>
                                                    </Link>
                                                    
                                                </div>

                                            </div>
                                        </div>
                                           
                                        
                                    );
                                else return <></>;
                            })}
                        </Row>
                    } 
                    
                </Container>
            </div>

          
            <Pagination page={page} onChange={handleChange} className="pagegination"
                count={Math.ceil(card.length/numberOfCards)} variant="outlined" color="primary" />
            
        </>
    );
}

export default HomePage;
