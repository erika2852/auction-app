import '../css/header.css';
import {Navbar} from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="primary" variant="dark" className = "header-container">
        <Navbar.Brand className = "header-title-container">
            <h3>Carrykim의 채팅앱</h3>
        </Navbar.Brand>
    </Navbar>
  );
}

export default Header;