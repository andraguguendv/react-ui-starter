import React from 'react';
import {Field, Form, Formik} from 'formik';
import {LoginCredentials} from "./models/login-credentials.model";

const Login = ({submitCredentials}: { submitCredentials: any }) => {
    console.log(submitCredentials);
    return (
        <div className="flex justify-center flex-col items-center h-screen">
            <code className="my-2">Hi there! Log in in your account. :)</code>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values: LoginCredentials) =>
                    submitCredentials(values)
                }

            >
                <Form>
                    <div className="mb-2">
                        <div className="mb-1">
                            <label className="text-sm font-semibold text-gray-700">Email</label>
                        </div>
                        <Field
                            className="block my-2 p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Email"
                            ariaLabel="Email"
                            name="email"
                            type="text"
                        />
                    </div>
                    <div className="mb-2">
                        <div className="mb-1">
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                        </div>
                        <Field
                            className="block my-2 p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Password"
                            ariaLabel="Password"
                            name="password"
                            type="text"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 my-2 w-full hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Enter
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};


export default Login;
