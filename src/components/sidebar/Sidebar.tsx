import reactLogo from '../../assets/react.svg';
import viteLogo from '../../../public/vite.svg';
import './style.scss';
const Sidebar = () => {
    return (
        <nav className='sidebar'>
            <nav className="sidebar__head">
                <section className="sidebar__head__logo">
                    <img src={reactLogo} alt="react-logo" />
                </section>
                <section className="sidebar__head__content">
                    <h1>DIGITAL</h1>
                    <p>React Framework</p>
                </section>
            </nav>
            <nav className="sidebar__body">
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <img src={viteLogo} alt="vite-logo" />
                        <p>Dashboard</p>
                    </li>
                    <li className="sidebar-item">
                        <img src={viteLogo} alt="vite-logo" />
                        <p>Calendar</p>
                    </li>
                    <li className="sidebar-item">
                        <img src={viteLogo} alt="vite-logo" />
                        <p>Analytics</p>
                    </li>
                    <li className="sidebar-item">
                        <img src={viteLogo} alt="vite-logo" />
                        <p>Ads</p>
                    </li>
                    <li className="sidebar-item">
                        <img src={viteLogo} alt="vite-logo" />
                        <p>Campaigns</p>
                    </li>
                    <li className="sidebar-item">
                        <img src={viteLogo} alt="vite-logo" />
                        <p>Settings</p>
                    </li>
                </ul>
            </nav>
            <nav className="sidebar__foot">
                <section className="sidebar__foot__infor">
                    <img src="https://cdn.dribbble.com/users/15366057/avatars/normal/data?1677894737" alt="me" />
                    <h1>Hữu Nhân</h1>
                    <p>@huunhan6311</p>
                </section>
                <section className="sidebar__foot__singout">
                    <img src={viteLogo} alt="logout" />
                    <p>Sign out</p>
                </section>
            </nav>
        </nav>
    )
}

export default Sidebar;