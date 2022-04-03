import {useState, useEffect} from 'react';
import {Caret} from "../assets/svgs";
import Loader from '../components/Loader';
import CoinComponent from '../components/CoinComponent/CoinComponent';
import Error from '../components/Error';
import { useFetch } from '../hooks/useFetch';
import { useCachedData } from '../hooks/useCachedData';
import { useToggle } from '../hooks/useToggle';
import {commonStyleClasses} from '../utils/styles';
import {cachedData} from '../utils/cache';

const CURRENCIES_URL = 'simple/supported_vs_currencies';
const MARKETS_URL = 'coins/markets?vs_currency=';

const Coins = () => {
	const [targetCurrency, setTargetCurrency] = useState('usd');
    const [currenciesData, currenciesError, fetchCurrenciesData] = useCachedData(cachedData, 'currencies');
    const [coinsData, error, fetchCoinsData] = useFetch();
    const [isCurrenciesDropdownOpen, setIsCurrenciesDropdownOpen, currenciesDorpdownRef] = useToggle<HTMLDivElement>();
    
    useEffect(() => {
        if (targetCurrency) {
            fetchCoinsData(`${MARKETS_URL}${targetCurrency}`)
        }
    }, [targetCurrency, fetchCoinsData]);

    useEffect(() => {
        fetchCurrenciesData('currencies', CURRENCIES_URL);
	}, []);

	if (error) return <Error error={error} />
    if (!coinsData?.length) return <Loader />

    return (
        <div className={commonStyleClasses.wrapper}>
			<div className="relative" ref={currenciesDorpdownRef}>
				<button
                    type="button"
                    disabled={currenciesError}
                    className={!currenciesError ? commonStyleClasses.outlineButtonWithIcon : commonStyleClasses.outlineBUttonWithIconDisabled}
                    onClick={setIsCurrenciesDropdownOpen}
                >
                    Choose currency
                    <Caret />
                </button>
				{isCurrenciesDropdownOpen && <div className={commonStyleClasses.dropdown}>
					<ul className="py-1 text-sm h-60 overflow-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
						{
                            currenciesData && currenciesData.length && currenciesData.map((supportedCurrency: string, i: number) => <li key={i} className={commonStyleClasses.dropdownItem} onClick={() => setTargetCurrency(supportedCurrency)}>{supportedCurrency}</li>)
                        }
					</ul>
				</div>}
			</div>
            {coinsData.map((coin: any) => <CoinComponent key={coin.id} id={coin.id} image={coin.image} name={coin.name} currentPrice={coin.current_price} />)}
		</div>
    );
};

export default Coins;