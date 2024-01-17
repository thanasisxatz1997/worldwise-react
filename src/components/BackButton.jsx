import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1); //-1 goes 1 back -2 goes 2 links back and so on, +1 goes forward
      }}
    >
      Back
    </Button>
  );
}

export default BackButton;
