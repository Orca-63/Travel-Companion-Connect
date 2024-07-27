import logo from '../assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    const isActiveChecker = ({ isActive }) => {
        return isActive ? 'bg-blue-800 text-white font-bold hover:bg-blue-800 hover:text-white font-bold rounded-md px-3 py-2 mt-2'
            : 'text-blue-800 font-bold hover:bg-blue-800 hover:text-white font-bold rounded-md px-3 py-2 mt-2';

    }
    return (<>
        <nav className="bg-blue-100 ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img
                                className="h-10 w-auto"
                                src={logo}
                                alt="Travel Companion Connect"
                                style={{
                                    width: "4.5rem",
                                    height: "4rem",
                                    borderRadius: "5px"
                                }}
                            />
                            <span className="hidden md:block text-blue-800 text-2xl font-bold ml-2">
                                Travel Companion Connect
                            </span>
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink
                                    to="/"
                                    className={isActiveChecker}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/BrowseTravelPlans"
                                    className={isActiveChecker}
                                >
                                    Browse Travel Plans
                                </NavLink>
                                <NavLink
                                    to="/AddPlace"
                                    className={isActiveChecker}
                                >
                                    Add Travel Plans
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

