import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './UpdateItemForm.module.scss';
import axios from '~/api/auth';
import Button from '../Button';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);

function UpdateItemForm({ room, setShowUpdateForm, handleUpdateRoom, detail = false }) {
    const [roomName, setRoomName] = useState(room.roomName || '');
    const [starNumber, setStarNumber] = useState(room.starNumber || 0);
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
        if (
            !roomName ||
            !starNumber ||
            !price ||
            !quantity ||
            !bed ||
            !toilet ||
            !thumbnail ||
            (detail && !description)
        ) {
            return alert('Please fill all fields!');
        }

        const updatedRoom = detail
            ? {
                  _id: room._id,
                  roomName,
                  starNumber,
                  price,
                  quantity,
                  bed,
                  toilet,
                  thumbnail,
                  slider,
                  description,
              }
            : {
                  _id: room._id,
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
                        <div className="col-9">
                            <label htmlFor="roomName" className="form-label fw-bold">
                                Room name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={roomName}
                                onChange={(e) => setRoomName(e.target.value)}
                                maxlength="22"
                                required
                            />
                        </div>
                        <div className="col-3">
                            <label htmlFor="starNumber" className="form-label fw-bold">
                                Star
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Star number"
                                value={starNumber}
                                onChange={(e) => setStarNumber(e.target.value)}
                                maxlength="1"
                                required
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
                                maxlength="8"
                                required
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
                                maxlength="1"
                                required
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
                                maxlength="1"
                                required
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
                                maxlength="1"
                                required
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
                                    required
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
                                    value={slider[0]}
                                    onChange={(e) => setSlider([e.target.value, slider[1], slider[2]])}
                                    required
                                />

                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Slider URL"
                                    value={slider[1]}
                                    onChange={(e) => setSlider([slider[0], e.target.value, slider[2]])}
                                    required
                                />

                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Slider URL"
                                    value={slider[2]}
                                    onChange={(e) => setSlider([slider[0], slider[1], e.target.value])}
                                    required
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
                                maxlength="500"
                                required
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
                            maxlength="20"
                            required
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
                                maxlength="8"
                                required
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
                                maxlength="1"
                                required
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
                                maxlength="1"
                                required
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
                                maxlength="1"
                                required
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
                            required
                        />
                    </div>

                    <div className="d-grid mb-3">
                        <Button primary type="submit" className="w-50 center" onClick={(e) => handleSubmit(e)}>
                            Update
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateItemForm;
