import Pagination from '@mui/material/Pagination';
import Axios from 'axios';
import classNames from 'classnames/bind';
import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-spinkit';
import Search from '~/component/Search/search';
import { api } from '../../constants';
import Button from '../../component/Button';
import Star from '../../component/Star';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

function formatCash(str) {
    return str
        .split('')
        .reverse()
        .reduce((prev, next, index) => {
            return (index % 3 ? next : next + ',') + prev;
        });
}

function HomePage() {
    const [page, setPage] = React.useState(1);

    const numberOfCards = 6;

    const [arr, setArr] = React.useState([]);
    const [card, setCard] = React.useState(arr);
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();

    React.useEffect(() => {
        Axios.get(`${api.prod}/api/post/postlist`)
            .then((res) => {
                setArr(res.data);
                setCard(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleChange = (event, page) => {
        setPage(page);
    };

    let inputContext = '';
    let filterContext = '';

    const handleOnSelectFilter = (value) => {
        filterContext = value;
        console.log(filterContext);
    };

    const handleOnClickSearch = (value, filterValue) => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);

        inputContext = value;

        console.log('arr: ');
        console.log(arr);

        if (inputContext !== '') {
            let temp = [];

            for (let i = 0; i < arr.length; i++)
                if (
                    arr[i].hotelName.toLocaleLowerCase() === inputContext.toLocaleLowerCase() ||
                    arr[i].location.toLocaleLowerCase() === inputContext.toLocaleLowerCase() ||
                    arr[i].roomName.toLocaleLowerCase() === inputContext.toLocaleLowerCase()
                )
                    temp.push(arr[i]);

            if (filterValue === 'Starts') temp.sort((a, b) => a.numberStar - b.numberStar);
            else if (filterValue === 'Price') temp.sort((a, b) => a.price - b.price);
            else if (filterValue === 'Location') {
                const temp2 = temp.filter(
                    (value) => value.location.toLocaleLowerCase() === inputContext.toLocaleLowerCase(),
                );

                if (temp2.length !== 0) temp = temp2;
                console.log('Location:');
                console.log(temp);
                temp.sort(function (a, b) {
                    if (a.location > b.location) return 1;
                    else if (a.location < b.location) return -1;
                    return 0;
                });
            }
            setCard(temp);
        } else {
            if (filterValue.localeCompare('Filter') !== 0)
                alert('You must enter the search information before filtering or cliking button search!!!');
            setCard(arr);
        }
    };

    return (
        <>
            <div className={cx('background')}>
                <Search onClickButton={handleOnClickSearch} onSelectFilter={handleOnSelectFilter}></Search>
            </div>

            <div className="App">
                <Container>
                    {loading ? (
                        <Spinner className={cx('spinner')} name="circle" style={{ width: 100, height: 100 }} />
                    ) : (
                        <Row xs={3}>
                            {[...Array(numberOfCards)].map((e, i) => {
                                i += (page - 1) * numberOfCards;
                                if (i < card.length)
                                    return (
                                        <div key={i} className="col-4 mt-3">
                                            <div className="card text-center">
                                                <img
                                                    className={cx('card-img-top', 'room-thumbnail')}
                                                    src={card[i].thumbnail}
                                                    alt="Room"
                                                />
                                                <ul className="list-group list-group-flush">
                                                    <li className={cx('list-group-item', 'room-name')}>
                                                        {card[i].roomName}
                                                    </li>
                                                    <li className="list-group-item">
                                                        <Star starNumber={card[i].starNumber}></Star>
                                                    </li>
                                                    <li className={cx('list-group-item fw-bold', 'hotel-title')}>
                                                        <span
                                                            className={cx('hotel-name')}
                                                            onClick={() => {
                                                                navigate(`/hotel/${card[i].hotelId}`);
                                                            }}
                                                        >
                                                            {card[i].hotelName}
                                                        </span>
                                                    </li>
                                                    <li className={cx('list-group-item', 'hotel-title')}>
                                                        Price:
                                                        <span className="fw-bold ms-1">
                                                            {formatCash(`${card[i].price}`)}₫
                                                        </span>
                                                        /day
                                                    </li>
                                                </ul>
                                                <div className="card-body">
                                                    <Button
                                                        primary
                                                        onClick={() => {
                                                            navigate(`/room/${card[i]._id}`);
                                                        }}
                                                    >
                                                        Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                else return <></>;
                            })}
                        </Row>
                    )}
                </Container>
            </div>

            <Pagination
                page={page}
                onChange={handleChange}
                className={cx('pagegination')}
                count={Math.ceil(card.length / numberOfCards)}
                variant="outlined"
                color="primary"
            />
        </>
    );
}

export default HomePage;
