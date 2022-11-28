import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

function CardView(props) {
  const a=[]

   for(let i=0;i<props.numberStar;i++) a.push(<FaStar></FaStar>) 
  return (
    <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.roomName}</Card.Title>
        <Card.Text>{props.hotelName}</Card.Text>
        <Card.Text>{props.price}$</Card.Text>
        <Card.Text>{props.location}</Card.Text>
        <Card.Text>{a}</Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  );
}

export default CardView;