import { LeftArrow } from '../../assets/svgs';
import {CoinComponentBackProps} from './coinComponent.model';
import { commonStyleClasses } from '../../utils/styles';
import Loader from '../Loader';
import Error from '../Error';

const coinComponentBackStyles = {
    card: 'absolute w-full h-full bg-white border rounded-lg overflow-y-scroll dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
}

const CoinComponentBack = ({coinData, coinDataError, isCoinDataLoading, setIsFlipped}: CoinComponentBackProps) => {
    return (
        <div
            className={coinComponentBackStyles.card}
            style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}
        >
            <div className="flex justify-end px-4 pt-4">
                <button
                    type="button"
                    className={commonStyleClasses.iconButton}
                    onClick={setIsFlipped}
                >
                    <LeftArrow />
                </button>
            </div>
            <div className="text-center px-4 font-mono dark:text-white">
                {/* coin description */}
                {isCoinDataLoading && <Loader />}
                {!!coinDataError && <Error error={coinDataError}/>}
                {coinData && <p dangerouslySetInnerHTML={{__html: coinData}}></p>}
                
            </div>
        </div>
    )
}

export default CoinComponentBack;