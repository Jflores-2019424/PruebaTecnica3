import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    const onTicket = () => {
        navigate('/ticketList', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link className="navbar-brand" to="/">
                Peliculas
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }to="/">
                        Menu
                    </NavLink>
                </div>
            </div>
            <div className="navbar-nav">
            <NavLink onClick={onTicket} className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }to="/ticketList">
                        Tus Tickets
            </NavLink>
            </div>

            <NavLink onClick={onLogout} className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }to="/login">
                        Cerrar Sesion
            </NavLink>
        </nav>
    )
}