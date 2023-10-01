import './class.css'
function Class(props){

    return(
        <div className="class-contaner">
            <h3 className='title'>{props.class.name}</h3>
            <p className='course-code'>course code:{props.class.code}</p>
            <p className='course-description'>{props.class.description}</p>
            <p className='time'>{props.class.semester} {props.class.year}</p>
        </div>
    )

}

export default Class;