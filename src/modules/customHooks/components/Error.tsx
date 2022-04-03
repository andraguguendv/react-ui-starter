import {ErrorInterface} from './models/error.model';

const Error = ({error}: ErrorInterface) => {
    return (
        <div>
            {error}
        </div>
    );
};

export default Error;