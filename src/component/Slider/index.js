import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

export default function Slider({ slides }) {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== slides.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === slides.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(slides.length);
        }
    };

    return (
        <div className={cx('container-slider')}>
            {slides.map((slide, index) => {
                return (
                    <div key={index} className={slideIndex === index + 1 ? cx('slide', 'active-anim') : cx('slide')}>
                        <img src={slide} alt="Slider" />
                    </div>
                );
            })}

            <button onClick={prevSlide} className={cx('btn-slide', 'prev')}>
                <ChevronLeftIcon />
            </button>
            <button onClick={nextSlide} className={cx('btn-slide', 'next')}>
                <ChevronRightIcon />
            </button>
        </div>
    );
}
