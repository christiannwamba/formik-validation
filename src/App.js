import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

function TextInput({ label, name, errorMessage, type = 'text', ...rest }) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          type={type}
          name={name}
          id={name}
          className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
          {...rest}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        {errorMessage}
      </p>
    </>
  );
}

function URLInput({ label, name, errorMessage, type = 'text', prefix, ...rest }) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm relative">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
          {prefix}
        </span>
        <input
          type={type}
          name={name}
          id={name}
          className="flex-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
          {...rest}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        {errorMessage}
      </p>
    </>
  );
}

function App() {

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <main className="w-1/2 mx-auto py-24 bg-white shadow overflow-hidden sm:rounded-lg p-20">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Join the List
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            We have a long queue of excited folks like you, but we want you
            onboard as well.
          </p>
        </div>
        <form>
          <div>
            <div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <TextInput
                    label="First name"
                    name="firstName"
                    type="text"
                    errorMessage="Your password must be less than 4 characters."
                  />
                </div>

                <div className="sm:col-span-3">
                  <TextInput
                    label="Last name"
                    name="lastName"
                    type="text"
                    errorMessage="Your password must be less than 4 characters."
                  />
                </div>

                <div className="sm:col-span-3">
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    errorMessage="Your password must be less than 4 characters."
                  />
                </div>

                <div className="sm:col-span-3">
                  <TextInput
                    label="Password"
                    name="password"
                    type="password"
                    errorMessage="Your password must be less than 4 characters."
                  />
                </div>

                <div className="sm:col-span-3">
                  <URLInput
                    label="Twitter handle"
                    name="twitter"
                    prefix="https://twitter.com/"
                    errorMessage="Your password must be less than 4 characters."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
