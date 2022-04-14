import { useState } from 'react';
import { Academic, MenuDots } from '../../assets/svgs';
import { commonStyleClasses } from '../../utils/styles';
import {CoinComponentFrontProps} from './coinComponent.model';
import {useToggle} from '../../hooks/useToggle';

const coinComponentFrontStyles = {
    card: 'absolute w-full h-full bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700',
    image: 'mb-3 w-8 h-8 rounded-full shadow-lg',
    name: 'mb-1 text-xl font-medium text-gray-900 dark:text-white',
    price: 'text-sm text-gray-500 dark:text-gray-400'
}

const CoinComponentFront = ({name, image, currentPrice, setIsFlipped}: CoinComponentFrontProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useToggle(false);
    return (
        <div className={coinComponentFrontStyles.card} style={{backfaceVisibility: 'hidden'}}>
            <div className="flex justify-end px-4 pt-4">
                <button
                    type="button"
                    className={commonStyleClasses.iconButton}
                    onClick={setIsFlipped}
                >
                    <Academic />
                </button>
                <button
                    type="button"
                    className={commonStyleClasses.iconButton}
                    onClick={() => setIsDropdownOpen()}
                >
                    <MenuDots />
                </button>
                {isDropdownOpen && <div className={commonStyleClasses.dropdown}>
                    <ul>
                        <li className={commonStyleClasses.dropdownItem}>Actions</li>
                    </ul>
                </div>}
                {/* 
                    flip coin button
                    open menu button
                */}
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className={coinComponentFrontStyles.image} src={image} alt={name} />
                <h5 className={coinComponentFrontStyles.name}>{name}</h5>
                <span className={coinComponentFrontStyles.price}>Current Price: {currentPrice}</span>
            </div>
        </div>
    );
}

export default CoinComponentFront;
