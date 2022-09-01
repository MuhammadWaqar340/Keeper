const Card = (props) => {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
