import classes from './MainNavigation.module.css';
import Link from "next/link"

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Properties for Sale</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Properties</Link>
          </li>
          <li>
            <Link href='/new-property'>Add New Property</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
