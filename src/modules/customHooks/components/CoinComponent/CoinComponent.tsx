import { useEffect} from 'react';
import { useToggle } from '../../hooks/useToggle';
// import {useFetch} from '../../customHooks/useFetch';
import {useCachedData} from '../../hooks/useCachedData';
import {CoinComponentProps} from './coinComponent.model';
import CoinComponentFront from './CoinComponentFront';
import CoinComponentBack from './CoinComponentBack';
import {cachedData} from '../../utils/cache';
import { axiosExternal } from '../../../../api/axios';

const CoinComponent = ({id, image, name, currentPrice}: CoinComponentProps) => {
    const [isFlipped, setIsFlipped] = useToggle();
    // const [coinDescription, setCoinDescription] = useState(''); [1]
    // const [coinData, error, fetchCoinData] = useFetch(); [2]

    const [data, error, getData] = useCachedData(cachedData, 'description.en');
    // console.log({data, error, cachedData})
    // useEffect(() => {
    //     if (isFlipped) {
    //         if (cachedData && cachedData[id]) {
    //             setCoinDescription(cachedData[id]);
    //             return;
    //         }
    //         // [1]
    //         window.fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then(async (response) => {
    //             const data = await response.json();
    //             const description = data.description.en || `Currently we do not have any information on ${name}.`
    //             cachedData[id] = description;

    //             setCoinDescription(description);
    //         })

    //         // [2]
    //         fetchCoinData(`https://api.coingecko.com/api/v3/coins/${id}`);

    //     }
    // }, [isFlipped]);
    
    useEffect(() => {
        if (isFlipped) {
            getData(id, `coins/${id}`)
        }
    }, [isFlipped]);

    return (
        <div style={{perspective: '1000px', height: '200px'}} className="flip-card w-full bg-transparent my-2">
            <div className='flip-card-inner relative w-full h-full' style={{transition: 'transform 0.8s', transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : ''}}>
                <CoinComponentFront image={image} name={name} currentPrice={currentPrice} setIsFlipped={setIsFlipped}/>
                <CoinComponentBack coinDescription={data || error} setIsFlipped={setIsFlipped} />
            </div>
        </div>
    );
};

export default CoinComponent;