
export default function Navbar() {
    return (
            <>
                <div className="flex flex-row border-b items-center justify-around text-gray-600 text-lg">
                    <div className=" ">
                        <h1 className="text-2xl font-bold  font-serif ">
                            <a href='/'>Andi's Food</a>
                        </h1>
                    </div>
                    <ul className="flex   ">
                        <li className="m-1">
                            <a href="#">
                                <span className="text-base hover:font-bold">Home</span>
                            </a>
                        </li>
                        <li className="m-1">
                            <a href="#">
                                <span className="text-base hover:font-bold">About</span>
                            </a>
                        </li>
                        <li className="m-1">
                            <a href="#">
                                <span className="text-base hover:font-bold ">Contact</span>
                            </a>
                        </li>
                        <li  className="border-l pl-3 m-1 ">
                            <a href='#' className="text-red-400 mr-2 hover:font-bold">Log in</a>
                        </li>
                       <li  className="m-1">
                            <a href='#' className="text-red-400 mr-2 hover:font-bold">Sign in</a>
                        </li>
                    </ul>
                </div>
        </>
    )
}