import doom from './doom.jpg';
import logo2 from './Logo2.png';
import minecraft from './minecraft.jpg';
import fifa from './fifa.jpg';
import './home.css';

const Home = () => {
  const images = [
    { src: doom, alt: 'Imagen 1' },
    { src: logo2, alt: 'Imagen 2' },
    { src: minecraft, alt: 'Imagen 3' },
    { src: fifa, alt: 'Imagen 4' }
  ];

  return (
    <div className="container mt-4 h-100">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">   

        {/*IMAGES */}
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img
                src={image.src}
                className="d-block mx-auto blur-border"
                style={{ height: '700px', objectFit: 'cover' }}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
         <div className="carousel-indicators mt-0">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

