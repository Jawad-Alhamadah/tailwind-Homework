import React from 'react'
import MessageFormInput from './MessageFormInput'
import SecondaryButton from './SecondaryButton'

function SendMessageForm() {
    return (
        <div className='max-md:ml-0 ml-16 flex flex-col justify-center border-[5px] border-gray-200 bg-white mt-10 space-y-5 pb-5 p-2' >
            <div >
                <label htmlFor="name"  className='text-2xl font-bold text-gray-400 ml-2'>Name</label>
                <div className='flex space-x-7 justify-center'>
                    <div className=''>
                      
                       <MessageFormInput label=""></MessageFormInput>
                        <h2>first</h2>
                    </div>
                    <div className=''>
                    <MessageFormInput label=""></MessageFormInput>
                        <h2>last</h2>
                    </div>

                </div>


            </div>
            <div className='p-2'>
                <label htmlFor="" className='text-2xl font-bold text-gray-400'>Email</label>
                <MessageFormInput label=""></MessageFormInput>
            </div>
            <div className='p-2'>
                <label htmlFor="" className='text-2xl font-bold text-gray-400'>Subject</label>
                <MessageFormInput label=""></MessageFormInput>
            </div>
            <div className='p-2 flex flex-col'>
                <label htmlFor="" className='text-2xl font-bold text-gray-400'>Comment</label>
               
                <textarea  rows="4" cols="20" className=' resize-none bg-[#fafafa] border-[1px] border-gray-300'/>
                
            </div>

       
            <SecondaryButton text="Send Message"/>
       
        </div>
    )
}

export default SendMessageForm
