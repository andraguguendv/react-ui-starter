import { Academic, MenuDots } from '../../assets/svgs';
import {CoinComponentFrontProps} from './coinComponent.model';

const coinComponentFrontStyles = {
    card: 'absolute w-full h-full bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700',
    image: 'mb-3 w-8 h-8 rounded-full shadow-lg',
    name: 'mb-1 text-xl font-medium text-gray-900 dark:text-white',
    price: 'text-sm text-gray-500 dark:text-gray-400'
}

const CoinComponentFront = () => {
    return (
        <div className={coinComponentFrontStyles.card} style={{backfaceVisibility: 'hidden'}}>
            <div className="flex justify-end px-4 pt-4">
                {/* 
                    flip coin button
                    open menu button
                */}
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className={coinComponentFrontStyles.image} src='/' alt='Coin Name' />
                <h5 className={coinComponentFrontStyles.name}></h5>
                <span className={coinComponentFrontStyles.price}>Current Price: </span>
            </div>
        </div>
    );
}

export default CoinComponentFront;
