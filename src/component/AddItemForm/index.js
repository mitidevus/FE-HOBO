import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import styles from './AddItemForm.module.scss';

const cx = classNames.bind(styles);

function AddItemForm({ rooms, setShowAddForm, handleAddRoom }) {
    const [roomName, setRoomName] = useState('');
    const [starNumber, setStarNumber] = useState(0);
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [bed, setBed] = useState('');
    const [toilet, setToilet] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [slider1, setSlider1] = useState('');
    const [slider2, setSlider2] = useState('');
    const [slider3, setSlider3] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const params = useParams();
    const hotelId = params.hotelId;

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
            !slider1 ||
            !slider2 ||
            !slider3 ||
            !description
        ) {
            return alert('Please fill all fields!');
        }

        const newRoom = {
            hotelId,
            roomName,
            starNumber,
            price,
            quantity,
            bed,
            toilet,
            thumbnail,
            slider: [slider1, slider2, slider3],
            description,
        };

        console.log(newRoom);
        handleAddRoom(newRoom);
        setShowAddForm(false);
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
                                value={slider1}
                                onChange={(e) => setSlider1(e.target.value)}
                                required
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Slider URL"
                                value={slider2}
                                onChange={(e) => setSlider2(e.target.value)}
                                required
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Slider URL"
                                value={slider3}
                                onChange={(e) => setSlider3(e.target.value)}
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
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddItemForm;
