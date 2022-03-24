const lessons = [
    { instructor: 'Lindsay Walton', datetime: '13.2.2022 16.00 - 17.00', hours: '1', rate: '2', notes: 'Ne-gledanje vzvratnega ogledala, težka noga' },
    { instructor: 'Lindsay Walton', datetime: '14.2.2022 16.00 - 17.00', hours: '1', rate: '1', notes: 'Zbit pešec, prometna nesreča' },
    { instructor: 'Done Bridgestone', datetime: '18.2.2022 16.00 - 17.00', hours: '2', rate: '3', notes: 'Avtocesta, težka noga, omejitve hitrosti so problem' },
    { instructor: 'Lindsay Walton', datetime: '19.2.2022 16.00 - 17.00', hours: '1', rate: '5', notes: 'Speljevanje z ročno je potrebno še vaditi' },
    { instructor: 'Lindsay Walton', datetime: '14.2.2022 16.00 - 17.00', hours: '1', rate: '1', notes: 'Zbit pešec, prometna nesreča' },
]

export default function DrivenHoursWidget() {
    return (
        <div className="pt-12">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Lista zadnjih 5 voženj, ki jih je kandidat že odvozil. Nove vožnje lahko dodate s klikom na gumb "Dodaj ure vožnje".
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Dodaj ure vožnje
                    </button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Inštruktor
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Datum in ura
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Število odvoženih ur
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Ocena
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Opombe
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Uredi</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {lessons.map((lesson) => (
                                        <tr key={lesson.email}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {lesson.instructor}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lesson.datetime}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lesson.hours}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lesson.rate}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lesson.notes}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Uredi<span className="sr-only">, {lesson.name}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}