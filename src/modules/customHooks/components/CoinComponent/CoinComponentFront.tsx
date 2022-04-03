import {CoinComponentFrontProps} from './coinComponent.model';
import { useToggle } from '../../hooks/useToggle';
import { commonStyleClasses } from '../../utils/styles';
import { Academic, MenuDots } from '../../assets/svgs';
import BuyModal from '../BuyModal';

const CoinComponentFront = ({image, name, currentPrice, setIsFlipped}: CoinComponentFrontProps) => {
    const [isDropdownOpen, setIsDropdownOpen, dropdownRef] = useToggle<HTMLButtonElement>();
    const [isBuyModalOpen, setIsBuyModalOpen] = useToggle();

    return (
        <>
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
                        ref={dropdownRef}
                        type="button"
                        className={commonStyleClasses.iconButton}
                        onClick={setIsDropdownOpen}
                    >
                        <MenuDots />
                    </button>
                    {isDropdownOpen && <div id="dropdown" className={commonStyleClasses.dropdown}>
                        <ul className="py-1" aria-labelledby="dropdownButton">
                        <li className={commonStyleClasses.dropdownItem} onClick={setIsBuyModalOpen}>
                            Actions
                        </li>
                        </ul>
                    </div>}
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-8 h-8 rounded-full shadow-lg" src={image} alt={name}/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Current Price: {currentPrice}</span>
                </div>
            </div>
            {isBuyModalOpen && <BuyModal name={name} setIsBuyModalOpen={setIsBuyModalOpen} />}
        </>
    );
}

export default CoinComponentFront;