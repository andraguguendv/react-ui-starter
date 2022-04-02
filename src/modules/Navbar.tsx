import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Moon, Sun } from './customHooks/assets/svgs';
import { useToggle } from './customHooks/hooks/useToggle';
import {commonStyleClasses} from './customHooks/utils/styles';

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
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">No Logo App</span>
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
                        ? <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        : <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    }
                </button>
                <div className={` ${isMobileMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <button 
                                className={`${commonStyleClasses.navItem} w-full flex justify-center`}
                                onClick={setIsDarkMode}
                            >
                                {isDarkMode ? <Moon /> : <Sun />}
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
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
