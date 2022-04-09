import { Field, Form, Formik } from 'formik';
import { Close } from '../assets/svgs';
import { commonStyleClasses } from '../utils/styles';
import { BuyModalInterface } from './models/buy-modal.model';
import ReactPortal from './ReactPortal';

const modalStyles = {
    backdrop: 'overflow-y-auto overflow-x-hidden backdrop-blur-sm fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full',
    wrapper: "absolute top-0 bottom-0 left-0 right-0 m-auto p-4 w-full max-w-md h-80",
    modal: 'relative bg-white rounded-lg shadow dark:bg-gray-700',
    header: "flex justify-between items-center py-4 px-6 rounded-t border-b dark:border-gray-600",
    title: "text-base font-semibold text-gray-900 lg:text-xl dark:text-white",
    label: "text-sm font-semibold text-gray-700 dark:text-white",
    field: "block my-2 p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500",
    submit: "text-white bg-gradient-to-br from-purple-600 to-blue-500 my-2 w-full hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
}


const BuyModal = ({name, setIsBuyModalOpen}: BuyModalInterface) => {
    return (
        <ReactPortal>
            <div className={modalStyles.backdrop}>
                <div className={modalStyles.wrapper}>
                    <div className={modalStyles.modal}>
                        <div className={modalStyles.header}>
                            <h3 className={modalStyles.title}>
                                Buy {name}
                            </h3>
                            <button type="button" className={commonStyleClasses.iconButton} onClick={setIsBuyModalOpen}>
                                <Close /> 
                            </button>
                        </div>
                        <Formik
                            initialValues={{ammount: 0}}
                            onSubmit={() => {}}
                        >
                            <Form className="p-4">
                                <div className="mb-2">
                                    <div className="mb-1">
                                        <label className={modalStyles.label}>Ammount</label>
                                    </div>
                                    <Field
                                        className={modalStyles.field}
                                        placeholder="Ammount"
                                        ariaLabel="Ammount"
                                        name="ammount"
                                        type="number"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className={modalStyles.submit}
                                    >
                                        Buy
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </ReactPortal>
    )
}

export default BuyModal;