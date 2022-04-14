import {useState, useEffect} from 'react';
import {CoinInterface} from './models/coin.model';
import {Caret} from "../assets/svgs";
import CoinComponent from "../components/CoinComponent/CoinComponent";
import Error from '../components/Error';
import Loader from '../components/Loader';
import { commonStyleClasses } from "../utils/styles";
import {useFetch} from '../hooks/useFetch';
import {useToggle} from '../hooks/useToggle';
import {useCachedData} from '../hooks/useCachedData';

const CURRENCIES_URL = 'simple/supported_vs_currencies';
const MARKETS_URL = 'coins/markets?vs_currency=';

const Coins = () => {
    const [currenciesData, isCurrenciesLoading, currenciesError, getCurrencesData] = useCachedData('currencies');
    const [coinsData, isCoinsDataLoading, coinsDataError, getCoinsData] = useFetch();
    const [isCurrenciedDropdownOpen, setIsCurrenciedDropdownOpen] = useToggle();
    const [targetCurrency, setTargetCurrency] = useState('usd');

    const isCurrenciesDropdownDisabled = isCurrenciesLoading || !!currenciesError;

    useEffect(() => {
        getCurrencesData(CURRENCIES_URL);
    }, [getCurrencesData]);

    useEffect(() => {
        getCoinsData(`${MARKETS_URL}${targetCurrency}`);
    }, [targetCurrency, getCoinsData])

    return (
        <div className={commonStyleClasses.wrapper}>
            <div className="relative">
                <button
                    type="button"
                    disabled={isCurrenciesDropdownDisabled}
                    className={isCurrenciesDropdownDisabled ? commonStyleClasses.outlineBUttonWithIconDisabled : commonStyleClasses.outlineButtonWithIcon}
                    onClick={() => setIsCurrenciedDropdownOpen()}
                >
                    Choose currency
                    <Caret />
                </button>
                {isCurrenciedDropdownOpen && <div className={commonStyleClasses.dropdown}>
                    <ul className="py-1 text-sm h-60 overflow-auto text-gray-700 dark:text-gray-200">
                        {currenciesData && currenciesData.map((supportedCurrency: string, idx: number) =>
                            <li 
                                key={idx} 
                                className={commonStyleClasses.dropdownItem}
                                onClick={() => setTargetCurrency(supportedCurrency)}
                            >
                                    {supportedCurrency}
                            </li>
                        )}
                    </ul>
                </div>}
            </div>
            {isCoinsDataLoading && <Loader />}
            {!!coinsDataError && <Error error={coinsDataError}/>}
            {coinsData && coinsData.length && coinsData.map(({id, name, image, current_price, }: CoinInterface) => (
                <CoinComponent
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    currentPrice={current_price}
                />
            ))}
        </div>
    )
};

export default Coins;
