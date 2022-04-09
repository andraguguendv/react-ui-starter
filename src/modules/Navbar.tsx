import {Link} from 'react-router-dom';
import { Hamburger, Sun} from './customHooks/assets/svgs';
import {commonStyleClasses} from './customHooks/utils/styles';

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className={commonStyleClasses.wrapper}>
                <a href="/" className="flex items-center">
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">No Logo App</span>
                </a>
                <button
                    type="button"
                    data-collapse-toggle="mobile-menu"
                    className={`${commonStyleClasses.iconButton} md:hidden`}
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                    onClick={() => {}}
                >
                    <Hamburger/>
                </button>
                <div className={` hidden w-full md:block md:w-auto`} id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <button
                                className={`${commonStyleClasses.navItem} w-full flex justify-center`}
                                onClick={() => {}}
                            >
                                <Sun/>
                            </button>
                        </li>
                        <li>
                            <Link to="/" className={commonStyleClasses.navItem}>Intro</Link>
                        </li>
                        <li>
                            <Link to="/categories" className={commonStyleClasses.navItem}>Categories</Link>
                        </li>
                        <li>
                            <Link to="/coins" className={commonStyleClasses.navItem}>Coins</Link>
                        </li>
                        <li>
                            <Link to="/transactions" className={commonStyleClasses.navItem}>Transactions</Link>
                        </li>
                        <li>
                            <Link to="/departments" className={commonStyleClasses.navItem}>Departments</Link>
                        </li>
                        <li>
                            <Link to="/counter" className={commonStyleClasses.navItem}>Basic Counter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
