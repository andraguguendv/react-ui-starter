import { useState, useEffect } from "react";
import CoinComponentBack from "./CoinComponentBack";
import CoinComponentFront from "./CoinComponentFront";
import {CoinComponentProps} from './coinComponent.model';
import {useCachedData} from '../../hooks/useCachedData';
import {useToggle} from '../../hooks/useToggle';

const coinComponentStyles = {
    wrapper: 'w-full bg-transparent my-2',
    card: 'relative w-full h-full'
}
const COIN_DATA_URL = 'coins/';

const CoinComponent = ({id, name, image, currentPrice}: CoinComponentProps) => {
    const [coinData, isCoinDataLoading, coinDataError, getCoinData] = useCachedData(id, 'description.en');
    const [isFlipped, setIsFlipped] = useToggle();

    useEffect(() => {
        if (isFlipped) {
            getCoinData(`${COIN_DATA_URL}${id}`)
        }
    }, [isFlipped]);

    return (
        <div className={coinComponentStyles.wrapper} style={{perspective: '1000px', height: '200px'}}>
            <div
                className={coinComponentStyles.card}
                style={{transition: 'transform 0.8s', transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : ''}}
            >
                <CoinComponentFront 
                    name={name}
                    image={image}
                    currentPrice={currentPrice}
                    setIsFlipped={() => setIsFlipped(true)}
                />
                <CoinComponentBack
                    name={name}
                    coinData={coinData}
                    isCoinDataLoading={isCoinDataLoading}
                    coinDataError={coinDataError}
                    setIsFlipped={() => setIsFlipped(false)}
                />
            </div>
        </div>
    );
};

export default CoinComponent;
