import "./intro.css";
import Me from "../../img/m2.jpeg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
       
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Manshi Kumari</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
               
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Information Technology</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Dancer</div>
              <div className="i-title-item">Singer</div>
              
            </div>
          </div>
          <p className="i-desc">
           I am an Information Technology Student and currently giving my best to achieve success in my life and make it full of adventures and enjoyment.
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
