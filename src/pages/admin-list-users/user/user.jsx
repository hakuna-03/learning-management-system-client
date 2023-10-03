import "./user.css";
function User(props) {
  return (
    <div className="user-container">
      <h3>{props.user.name}</h3>
      <p className="collage_id">
        <b>collage id: </b>
        {props.user.collage_id}
      </p>
      <p className="email">
        <b>email: </b>
        {props.user.email}
      </p>
      <p className="enrollment_date">
        <b>enrollment date: </b>
        {props.user.enrollment_date.substring(0, 10)}
      </p>
    </div>
  );
}

export default User;
