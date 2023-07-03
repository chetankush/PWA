import React from 'react'
import line1 from '../assets/icons/Component1_Vector_14.png'
import line2 from '../assets/icons/Component1_Vector_14.png'
const ChatTiming = () => {
    return (
        <div className="flex justify-center my-4 p-2 w-full h-4 text-center items-center">
        <img src={line1} className="w-32 h-1 max-w-xs text-gray-600" alt="Vector 14" />
        <p className="text-basic text-gray-500 px-4 sm:px-8 md:px-12 lg:px-16">12 JAN, 2023</p>
        <img src={line1} className="w-32 h-1 max-w-xs text-gray-600" alt="Vector 14" />
      </div>
      
    )
}

export default ChatTiming
