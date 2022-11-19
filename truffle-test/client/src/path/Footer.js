import '../css/footer.css';
import {Form,Button} from 'react-bootstrap'


function Footer(props) {

  const onClicksubmit = (setMessage) => {
    setMessage();
  }
  return (
      <footer>
        <Form.Control placeholder="" className="input-form"/>
        <Button onClick={onClicksubmit} variant="primary" type="submit" className="input-button">
            <span class="glyphicon glyphicon-align-left" aria-hidden="true">전송</span>
        </Button>
      </footer>
  );
}

export default Footer;