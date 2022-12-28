import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
import styles from './ApprovePage.module.scss';

const cx = classNames.bind(styles);

const unapprovedRooms = [
    {
        _id: '639706acd5f14557aced81bc',
        createdDate: '12/12/2022, 5:47:08 PM',
        updatedDate: '12/12/2022, 5:47:08 PM',
        hotelId: '639700482e84ad02f4864a68',
        roomName: 'LUXURY SINGLE ROOM ART SUITE',
        hotelName: 'River Prince Hotel',
        hotelAddress: '135 - 145 Phan Dinh Phung Street, Ward 2, Da Lat, Vietnam',
        phoneNumber: '0123456789',
        licenseNumber: 'LIS123123123',
        price: 900000,
        quantity: '1-2',
        starNumber: 4,
        bed: 1,
        toilet: 1,
        thumbnail: 'https://mauweb.monamedia.net/encore/wp-content/uploads/2019/02/032.jpg',
        slider: [
            'https://mauweb.monamedia.net/howello/wp-content/uploads/2019/03/room3-1.jpg',
            'https://mauweb.monamedia.net/howello/wp-content/uploads/2019/03/room1-1.jpg',
            'https://mauweb.monamedia.net/howello/wp-content/uploads/2019/03/room2-1.jpg',
        ],
        description:
            'Family Double Room Suite features a queen size or comfortable double bed, seating area, work desk and separate bathroom with walk-in shower or tub and shower, and modern art and neutral colors.',
        isApproved: null,
    },
    {
        _id: '63a5b7940255d6dd14c7702e',
        createdDate: '12/23/2022, 9:13:40 PM',
        updatedDate: '12/23/2022, 9:14:21 PM',
        hotelId: '639700482e84ad02f4864a68',
        roomName: 'CAT',
        hotelName: 'River Prince Hotel',
        hotelAddress: '135 - 145 Phan Dinh Phung Street, Ward 2, Da Lat, Vietnam',
        phoneNumber: '0123456789',
        licenseNumber: 'LIS123123123',
        price: '123',
        quantity: '123',
        starNumber: 5,
        bed: '123',
        toilet: '123',
        thumbnail:
            'https://1.bp.blogspot.com/--3KvfEqOlPw/XS60LZr516I/AAAAAAAACU8/msyAg6fCuUgGbbaR9NFbMEq5dS39IJJXACLcBGAs/s1600/cAT.jpg',
        slider: [
            'https://1.bp.blogspot.com/--3KvfEqOlPw/XS60LZr516I/AAAAAAAACU8/msyAg6fCuUgGbbaR9NFbMEq5dS39IJJXACLcBGAs/s1600/cAT.jpg',
            'https://1.bp.blogspot.com/--3KvfEqOlPw/XS60LZr516I/AAAAAAAACU8/msyAg6fCuUgGbbaR9NFbMEq5dS39IJJXACLcBGAs/s1600/cAT.jpg',
            'https://1.bp.blogspot.com/--3KvfEqOlPw/XS60LZr516I/AAAAAAAACU8/msyAg6fCuUgGbbaR9NFbMEq5dS39IJJXACLcBGAs/s1600/cAT.jpg',
        ],
        description: 'hahaha',
        isApproved: null,
    },
    {
        _id: '639706acd5f14557aced81b1',
        createdDate: '12/12/2022, 5:47:08 PM',
        updatedDate: '12/12/2022, 5:47:08 PM',
        hotelId: '639700482e84ad02f4864a69',
        roomName: 'DELUX DOUBLE ROOM',
        hotelName: 'Bazan Hotel Dalat',
        hotelAddress: '36 To Hien Thanh Street, Da Lat, Vietnam',
        phoneNumber: '0123456789',
        licenseNumber: 'LIS123123123',
        price: 500000,
        quantity: '1-2',
        starNumber: 3,
        bed: 1,
        toilet: 1,
        thumbnail:
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/353022403.jpg?k=00927c4549600b696fc118204e5de21dcc3ae8fbe605fc73ff06af024ab0d1f9&o=&hp=1',
        slider: [
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/366026620.jpg?k=28144c2631eab75613c6fb18b813ed19c268ca366ab3520933870d4773b64057&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/353017862.jpg?k=d3cc224fa37b0576f229a7cf1767c703405a3f0b0b49514697a40ba5ae317275&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/357642217.jpg?k=194ad42880d94b85857a2f54a524cc9adde1bb0fca768154d3dead1db83335cf&o=&hp=1',
        ],
        description:
            'Family Double Room Suite features a queen size or comfortable double bed, seating area, work desk and separate bathroom with walk-in shower or tub and shower, and modern art and neutral colors.',
        isApproved: null,
    },
    {
        _id: '639706acd5f14557aced81b5',
        createdDate: '12/12/2022, 5:47:08 PM',
        updatedDate: '12/12/2022, 5:47:08 PM',
        hotelId: '639700482e84ad02f4864a67',
        roomName: 'hahaha',
        hotelName: 'hihihi',
        hotelAddress: 'Ho Chi Minh City',
        phoneNumber: '0123456789',
        licenseNumber: 'LIS123123123',
        price: 499000,
        quantity: '1-2',
        starNumber: 2,
        bed: 1,
        toilet: 1,
        thumbnail:
            'https://th.bing.com/th/id/R.033258f1ebc04d8181d8eb7db12374e6?rik=bLaP6%2fctqD7wLA&riu=http%3a%2f%2fwww.dogwallpapers.net%2fwallpapers%2ffunny-shiba-inu-dog-wallpaper.jpg&ehk=FqV4HMMSoUV%2bjPz2WhaopnUPaBdXB9TabmU38e%2fIfCw%3d&risl=&pid=ImgRaw&r=0',
        slider: [
            'https://th.bing.com/th/id/R.6bda1050b406da116ba4af6962ce6f26?rik=rLiOUsTC2%2fbxJw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f6%2f69%2fShiba_Inu_cream_portrait.jpg&ehk=twy0Ts8koaM9BnuJsvKdXlSKH09CjB7LoSP5dkerFdE%3d&risl=&pid=ImgRaw&r=0',
            'https://th.bing.com/th/id/R.33b0bbea12ba1a37699ac432eafdbff4?rik=VgPkSF6dwLmqFg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fen%2f5%2f52%2fShiba_inu.JPG&ehk=MZhkMBicfzDhDMxTDbGgns6jKPkEV96i69onbRIaWvQ%3d&risl=&pid=ImgRaw&r=0',
            'https://investorplace.com/wp-content/uploads/2021/05/shiba-inu-3.jpg',
        ],
        description:
            'Family Double Room Suite features a queen size or comfortable double bed, seating area, work desk and separate bathroom with walk-in shower or tub and shower, and modern art and neutral colors.',
        isApproved: null,
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

function ApprovePage() {
    const [rooms, setRooms] = useState(unapprovedRooms);
    const [room, setRoom] = useState(rooms[0] || '');

    // Click left button to change room
    const prevRoom = () => {
        const index = rooms.findIndex((item) => item._id === room._id);
        if (index !== 0) {
            setRoom(rooms[index - 1]);
        } else if (index === 0) {
            setRoom(rooms[rooms.length - 1]);
        }
    };

    // Click right button to change room
    const nextRoom = () => {
        const index = rooms.findIndex((item) => item._id === room._id);
        if (index !== rooms.length - 1) {
            setRoom(rooms[index + 1]);
        } else if (index === rooms.length - 1) {
            setRoom(rooms[0]);
        }
    };

    // Click approve button to approve room
    const handleApprovePost = () => {
        const index = rooms.findIndex((item) => item._id === room._id);
        const newRooms = [...rooms];
        newRooms.splice(index, 1);
        setRooms(newRooms);
        setRoom(newRooms[0] || '');

        // Call API to update status of post
        // const approvedRoom = {
        //     ...room,
        //     isApproved: true,
        // };
    };

    // Click reject button to reject room
    const handleRejectPost = () => {
        const index = rooms.findIndex((item) => item._id === room._id);
        const newRooms = [...rooms];
        newRooms.splice(index, 1);
        setRooms(newRooms);
        setRoom(newRooms[0] || '');

        // Call API to update status of post
        // const rejectedRoom = {
        //     ...room,
        //     isApproved: false,
        // };
    };

    if (room) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('room-info')}>
                        <div className={cx('room-info-container')}>
                            <div className="row">
                                <div className="col">
                                    <div className={cx('room-info-slider')}>
                                        <Slider slides={[room.thumbnail, ...room.slider]} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className={cx('room-info-detail')}>
                                        <h4 className={cx('room-name')}>{room.roomName}</h4>
                                        <div className="mb-2">
                                            <span className="fw-bold">Price: </span>
                                            <span className={cx('room-price')}>₫{formatCash(`${room.price}`)}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-bold">Amount: </span>
                                            <span className={cx('room-value')}>{room.quantity} people</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-bold">Bed: </span>
                                            <span className={cx('room-value')}>{room.bed}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-bold">Bathroom: </span>
                                            <span className={cx('room-value')}>{room.toilet}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-bold">Description: </span>
                                            {room.description}
                                        </div>

                                        <hr />

                                        <h4 className={cx('room-name')}>{room.hotelName}</h4>
                                        <div className="mb-2">
                                            <span className="fw-bold">Address: </span>
                                            <span className={cx('room-value')}>{room.hotelAddress}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-bold">Hotline: </span>
                                            <span className={cx('room-value')}>{room.phoneNumber}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-bold">License: </span>
                                            <span className={cx('room-value')}>{room.licenseNumber}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-bold">Star: </span>
                                            {Array.from({ length: room.starNumber }, (_, index) => (
                                                <i key={index} className="fas fa-star text-warning"></i>
                                            ))}
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <Button success className={cx('approve')} onClick={handleApprovePost}>
                                                <DoneIcon />
                                            </Button>
                                            <Button danger className={cx('reject')} onClick={handleRejectPost}>
                                                <CloseIcon />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className={cx('btn-slide', 'prev')} onClick={prevRoom}>
                            <ChevronLeftIcon />
                        </button>
                        <button className={cx('btn-slide', 'next')} onClick={nextRoom}>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('room-info', 'd-flex justify-content-center align-items-center')}>
                        <h3 className="text-secondary">There is currently no room for approval.</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApprovePage;
