import './Main.css';

export default function Main(props) {
    return (
        <>
            <div className = "div_class">
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
            </div>
    
            <div className="bgimg" style={{backgroundImage: `url(${props.urlimg})`}}>
            </div>
        </>
    );
  }