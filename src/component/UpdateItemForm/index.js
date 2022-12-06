import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './UpdateItemForm.module.scss';
import axios from '~/api/auth';
import Button from '../Button';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);

function UpdateItemForm({ room, setShowUpdateForm, handleUpdateRoom, detail = false }) {
    const [roomName, setRoomName] = useState(room.roomName || '');
    const [price, setPrice] = useState(room.price || '');
    const [quantity, setQuantity] = useState(room.quantity || '');
    const [bed, setBed] = useState(room.bed || '');
    const [toilet, setToilet] = useState(room.toilet || '');
    const [thumbnail, setThumbnail] = useState(room.thumbnail || '');
    const [slider, setSlider] = useState(room.slider || []);
    const [description, setDescription] = useState(room.description || '');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!roomName || !price || !quantity || !bed || !toilet || !thumbnail || (detail && !description)) {
            return alert('Please fill all fields!');
        }

        const updatedRoom = detail
            ? {
                  id: room.id,
                  hotelId: room.hotelId,
                  roomName,
                  price,
                  quantity,
                  bed,
                  toilet,
                  thumbnail,
                  slider,
                  description,
              }
            : {
                  id: room.id,
                  hotelId: room.hotelId,
                  roomName,
                  price,
                  quantity,
                  bed,
                  toilet,
                  thumbnail,
              };

        console.log(updatedRoom);
        handleUpdateRoom(updatedRoom);
        setShowUpdateForm(false);

        // Send userAccount to server and back to home page
        // try {
        //     const res = await axios.put(`/room/${room.id}`, updatedRoom);
        //     console.log(res);
        //     handleUpdateRoom(updatedRoom);
        //     setShowUpdateForm(false);
        // }
        // catch (err) {
        //     console.log(err);
        //     setError(err.response.data.msg);
        // }
    };

    if (detail) {
        return (
            <div className={cx('wrapper')} onClick={() => setShowUpdateForm(false)}>
                <div form className={cx('form-detail')} onClick={(e) => e.stopPropagation()}>
                    <h3>Update Room</h3>
                    <Button danger className={cx('close-btn-detail')} onClick={() => setShowUpdateForm(false)}>
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
                            Update
                        </Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper')} onClick={() => setShowUpdateForm(false)}>
                <div form className={cx('form')} onClick={(e) => e.stopPropagation()}>
                    <h3>Update Room</h3>
                    <button className={cx('btn btn-danger', 'close-btn')} onClick={() => setShowUpdateForm(false)}>
                        X
                    </button>
                    {error && <p className={cx('error')}>{error}</p>}
                    <div className="my-3">
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

                    <div className="row my-3">
                        <div className="col-6">
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
                        <div className="col-6">
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
                    </div>

                    <div className="row my-3">
                        <div className="col-6">
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
                        <div className="col-6">
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

                    <div className="d-grid mb-3">
                        <button type="submit" className={cx('submit-btn')} onClick={(e) => handleSubmit(e)}>
                            Update
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateItemForm;
