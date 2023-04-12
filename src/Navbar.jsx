
export default function Navbar() {
    return (
            <>
            <div className="text-gray-600 text-lg">
                <div className="flex flex-row border-b items-center justify-around">
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



            <div className="flex m-5">
                <div className="basis-1/5">
                    <h2 className="font-bold text-4xl">Recipes</h2>
                    <h3 className="italic text-xl">By Andi</h3>
                </div>

                <div className="basis-1/2">
                    <h4 className="font-semibold">Latest Recipes</h4>
                    <div> 
                        <div> 
                            <img src='./assets/img1.jpg' width={400} alt="" />
                            <div>
                                <span>5 Bean chili Sous</span>
                                <span>Recipe by Andi</span>
                            </div>
                        </div>
                    </div>



                    <div>
                    <h4 className="font-semibold">Most Popular Recipes</h4>
                    <div> 
                        <div> 
                            <img src='./assets/img2.jpg' alt="" width={400}/>
                            <div>
                                <span>3 Beans Steak</span>
                                <span>Recipe by Andi</span>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div>
                        <div>Load More!</div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}