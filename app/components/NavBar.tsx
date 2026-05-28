import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-bold text-lg">Unit Conversions</span>
                </div>

                <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/weightConversion" className="hover:text-blue-600 transition-colors font-bold">Weight</Link>
                    <Link href="/distanceConversion" className="hover:text-blue-600 transition-colors font-bold">Distance</Link>
                    <Link href="/temperatureConversion" className="hover:text-blue-600 transition-colors font-bold">Temperature</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar