import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector } from 'react-redux';
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

function Rooms({ rooms, header, description, updateRooms, addRoom=false }) {
    const user = useSelector(selectUser);

    const [showAddForm, setShowAddForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updatedRoom, setUpdatedRoom] = useState({});

    const handleAddRoom = (room) => {
        const newRooms = [...rooms, room];
        updateRooms(newRooms);
    };
    
    const handleDeleteRoom = (id) => {
        const confirm = window.confirm('Are you sure to delete this room?');
        if (confirm) {
            const newRooms = rooms.filter((room) => room.id !== id);
            updateRooms(newRooms);
        }
    };

    const handleUpdateRoom = (room) => {
        const newRooms = rooms.map((item) => {
            if (item.id === room.id) {
                return room;
            }
            return item;
        });
        updateRooms(newRooms);
    };

    return (
        <div className={cx('rooms')}>
            <div className={cx('rooms-container')}>
                <ItemTitle header={header} description={description} />
                {/* Add room button */}
                {user && user.userType === '1' && addRoom && (
                    <Button success className={cx('add-room-btn')} onClick={() => setShowAddForm(true)}>
                        <AddIcon />
                    </Button>
                )}
                <div className="row">
                    {rooms.map((room, index) => (
                        <div className="col-4 mt-3" key={index}>
                            <div className="card text-center">
                                <img className={cx('card-img-top', 'room-thumbnail')} src={room.thumbnail} alt="Room" />
                                <div className="card-body">
                                    <h5 className={cx('card-title', 'room-name')}>{room.roomName}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Quantity: {room.quantity} people</li>
                                    <li className="list-group-item">
                                        {room.bed} {room.bed > 1 ? 'Beds' : 'Bed'}
                                    </li>
                                    <li className="list-group-item">
                                        {room.toilet} {room.toilet > 1 ? 'Bathrooms' : 'Bathroom'}
                                    </li>
                                    <li className="list-group-item">
                                        Price: <span className="fw-bold ms-1">₫{formatCash(`${room.price}`)}</span>/day
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <Button
                                        primary
                                        large={!(user && user.userType === '1')}
                                        to={`/hotels/${room.hotelId}/rooms/${room.id}`}
                                    >
                                        Details
                                    </Button>
                                    {user && user.userType === '1' && (
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
                                            <Button danger onClick={() => handleDeleteRoom(room.id)}>
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
                        <AddItemForm
                            rooms={rooms}
                            setShowAddForm={setShowAddForm}
                            handleAddRoom={handleAddRoom}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Rooms;
