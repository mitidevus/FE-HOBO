import axios from '~/api/auth';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import BookingForm from '~/component/BookingForm';
import Button from '~/component/Button';
import ItemTitle from '~/component/ItemTitle';
import Rooms from '~/component/Rooms';
import Slider from '~/component/Slider';
import { selectUser } from '~/features/userSlice';
import styles from './HotelPage.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const cx = classNames.bind(styles);

//Send userId to server, and server respond this object
const hotelRes = {
    id: 1, // Là hotelId
    userId: 123, // Là userId của hotel owner
    hotelName: 'River Prince Hotel',
    hotelAddress: '135 - 145 Phan Dinh Phung Street, Ward 2, Da Lat, Vietnam',
    hotelPhoneNumber: '076 922 0162',
    description:
        'One of the top factors to make your business trip light, comfortable and comfortable is that you should choose a high-class hotel to stay during your business trip. Luxury hotels with many high-class services, close to the center and suitable business places help you relax and enjoy your vacation.',
    descriptionImage: 'http://mauweb.monamedia.net/mykonos/wp-content/uploads/2019/03/page1-img1.jpg',
    starNumber: 5,
    slider: [
        {
            id: 1,
            image: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/254427539.jpg?k=9f2cf0ed50eeba985b4cdc1d8ac1cdb19f7df4db708c9887b00a905f2783e70f&o=&hp=1',
        },
        {
            id: 2,
            image: 'https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/254429666.jpg?k=468cdfa0135d33a4934ea1e238779d9d4473c83b9281fd606d68ca63df002bfb&o=&hp=1',
        },
        {
            id: 3,
            image: 'https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/254427981.jpg?k=b556b898b4190eb974e2c5360d2e2453aa6ab5341e9dd0d9c87c511db35d87c4&o=&hp=1',
        },
        {
            id: 4,
            image: 'https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/254429664.jpg?k=7a1f1d6ae7fcaa24c4a3e1727bbd3ee785683d7bb139fb17db042dfceb0cf5a0&o=&hp=1',
        },
        {
            id: 5,
            image: 'https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/254427847.jpg?k=d9d9547ef038ae02129e0f5955ef6cbac51d180ddabc5b9c4f301e394ada43ec&o=&hp=1',
        },
    ],
    utilities: [
        {
            id: 1,
            name: 'Pool',
            image: 'https://img.freepik.com/premium-photo/view-pool-with-two-chaiselongues-white-umbrellas-bali-style_656565-2042.jpg?w=2000',
            description: 'Wake up to the whistle of the sea and start your day at the beach.',
        },
        {
            id: 2,
            name: 'Restaurant',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80',
            description: 'Wake up to the whistle of the sea and start your day at the beach.',
        },
        {
            id: 3,
            name: 'Spa Massage',
            image: 'https://images6.alphacoders.com/359/thumb-1920-359755.jpg',
            description: 'Wake up to the whistle of the sea and start your day at the beach.',
        },
    ],
};

const roomsRes = [
    {
        id: 1, // Là roomId
        hotelId: 123,
        roomName: 'FAMILY DOUBLE ROOM SUITE',
        price: 800000,
        quantity: '2-4',
        bed: 2,
        toilet: 1,
        thumbnail: 'https://mauweb.monamedia.net/encore/wp-content/uploads/2019/02/02.jpg',
    },
];

const commentsRes = [
    {
        userId: 123,
        name: 'Nguyen Van A',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg',
        createDate: '07:00 2020-01-01',
        content:
            'The hotel is very nice, the staff is very friendly, the room is very clean, I am very satisfied with this hotel.',
        isHide: false,
    },
];

