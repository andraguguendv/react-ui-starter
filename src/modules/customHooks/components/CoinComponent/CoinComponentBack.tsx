import { LeftArrow } from '../../assets/svgs';
import {CoinComponentBackProps} from './coinComponent.model';

const coinComponentBackStyles = {
    card: 'absolute w-full h-full bg-white border rounded-lg overflow-y-scroll dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
}

const CoinComponentBack = () => {
    return (
        <div
            className={coinComponentBackStyles.card}
            style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}
        >
            <div className="flex justify-end px-4 pt-4">
                {/* back button */}
            </div>
            <div className="text-center px-4 font-mono dark:text-white">
                {/* coin description */}
                <p></p>
            </div>
        </div>
    )
}

export default CoinComponentBack;