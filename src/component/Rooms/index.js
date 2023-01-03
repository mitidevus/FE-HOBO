import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '~/api/auth';
import { selectUser } from '~/features/userSlice';
import AddItemForm from '../AddItemForm';
import Button from '../Button';
import ItemTitle from '../ItemTitle';
import UpdateItemForm from '../UpdateItemForm';
import styles from './Rooms.module.scss';

const cx = classNames.bind(styles);

function formatCash(str) {
    return str
        .split('')
        .reverse()
        .reduce((prev, next, index) => {
            return (index % 3 ? next : next + ',') + prev;
        });
}

function Rooms({ hotelId, rooms, header, description, updateRooms, addRoom = false }) {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const [showAddForm, setShowAddForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updatedRoom, setUpdatedRoom] = useState({});

    const handleAddRoom = (room) => {
        // Call API to add room
        axios
            .post('/api/post/createpost', room)
            .then((res) => {
                const newRooms = [...rooms, room];
                updateRooms(newRooms);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDeleteRoom = (roomId) => {
        const confirm = window.confirm('Are you sure to delete this room?');
        if (confirm) {
            // Call API to delete room
            axios
                .delete(`/api/post/deletepost/${roomId}`)
                .then((res) => {
                    const newRooms = rooms.filter((room) => room._id !== roomId);
                    updateRooms(newRooms);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleUpdateRoom = (room) => {
        // Call API to update room
        axios
            .post('/api/post/changeinfo', room)
            .then((res) => {
                const newRooms = rooms.map((item) => {
                    if (item._id === room._id) {
                        return room;
                    }
                    return item;
                });
                updateRooms(newRooms);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={cx('rooms')}>
            <div className={cx('rooms-container')}>
                <ItemTitle header={header} description={description} />
                {/* Add room button */}
                {user && user.userType === 2 && user.hotelId === hotelId && addRoom && (
                    <Button success className={cx('add-room-btn')} onClick={() => setShowAddForm(true)}>
                        <AddIcon />
                    </Button>
                )}
                <div className="row">
                    {rooms.map((room, index) => (
                        <div className="col-4 mt-3" key={index}>
                            <div className="card text-center">
                                <img className={cx('card-img-top', 'room-thumbnail')} src={room.thumbnail} alt="Room" />
                                <ul className="list-group list-group-flush">
                                    <li className={cx('list-group-item', 'room-name')}>{room.roomName}</li>
                                    <li className="list-group-item">Quantity: {room.quantity} people</li>
                                    <li className="list-group-item">
                                        {room.bed} {room.bed > 1 ? 'Beds' : 'Bed'}
                                    </li>
                                    <li className="list-group-item">
                                        {room.toilet} {room.toilet > 1 ? 'Bathrooms' : 'Bathroom'}
                                    </li>
                                    <li className="list-group-item">
                                        Price: <span className="fw-bold ms-1">{formatCash(`${room.price}`)}₫</span>/day
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <Button
                                        primary
                                        large={!(user && user.userType === 2 && user.hotelId === hotelId)}
                                        onClick={() => {
                                            navigate(`/room/${room._id}`);
                                        }}
                                    >
                                        Details
                                    </Button>
                                    {user && user.userType === 2 && user.hotelId === hotelId && (
                                        <>
                                            <Button
                                                secondary
                                                onClick={() => {
                                                    setShowUpdateForm(true);
                                                    setUpdatedRoom(room);
                                                }}
                                            >
                                                <EditIcon />
                                            </Button>
                                            <Button danger onClick={() => handleDeleteRoom(room._id)}>
                                                <CloseIcon />
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showUpdateForm && (
                    <>
                        <UpdateItemForm
                            room={updatedRoom}
                            setShowUpdateForm={setShowUpdateForm}
                            handleUpdateRoom={handleUpdateRoom}
                        />
                    </>
                )}
                {showAddForm && (
                    <>
                        <AddItemForm rooms={rooms} setShowAddForm={setShowAddForm} handleAddRoom={handleAddRoom} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Rooms;
