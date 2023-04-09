import Button from "react-bootstrap/Button";
function MyButton(props) {
  console.log('Props =>',props);
  return (
    <>
      <Button type={props.type} variant={props.variant}>
        {props.name}
      </Button>
    </>
  );
}
export default MyButton;
