import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa"

const NavbarComponent = () => {
    return (
        <nav className="bg-gray-900 py-3 flex justify-between w-full">
            <div className="flex items-center text-xl">
                <span className="text-white-500 font-semibold ml-5">Quick Serve Management</span>
            </div>
            <div className="flex items-center gap-x-5">
                <div className="relative md:w-65">
                    <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                        <button className="p-1 focus:out-line-none text-white md:text-black">
                            <FaSearch />
                        </button>
                    </span>
                    <input type="text"
                        placeholder="Search"
                        className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
                    />
                </div>
                <div className="relative">
                    <button className="text-white-500 group">
                        <FaUserCircle className="w-6 h-6 mt-1 mr-6" />
                        <div className="z-10 text-left hidden absolute rounded-lg text-back shadow w-32 group-focus:block right-0 top-full">
                            <ul className="text-base text-gray-950 gap-4 p-4">
                                <li className="hover:bg-orange-500 rounded-md">
                                    <a href="">Hồ sơ</a>
                                </li>
                                <li className="mt-2 hover:bg-orange-500 rounded-md">
                                    <a href="">Đăng xuất</a>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default NavbarComponent
