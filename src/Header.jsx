const Header =(props)=> {
    return (
        <div>
            <h2 className="text-black"><b>{props.title}</b></h2>
            <hr className="text-black"/>
        </div>
    )
};

export default Header;