import { NAVI } from "./constants"
import { Link, Outlet } from 'react-router-dom';


export const Header = () => {


    return  (
    <>
            <header>
        <ul style={{ display: "flex", justifyContent: "space-around"  }}>
            {NAVI.map((link) => (<li key={link.id}>
                <Link to={link.to}> {link.name} </Link>
                </li>
            ))}

        </ul>

    </header>
    <main>
        <Outlet/>
    </main>
    </>

    );
}