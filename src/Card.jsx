const Card =(props) =>{
    return (
        <div className="card container-fluid w-70 bg bg-primary" >
            <img className="card-img" src={props.url} alt="imagen de un perro"  />
            <h2 className="d-flex justify-content-center">{props.title}</h2>
            <p className="d-flex justify-content-center">{props.description}</p>
        </div>
    )
};

export default Card;