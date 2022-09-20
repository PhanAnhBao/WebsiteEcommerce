import { Fade } from 'react-slideshow-image';

const slideImages = [
    {
      url: './images/banner__01.jpg',
      caption: 'Slide 1'
    },
    {
      url: './images/banner__02.jpg',
      caption: 'Slide 2'
    },
    {
      url: './images/banner__03.jpg',
      caption: 'Slide 2'
    },
  ];
  
  const properties = {
    prevArrow: <button className="slide--button slide--button__left">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 19l-7-7 7-7" />
      </svg>
    </button>,
    nextArrow: <button className="slide--button slide--button__right">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 5l7 7-7 7" />
      </svg>
    </button>
  }
function Slider() {
    return (
        <Fade autoplay={true} {...properties}>
            {
                slideImages.map((item, index) => (
                    <div class="slider__01" key={index}>
                        <img src={item.url} alt="banner 01" />
                    </div>
                ))
            }
        </Fade>
    );
}

export default Slider;