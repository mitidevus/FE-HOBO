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
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Price: {props.price}</Card.Text>
        <Card.Text>Location: {props.location}</Card.Text>
        <Card.Text>Star: {a}</Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  );
}

export default CardView;