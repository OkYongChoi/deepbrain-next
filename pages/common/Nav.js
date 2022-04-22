export default function Nav(){
  return (
    <header className={"navbar navbar-expand-lg navbar-light bg-light"}>
      <ul className={"nav"}>
        <li className={"nav-item"}>
          <a className="nav-link h4" href="/">Home</a>
        </li>
      </ul>
      <ul className={"nav navbar-right"}>
        <li className={"nav-item"}>
          <a className={"nav-link h4"} href="/user/join">Join</a>
        </li>
        <li className={"nav-item"}>
          <a className={"nav-link h4"} href="/user/login">Login</a>
        </li>
        <li className={"nav-item"}>
          <a className="nav-link h4" href="/board/board">Board</a>
        </li>
      </ul>
    </header>
  );
}

