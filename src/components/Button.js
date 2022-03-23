/* This example requires Tailwind CSS v2.0+ */
import { ChatIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'

export default function Button() {
    return (
        <>
            < button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <PhoneIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Pokliči inštruktorja
            </button >
            <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <ChatIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Pošlji sporočilo
            </button>
            <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <MailIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Pošlji email
            </button>
        </>
    )
}