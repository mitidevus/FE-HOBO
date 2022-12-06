import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './AddItemForm.module.scss';
import axios from '~/api/auth';
import Button from '../Button';
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function AddItemForm({ rooms, setShowAddForm, handleAddRoom }) {
    const [roomName, setRoomName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [bed, setBed] = useState('');
    const [toilet, setToilet] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [slider, setSlider] = useState([
        { id: 1, image: '' },
        { id: 2, image: '' },
        { id: 3, image: '' },
    ]);
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const params = useParams();
    const hotelId = params.hotelId;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !roomName ||
            !price ||
            !quantity ||
            !bed ||
            !toilet ||
            !thumbnail ||
            !slider[0].image ||
            !slider[1].image ||
            !slider[2].image ||
            !description
        ) {
            return alert('Please fill all fields!');
        }

        const newRoom = {
            id: rooms.length + 1,
            hotelId,
            roomName,
            price,
            quantity,
            bed,
            toilet,
            thumbnail,
            slider,
            description,
        };

        console.log(newRoom);
        handleAddRoom(newRoom);
        setShowAddForm(false);

        // Send userAccount to server and back to home page
        // try {
        //     const res = await axios.put(`/room/${room.id}`, AddRoom);
        //     console.log(res);
        //     handleAddRoom(AddRoom);
        //     setShowAddForm(false);
        // }
        // catch (err) {
        //     console.log(err);
        //     setError(err.response.data.msg);
        // }
    };

    return (
        <div className={cx('wrapper')} onClick={() => setShowAddForm(false)}>
            <div form className={cx('form-detail')} onClick={(e) => e.stopPropagation()}>
                <h3>Add Room</h3>
                <Button danger className={cx('close-btn-detail')} onClick={() => setShowAddForm(false)}>
                    <CloseIcon />
                </Button>
                {error && <p className={cx('error')}>{error}</p>}

                <div className="row my-3">
                    <div className="col-8">
                        <label htmlFor="roomName" className="form-label fw-bold">
                            Room name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="price" className="form-label fw-bold">
                            Price
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="quantity" className="form-label fw-bold">
                            Quantity
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="bed" className="form-label fw-bold">
                            Bed
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Bed"
                            value={bed}
                            onChange={(e) => setBed(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="toilet" className="form-label fw-bold">
                            Toilet
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Toilet"
                            value={toilet}
                            onChange={(e) => setToilet(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="thumbnail" className="form-label fw-bold">
                                Thumbnail
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Thumbnail URL"
                                value={thumbnail}
                                onChange={(e) => setThumbnail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="slider" className="form-label fw-bold">
                                Slider
                            </label>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Slider URL"
                                value={slider[0].image}
                                onChange={(e) =>
                                    setSlider([{ ...slider[0], image: e.target.value }, slider[1], slider[2]])
                                }
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Slider URL"
                                value={slider[1].image}
                                onChange={(e) =>
                                    setSlider([slider[0], { ...slider[1], image: e.target.value }, slider[2]])
                                }
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Slider URL"
                                value={slider[2].image}
                                onChange={(e) =>
                                    setSlider([slider[0], slider[1], { ...slider[2], image: e.target.value }])
                                }
                            />
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="description" className="form-label fw-bold">
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            rows="9"
                            placehlder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div className="d-flex mb-3 justify-content-center">
                    <Button primary type="submit" className="w-50" onClick={(e) => handleSubmit(e)}>
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddItemForm;