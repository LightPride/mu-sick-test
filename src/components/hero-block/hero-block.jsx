import underground from '../../assets/styled-words/underground.webp';

export const Hero = () => {
  return (
    <div className="hero-background">
      <div className="container">
        <div className="hero">
          <span className="hero_span">The faces of the</span>
          <img
            className="hero_image"
            src={underground}
            alt="Underground Text"
          />
        </div>
      </div>
    </div>
  );
};
