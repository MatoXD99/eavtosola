const stats = [
    { name: 'Skupaj odvožene ure', stat: '5 ur' },
    { name: 'Čas od prvega vpisa', stat: '2 meseca in 13 dni' },
    { name: 'Povp. ocena zadnjih 5 voženj', stat: '4.87' },
]

export default function ControlPanel() {
    return (

        <div>
            {/*<h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>*/}
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 pb-6">
                {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}