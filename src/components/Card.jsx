import Avatar from "./Avatar";
import Detail from "./Detail";
const Card = (props) => {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <Avatar img={props.img} />
      <Detail detailInfo={props.tel} />
      <Detail detailInfo={props.email} />
    </div>
  );
};

export default Card;
