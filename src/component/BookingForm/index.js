import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './BookingForm.module.scss';

const cx = classNames.bind(styles);

function BookingForm({ rooms, aRoom }) {
    return (
        <div className={cx('booking-contact')}>
            <div className={cx('overlay')}></div>
            <div className={cx('booking-contact-container')}>
                <form className={cx('booking-contact-form')}>
                    <h3 className='fw-bold'>BOOKING CONTACT</h3>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="fullname">Full name</label>
                                <input type="text" className="form-control" id="fullname" placeholder="Full name" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="phone">Phone number</label>
                                <input type="text" className="form-control" id="phone" placeholder="Phone" />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="checkin">Check-in date</label>
                                <input type="date" className="form-control" id="checkin" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="checkout">Check-out date</label>
                                <input type="date" className="form-control" id="checkout" />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="type">Amount</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="type">Room type</label>
                                <select className="form-select" aria-label="Default select example">
                                    {rooms &&
                                        rooms.map((room) => <option value={room.roomName}>{room.roomName}</option>)}
                                    {aRoom && <option value={aRoom.roomName}>{aRoom.roomName}</option>}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Button primary className="w-50 mt-3" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;
