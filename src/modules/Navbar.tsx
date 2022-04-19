import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Close, Hamburger, Moon, Sun} from './customHooks/assets/svgs';
import {commonStyleClasses} from './customHooks/utils/styles';
import {useToggle} from "./customHooks/hooks/useToggle";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useToggle();
    const [isDarkMode, setIsDarkMode] = useToggle();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.removeAttribute('class')
        }
    }, [isDarkMode]);

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
                    onClick={setIsMobileMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMobileMenuOpen
                        ? <Close/>
                        : <Hamburger/>
                    }
                </button>
                <div className={` ${isMobileMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <button
                                className={`${commonStyleClasses.navItem} w-full flex justify-center`}
                                onClick={setIsDarkMode}
                            >
                                {isDarkMode ? <Moon/> : <Sun/>}
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
                        <li>
                            <Link to="/users" className={commonStyleClasses.navItem}>Users</Link>
                        </li>
                        <li>
                            <Link to="/toggle" className={commonStyleClasses.navItem}>Toggle example</Link>
                        </li>
                        <li>
                            <Link to="/accordion" className={commonStyleClasses.navItem}>Accordion example</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
