export default function BuyExtraHours() {
    return (
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <div className="sm:flex sm:items-start sm:justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Dokup ur</h3>
                        <div className="mt-2 max-w-xl text-sm text-gray-500">
                            <p>
                                Še potrebujete dodatne ure? Kupite jih lahko preko spleta. Prikazal se vam bo račun, katerega lahko plačate z mobilno banko.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                        >
                            Kupi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}