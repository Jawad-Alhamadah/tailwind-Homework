import React from "react";

function ExpandedNav(props) {
  return (
    <div className="w-screen h-screen z-50 fixed top-0 bg-white duration-500 " 
    style={{display:props.display}}
    >
     <i class=" hover:bg-black hover:cursor-pointer hover:text-white flex justify-center items-center duration-300 fa-solid fa-xmark fixed top-0 right-0 size-14 border-2 border-black"
     onClick={()=>props.SetExpand("none")}
     ></i>
      
      <div className="border-spacing-3 mt-16">
        <div className="hover:text-coffeeBrown hover:cursor-pointer text-3xl h-[3em] flex flex-col items-center justify-center align-middle mt-25">HOME</div>
        <div className="hover:text-coffeeBrown hover:cursor-pointer text-3xl h-[3em] flex flex-col items-center justify-center align-middle">ABOUT</div>
        <div className="hover:text-coffeeBrown hover:cursor-pointer text-3xl h-[3em] flex flex-col items-center justify-center align-middle">REVIEWS</div>
        <div className="hover:text-coffeeBrown hover:cursor-pointer text-3xl h-[3em] flex flex-col items-center justify-center align-middle">VIDEOS</div>
        <div className="hover:text-coffeeBrown hover:cursor-pointer text-3xl h-[3em] flex flex-col items-center justify-center align-middle">CONTACT</div>
      </div>
    </div>
  );
}

export default ExpandedNav;
