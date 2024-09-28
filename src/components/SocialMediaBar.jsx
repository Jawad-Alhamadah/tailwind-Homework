import React from 'react'

function SocialMediaBar(props) {
 
  return (
    <ul className="flex gap-8">
    <li className="">
        <i
            className={
                `fa-brands fa-youtube text-lg  opacity-70 hover:opacity-100 hover:cursor-pointer`
            }
            style={{color:props.color}}
            
        ></i>
    </li>
    <li className="">
        <i
            className={
                `fa-brands fa-instagram text-lg  opacity-70 hover:opacity-100 hover:cursor-pointer`
            }
            style={{color:props.color}}
        ></i>
    </li>
    <li className="">
        <i
            className={
                `fa-brands fa-facebook text-lg  opacity-70 hover:opacity-100 hover:cursor-pointer`
            }
            style={{color:props.color}}
        ></i>
    </li>
</ul>
  )
}

export default SocialMediaBar
