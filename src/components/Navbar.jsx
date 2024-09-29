import React from "react";
import SocialMediaBar from "./SocialMediaBar";
import { Link } from "react-router-dom";
function Navbar(props) {


    return (
        <nav className="flex mt-4 ">
            <div className="w-[60%] max-md:w-[60%]  max-sm:w-[70%] flex">
                <ul className="text-[0.8em] font-bold gap-9 flex items-center">
                    <li>
                        <img
                            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
                            alt="website logo DA"
                        />
                    </li>

                    <Link to="/">
                    <li className="text-coffeeBrown max-lg:hidden">HOME</li>
                    </Link>
                   
                    
                    <Link to="/about">
                    <li className="max-lg:hidden">ABOUT</li>
                    </Link>

    
                    <li className="max-lg:hidden">REVIEWS</li>
                    <li className="max-lg:hidden">VIDEOS</li>
                    <Link to="/contact">
                    <li className="max-lg:hidden">CONTACT</li>
                    </Link>
                    
                </ul>
            </div>
            <div className="max-md:w-[40%] w-[40%]  max-sm:w-[30%] flex justify-end  md:justify-end">
                <ul className="flex py-7 gap-8">
                    <li>
                        <div className=" lg:hidden  hover:bg-[#e2a996] hover:cursor-pointer bg-[#be7c68] size-14 text-2xl text-white rounded-full before:content-['\f0c9'] font-[FontAwesome] flex justify-center items-center "
                        onClick={()=>props.SetExpand("block")}
                        ></div>
                    </li>
                    <li className="max-lg:hidden">
                        <SocialMediaBar color="#ffffff"/>
                    </li>

                    <li className="max-lg:hidden">
                        <button className="duration-500 hover:text-black hover:bg-white tracking-widest font-bold max-lg:hidden border-[1px] text-[0.7em] border-white text-white py-2 px-5 font-[Montserrat,sans-serif]">
                            LET'S TALK
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
