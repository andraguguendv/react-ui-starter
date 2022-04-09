import CoinComponentBack from "./CoinComponentBack";
import CoinComponentFront from "./CoinComponentFront";
import {CoinComponentProps} from './coinComponent.model';

const coinComponentStyles = {
    wrapper: 'w-full bg-transparent my-2',
    card: 'relative w-full h-full'
}
const COIN_DATA_URL = 'coins/';

const CoinComponent = () => {
    return (
        <div className={coinComponentStyles.wrapper} style={{perspective: '1000px', height: '200px'}}>
            <div
                className={coinComponentStyles.card}
                style={{transition: 'transform 0.8s', transformStyle: 'preserve-3d', transform: false ? 'rotateY(180deg)' : ''}}
            >
                <CoinComponentFront />
                <CoinComponentBack />
            </div>
        </div>
    );
};

export default CoinComponent;
