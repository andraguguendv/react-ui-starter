import { Spinner } from "../assets/svgs";

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <Spinner />
        </div>
    );
};

export default Loader;