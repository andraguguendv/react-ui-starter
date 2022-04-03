import { LeftArrow } from '../../assets/svgs';
import { commonStyleClasses } from '../../utils/styles';
import {CoinComponentBackProps} from './coinComponent.model';

const CoinComponentBack = ({coinDescription, setIsFlipped}: CoinComponentBackProps) => {
    return (
        <div
            className='flip-card-back absolute w-full h-full bg-white border rounded-lg overflow-y-scroll dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}
        >
            <div className="flex justify-end px-4 pt-4">
                <button 
                    className={commonStyleClasses.iconButton}
                    onClick={setIsFlipped}
                >
                    <LeftArrow />
                </button>
            </div>
            <div className="text-center px-4 font-mono dark:text-white">
                <p dangerouslySetInnerHTML={{__html: coinDescription}} />
            </div>
        </div>
    )
}

export default CoinComponentBack;