import { Link } from 'react-router-dom';
export default function Nav(){
  return (
    <header className={"navbar navbar-expand-lg navbar-light bg-light"}>
      <ul className={"nav"}>
        <li className={"nav-item"}>
          <Link to="/" className="nav-link h4">Home</Link>
        </li>
      </ul>
      <ul className={"nav navbar-right"}>
        <li className={"nav-item"}>
          <Link to="/user/join" className={"nav-link h4"}>Join</Link>
        </li>
        <li className={"nav-item"}>
          <Link to="/user/login" className={"nav-link h4"} >Login</Link>
        </li>
        <li className={"nav-item"}>
          <Link to="/board/board" className="nav-link h4">Board</Link>
        </li>
      </ul>
    </header>
  );
}

