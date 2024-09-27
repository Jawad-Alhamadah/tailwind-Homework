import React from 'react'

function SecondaryButton(props) {
  return (
    <button className=' duration-500 hover:bg-coffeeBrown hover:text-white tracking-widest text-sm text-coffeeBrown font-[Montserrat] font-semibold bg-transparent outline-coffeeBrown outline-1 outline px-5 py-3'>
      {props.text}
    </button>
  )
}

export default SecondaryButton
