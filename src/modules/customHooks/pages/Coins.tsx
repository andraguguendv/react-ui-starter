import {CoinInterface} from './models/coin.model';
import {Caret} from "../assets/svgs";
import CoinComponent from "../components/CoinComponent/CoinComponent";
import Error from '../components/Error';
import Loader from '../components/Loader';
import { axiosExternal } from '../../../api/axios';
import { commonStyleClasses } from "../utils/styles";

const CURRENCIES_URL = 'simple/supported_vs_currencies';
const MARKETS_URL = 'coins/markets?vs_currency=';

const Coins = () => {
    return (
        <div className={commonStyleClasses.wrapper}>
            <div className="relative">
                {/* 
                    currencies dropdown 
                */}
            </div>
            {/* all available coins listed */}
        </div>
    )
};

export default Coins;
