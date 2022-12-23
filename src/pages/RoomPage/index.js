import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import axios from '~/api/auth';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import BookingForm from '~/component/BookingForm';
import Button from '~/component/Button';
import Rooms from '~/component/Rooms';
import Slider from '~/component/Slider';
import UpdateItemForm from '~/component/UpdateItemForm';
import { selectUser } from '~/features/userSlice';
import styles from './RoomPage.module.scss';

const cx = classNames.bind(styles);

const hotelRes = {
    id: 1, // Là hotelId
    userId: 123, // Là userId của hotel owner
    hotelName: 'River Prince Hotel',
    hotelAddress: '135 - 145 Phan Dinh Phung Street, Ward 2, Da Lat, Vietnam',
    hotelPhoneNumber: '076 922 0162',
    starNumber: 5,
};

const roomRes = {
    id: 1, // Là roomId
    hotelId: 123,
    roomName: 'FAMILY DOUBLE ROOM SUITE',
    price: 800000,
    quantity: '2-4',
    bed: 2,
    toilet: 1,
    thumbnail: 'https://mauweb.monamedia.net/encore/wp-content/uploads/2019/02/02.jpg',
    slider: [
        {
            id: 1,
            image: 'https://mauweb.monamedia.net/howello/wp-content/uploads/2019/03/room3-1.jpg',
        },
        {
            id: 2,
            image: 'https://mauweb.monamedia.net/howello/wp-content/uploads/2019/03/room1-1.jpg',
        },
        {
            id: 3,
            image: 'https://mauweb.monamedia.net/howello/wp-content/uploads/2019/03/room2-1.jpg',
        },
    ],
    description:
        'Family Double Room Suite features a queen size or comfortable double bed, seating area, work desk and separate bathroom with walk-in shower or tub and shower, and modern art and neutral colors.',
};

const suggestedRoomsRes = [
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
    {
        id: 2,
        hotelId: 123,
        roomName: 'LUXURY DOUBLE ROOM SUITE',
        price: 850000,
        quantity: '2-4',
        bed: 2,
        toilet: 1,
        thumbnail: 'https://mauweb.monamedia.net/encore/wp-content/uploads/2019/02/032.jpg',
    },
    {
        id: 3,
        hotelId: 123,
        roomName: 'LUXURY SINGLE ROOM ART SUITE',
        price: 900000,
        quantity: '1-2',
        bed: 1,
        toilet: 1,
        thumbnail: 'https://mauweb.monamedia.net/encore/wp-content/uploads/2019/02/05.jpg',
    },
];

function formatCash(str) {
    return str
        .split('')
        .reverse()
        .reduce((prev, next, index) => {
            return (index % 3 ? next : next + ',') + prev;
        });
}

function RoomPage() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const params = useParams();
    const roomIdAPI = params.roomId;

    const [hotel, setHotel] = useState(hotelRes);
    const [room, setRoom] = useState(roomRes);
    const [suggestedRooms, setSuggestedRooms] = useState(suggestedRoomsRes);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const roomRes = await axios.get(`/api/post/info/${roomIdAPI}`);
                if (roomRes) {
                    setRoom(roomRes.data);
                }
                const hotelRes = await axios.get(`/api/hotel/info/${room.hotelId}`);
                if (hotelRes) {
                    setHotel(hotelRes.data);
                }
                const roomObj = {
                    hotel_id: room.hotelId,
                    post_id: room.id,
                };
                console.log(roomObj);
                const suggestedRoomsRes = await axios.get('/api/post/postlistexcept', roomObj);
                if (suggestedRoomsRes) {
                    setSuggestedRooms(suggestedRoomsRes.data);
                    console.log(suggestedRoomsRes.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleDeleteRoom = () => {
        const confirm = window.confirm('Are you sure to delete this room?');
        if (confirm) {
            //Call API to delete room
            axios
                .delete(`api/post/deletepost/${room._id}`)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            navigate(`/hotel/${room.hotelId}`);
        }
    };

    const handleUpdateRoom = (newRoom) => {
        setRoom(newRoom);

        // Call API to update room
        axios
            .post('/api/post/changeinfo', newRoom)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('hotel-title')}>
                    <h3 className={cx('hotel-name')}>{hotel.hotelName}</h3>
                    <p>
                        <span className="fw-bold">Address:</span> {hotel.hotelAddress}
                    </p>
                    <p>
                        <span className="fw-bold">Hotline:</span> {hotel.hotelPhoneNumber}
                    </p>
                </div>

                <div className={cx('room-info')}>
                    <div className={cx('room-info-container')}>
                        <div className="row">
                            <div className="col-7">
                                <div className={cx('room-info-slider')}>
                                    <Slider slides={[room.thumbnail, ...room.slider]} />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className={cx('room-info-detail')}>
                                    <h4 className={cx('room-name')}>{room.roomName}</h4>
                                    <p>
                                        <span className="fw-bold">Price: </span>
                                        <span className={cx('room-price')}>₫{formatCash(`${room.price}`)}</span>
                                    </p>
                                    <p>
                                        <span className="fw-bold">Amount: </span>
                                        <span className={cx('room-value')}>{room.quantity} people</span>
                                    </p>
                                    <p>
                                        <span className="fw-bold">Bed: </span>
                                        <span className={cx('room-value')}>{room.bed}</span>
                                    </p>
                                    <p>
                                        <span className="fw-bold">Bathroom: </span>
                                        <span className={cx('room-value')}>{room.toilet}</span>
                                    </p>
                                    <p>
                                        <span className="fw-bold">Description: </span>
                                        {room.description}
                                    </p>

                                    <Button
                                        primary
                                        large
                                        onClick={() => {
                                            window.scrollTo({
                                                top: 1500,
                                                behavior: 'smooth',
                                            });
                                        }}
                                    >
                                        Book now!
                                    </Button>

                                    {user && user.userType === '1' && (
                                        <>
                                            <Button
                                                secondary
                                                onClick={() => {
                                                    setShowUpdateForm(true);
                                                }}
                                            >
                                                <EditIcon />
                                            </Button>
                                            <Button
                                                danger
                                                onClick={() => {
                                                    handleDeleteRoom();
                                                }}
                                            >
                                                <CloseIcon />
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Rooms rooms={suggestedRooms} header="HOT" description="Best suggestion for you" />

                <BookingForm aRoom={room} />

                {showUpdateForm && (
                    <>
                        <UpdateItemForm
                            detail
                            room={room}
                            setShowUpdateForm={setShowUpdateForm}
                            handleUpdateRoom={handleUpdateRoom}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default RoomPage;