function HotelPage() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const params = useParams();
    const hotelIdAPI = params.hotelId;
    console.log(hotelIdAPI);

    const [hotel, setHotel] = useState(hotelRes);
    const [rooms, setRooms] = useState(roomsRes);
    const [comments, setComments] = useState(commentsRes);

    const updateRooms = (newRooms) => {
        setRooms(newRooms);
    };

    const handleComment = (newComment) => {
        const comment = {
            hotelId: hotel._id,
            userId: user._id,
            content: newComment,
        };
        axios
            .post('/api/comment/createcomment', comment)
            .then((res) => {
                setComments([res.data, ...comments]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDeleteComment = (commentId) => {
        const confirm = window.confirm('Are you sure to delete your comment?');
        if (confirm) {
            axios
                .delete(`/api/comment/deletecomment/${commentId}`)
                .then((res) => {
                    const newComments = comments.filter((comment) => comment._id !== commentId);
                    setComments(newComments);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleHideComment = (commentId) => {
        const confirm = window.confirm('Are you sure to hide this comment?');
        if (confirm) {
            axios
                .patch(`/api/admin/hidecomment/${commentId}`)
                .then((res) => {
                    const newComments = comments.filter((comment) => comment._id !== commentId);
                    setComments(newComments);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        // Call API to get hotel detail
        const fetchData = async () => {
            try {
                const hotelRes = await axios.get(`/api/hotel/info/${hotelIdAPI}`);
                if (hotelRes) {
                    setHotel(hotelRes.data);
                }
                const roomsRes = await axios.get(`/api/post/postlist/${hotelIdAPI}`);
                if (roomsRes) {
                    setRooms(roomsRes.data);
                }
                const commentsRes = await axios.get(`/api/comment/commentlistbyhotel/${hotelIdAPI}`);
                if (commentsRes) {
                    setComments(commentsRes.data.reverse());
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    console.log(hotel);
    console.log(rooms);
    console.log(comments);

    return (
        <div className={cx('wrapper')}>
            <Slider slides={hotel.slider} />

            <div className={cx('content')}>
                <div className={cx('hotel-title')}>
                    <h3 className={cx('hotel-name')}>{hotel.hotelName}</h3>
                    <p>
                        <span className="fw-bold">Address</span> {hotel.hotelAddress}
                    </p>
                    <p>
                        <span className="fw-bold">Hotline:</span> {hotel.hotelPhoneNumber}
                    </p>
                </div>

                <div className={cx('description')}>
                    <div className={cx('description-container')}>
                        <ItemTitle header={hotel.hotelName} description="About our hotel" />
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center">
                                <img className="w-75" src={hotel.descriptionImage} alt="descriptionImage" />
                            </div>
                            <div className="col-6">
                                <p>{hotel.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Rooms
                    rooms={rooms}
                    addRoom
                    header="Room type"
                    description="Good choice for you"
                    updateRooms={updateRooms}
                />

                <div className={cx('utilities')}>
                    <div className={cx('utilities-container')}>
                        <ItemTitle header="Utilities" description="Available services" />
                        <div className="row">
                            {hotel.utilities.map((utility, index) => (
                                <div className="col-4 mt-3" key={index}>
                                    <div className="card text-center">
                                        <img className="card-img-top" src={utility.image} alt="Utility" />
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{utility.name}</h5>
                                            <p className="card-text">{utility.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <BookingForm rooms={rooms} />

                <div className={cx('comment')}>
                    <div className={cx('comment-container')}>
                        <ItemTitle header="Reviews" description="Our customer experience" />

                        <div className={cx('comment__list')}>
                            <ul
                                className="list-group
                        list-group-flush"
                            >
                                {comments.map((comment, index) => (
                                    <li className={cx('list-group-item', 'comment__item')} key={index}>
                                        <div className="d-flex">
                                            <div className="d-flex align-items-center w-50">
                                                <img
                                                    className={cx('comment__avatar')}
                                                    src={comment.avatar}
                                                    alt="Avatar"
                                                />
                                                <span className="ms-2 pb-3 fw-bold">{comment.name}</span>
                                            </div>
                                            <div className="w-100">
                                                <span className="text-black-50">{comment.createdDate}</span>
                                                <p>{comment.content}</p>
                                            </div>
                                            <div className={cx("handle-comment")}>
                                                <div className="mb-1">
                                                    {user && user.userType === 0 && (
                                                        <Button
                                                            warning
                                                            onClick={() => {
                                                                handleHideComment(comment._id);
                                                            }}
                                                            className={cx('handle-comment-btn')}
                                                        >
                                                            <RemoveCircleOutlineIcon />
                                                        </Button>
                                                    )}
                                                </div>
                                                <div>
                                                    {user && user._id === comment.userId && (
                                                        <Button
                                                            danger
                                                            onClick={() => {
                                                                handleDeleteComment(comment._id);
                                                            }}
                                                            className={cx('handle-comment-btn')}
                                                        >
                                                            <CloseIcon />
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {user ? (
                            <div className={cx('comment__form')}>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="comment" className="form-label mt-3">
                                            Comment
                                        </label>

                                        <textarea maxlength="250" className="form-control" id="comment" rows="3" required></textarea>

                                        <div className="w-50  mt-3">
                                            <Button
                                                primary
                                                type="button"
                                                onClick={() => {
                                                    const comment = document.getElementById('comment').value;
                                                    document.getElementById('comment').value = '';
                                                    handleComment(comment);
                                                }}
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className={cx('comment__form')}>
                                <div className="mb-3">
                                    <label htmlFor="comment" className="form-label mt-3">
                                        Comment
                                    </label>

                                    <textarea className="form-control" id="comment" rows="3" disabled></textarea>

                                    <div className="w-50 mt-3">
                                        <Button primary onClick={() => navigate('/login')}>
                                            Login to continue
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelPage;
