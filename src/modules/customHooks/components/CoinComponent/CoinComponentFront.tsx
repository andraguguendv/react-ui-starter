import {CoinComponentFrontProps} from './coinComponent.model';
import { useToggle } from '../../hooks/useToggle';
import { commonStyleClasses } from '../../utils/styles';
import { Academic } from '../../assets/svgs';

const CoinComponentFront = ({image, name, currentPrice, setIsFlipped}: CoinComponentFrontProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useToggle();

    return (
        <div
            className='flip-card-front absolute w-full h-full bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700'
            style={{backfaceVisibility: 'hidden'}}
        >
            <div className="flex justify-end px-4 pt-4">
                <button 
                    className={commonStyleClasses.iconButton}
                    type="button"
                    onClick={setIsFlipped}
                >
                    <Academic />
                </button>
                <button
                    id="dropdownButton" 
                    type="button"
                    data-dropdown-toggle="dropdown" 
                    className={commonStyleClasses.iconButton}
                    onClick={setIsDropdownOpen}
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                {isDropdownOpen ? <div id="dropdown" className={commonStyleClasses.dropdown}>
                    <ul className="py-1" aria-labelledby="dropdownButton">
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                    </li>
                    </ul>
                </div> : null}
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="mb-3 w-8 h-8 rounded-full shadow-lg" src={image} alt={name}/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Current Price: {currentPrice}</span>
            </div>
        </div>
    );
}

export default CoinComponentFront;