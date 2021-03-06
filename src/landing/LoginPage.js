import Axios from 'axios';
import { useState } from 'react';

export default function Login() {
    const url = "http://localhost:3500/api/users/login"

    const [data, setData] = useState({
        username: "",
        password: "",
    })

    function submit(e) {
        e.preventDefault()
        Axios.post(url, {
            username: data.username,
            password: data.password
        }).then(res => {
            console.log(res.data)
        })
    }

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">eAvtoŠola</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Preizkusite brezpolačno za 1 mesec
                        </a>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={(e) => submit(e)} className="space-y-6" action="http://localhost:3500/api/users/login" method="POST">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Uporabniško ime
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <div className="max-w-lg flex rounded-md shadow-sm">
                                        <span className="inline-flex py-2 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                            eAvto
                                        </span>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={data.username}
                                            onChange={(e) => handle(e)}
                                            autoComplete="username"
                                            className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Geslo
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="password"
                                        type="password"
                                        id="password"
                                        value={data.password}
                                        onChange={(e) => handle(e)}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Zapomni si me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="/forgot" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Pozabljeno geslo?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Prijava
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}