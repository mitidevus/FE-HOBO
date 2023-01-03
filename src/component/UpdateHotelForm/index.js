import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../Button';
import styles from './UpdateHotelForm.module.scss';

const cx = classNames.bind(styles);

function UpdateHotelForm({ hotel, setShowUpdateForm, handleUpdateHotel }) {
    const [hotelName, setHotelName] = useState(hotel.hotelName || '');
    const [hotelAddress, setHotelAddress] = useState(hotel.hotelAddress || '');
    const [hotelPhoneNumber, setHotelPhoneNumber] = useState(hotel.hotelPhoneNumber || '');
    const [descriptionImage, setDescriptionImage] = useState(hotel.descriptionImage || '');
    const [description, setDescription] = useState(hotel.description || '');
    const [starNumber, setStarNumber] = useState(hotel.starNumber || 0);
    const [slider, setSlider] = useState(hotel.slider || []);
    const [utilities, setUtilities] = useState(hotel.utilities || []);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !hotelName ||
            !hotelAddress ||
            !hotelPhoneNumber ||
            !descriptionImage ||
            !description ||
            !starNumber ||
            !slider ||
            !utilities
        ) {
            return alert('Please fill all fields!');
        }

        const updatedHotel = {
            _id: hotel._id,
            hotelName,
            hotelAddress,
            hotelPhoneNumber,
            descriptionImage,
            description,
            starNumber,
            slider,
            utilities,
        };

        console.log(updatedHotel);
        handleUpdateHotel(updatedHotel);
        setShowUpdateForm(false);
    };

    return (
        <div className={cx('wrapper')} onClick={() => setShowUpdateForm(false)}>
            <div form className={cx('form-detail')} onClick={(e) => e.stopPropagation()}>
                <h3>Update Hotel</h3>
                <Button danger className={cx('close-btn-detail')} onClick={() => setShowUpdateForm(false)}>
                    <CloseIcon />
                </Button>
                {error && <p className={cx('error')}>{error}</p>}

                <div className="row mb-2">
                    <div className="col">
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="hotelName" className="form-label fw-bold">
                                    Hotel name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    value={hotelName}
                                    onChange={(e) => setHotelName(e.target.value)}
                                    maxlength="30"
                                    required
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="hotelAddress" className="form-label fw-bold">
                                    Hotel address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    value={hotelAddress}
                                    onChange={(e) => setHotelAddress(e.target.value)}
                                    maxlength="100"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="hotelPhoneNumber" className="form-label fw-bold">
                                    Hotel phone number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone number"
                                    value={hotelPhoneNumber}
                                    onChange={(e) => setHotelPhoneNumber(e.target.value)}
                                    maxlength="10"
                                    required
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="starNumber" className="form-label fw-bold">
                                    Star Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Star"
                                    value={starNumber}
                                    onChange={(e) => setStarNumber(e.target.value)}
                                    maxlength="1"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descriptionImage" className="form-label fw-bold">
                                Description Image
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description Image URL"
                                value={descriptionImage}
                                onChange={(e) => setDescriptionImage(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label fw-bold">
                                Description
                            </label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placehlder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                maxlength="500"
                                required
                            ></textarea>
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
                        <div>
                            <label htmlFor="utilities" className="form-label fw-bold">
                                Utilities 1
                            </label>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Name"
                                value={utilities[0].name}
                                onChange={(e) =>
                                    setUtilities([
                                        { ...utilities[0], name: e.target.value },
                                        utilities[1],
                                        utilities[2],
                                    ])
                                }
                                maxlength="16"
                                required
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Image URL"
                                value={utilities[0].image}
                                onChange={(e) =>
                                    setUtilities([
                                        { ...utilities[0], image: e.target.value },
                                        utilities[1],
                                        utilities[2],
                                    ])
                                }
                                required
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Description"
                                value={utilities[0].description}
                                onChange={(e) =>
                                    setUtilities([
                                        { ...utilities[0], description: e.target.value },
                                        utilities[1],
                                        utilities[2],
                                    ])
                                }
                                maxlength="50"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="utilities" className="form-label fw-bold">
                                Utilities 2
                            </label>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Name"
                                value={utilities[1].name}
                                onChange={(e) =>
                                    setUtilities([
                                        utilities[0],
                                        { ...utilities[1], name: e.target.value },
                                        utilities[2],
                                    ])
                                }
                                maxlength="16"
                                required
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Image URL"
                                value={utilities[1].image}
                                onChange={(e) =>
                                    setUtilities([
                                        utilities[0],
                                        { ...utilities[1], image: e.target.value },
                                        utilities[2],
                                    ])
                                }
                                required
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Description"
                                value={utilities[1].description}
                                onChange={(e) =>
                                    setUtilities([
                                        utilities[0],
                                        { ...utilities[1], description: e.target.value },
                                        utilities[2],
                                    ])
                                }
                                maxlength="50"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="utilities" className="form-label fw-bold">
                                Utilities 3
                            </label>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Name"
                                value={utilities[2].name}
                                onChange={(e) =>
                                    setUtilities([
                                        utilities[0],
                                        utilities[1],
                                        { ...utilities[2], name: e.target.value },
                                    ])
                                }
                                maxlength="16"
                                required
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Image URL"
                                value={utilities[2].image}
                                onChange={(e) =>
                                    setUtilities([
                                        utilities[0],
                                        utilities[1],
                                        { ...utilities[2], image: e.target.value },
                                    ])
                                }
                                required
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Description"
                                value={utilities[2].description}
                                onChange={(e) =>
                                    setUtilities([
                                        utilities[0],
                                        utilities[1],
                                        { ...utilities[2], description: e.target.value },
                                    ])
                                }
                                maxlength="50"
                                required
                            />
                        </div>
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
}

export default UpdateHotelForm;
