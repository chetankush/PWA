import React from 'react';
import Frame from '../assets/icons/Frame81_Icon.png';
import Back_Icon from '../assets/icons/Back_Icon.png';
import Edit_Icon from '../assets/icons/edit05_Icon.png';
import User1 from '../assets/images/Component2_Rectangle_12_1.png'
import User2 from '../assets/images/Frame77_Rectangle_12.png'
import User3 from '../assets/images/Frame78_Rectangle_12.png'
import User4 from '../assets/images/Frame81_Rectangle_14.png'
import { useGlobalContext } from '../context'


function Header() {
  
  const { from, to, name } = useGlobalContext();
 

  return (

    <div className="w-full bg-appbody h-130 flex flex-col items-center justify-center sticky top-0 z-50 border-b border-gray-300 border-1">
      <div className="w-full pt-5 px-4  flex justify-between items-center text-center">
        <img src={Back_Icon} alt="back_icon" className="w-5 h-5" />
        <div className="flex justify-start flex-grow">
          <div className=" p-2 text-3xl font-bold">{name}</div>
        </div>
        <img src={Edit_Icon} alt="edit_icon" className="w-5 h-5" />
      </div>

      <div className="w-full py-5 px-4 text-center flex justify-center items-center">

        <div className="relative w-12 h-12 bg-white border border-gray-400 rounded-full overflow-hidden">
          <div className="absolute w-6 h-6 bg-black border border-gray-400 top-0 left-0"><img src={User1} alt="user1" /></div>
          <div className="absolute w-6 h-6 bg-black border border-gray-400 bottom-0 left-0"><img src={User2} alt="user2" /></div>
          <div className="absolute w-6 h-6 bg-black border border-gray-400 top-6 left-6"><img src={User3} alt="user3" /></div>
          <div className="absolute w-6 h-6 bg-black border border-gray-400 bottom-6 left-6"><img src={User4} alt="user4" /></div>
        </div>


        <div className="flex flex-col justify-start flex-grow ml-4 ">
          <div className="flex">
            <div className="text-gray-600 font-medium">From</div>
            <div className="font-bold pl-1">{from}</div>
          </div>

          <div className="flex">
            <div className="text-gray-600 font-medium">To</div>
            <div className="font-bold pl-1">{to}</div>
          </div>
        </div>

        <div className="flex text-right p-2">
          <img src={Frame} alt="edit_icon" className="h-6" />
        </div>
      </div>

    </div>

  );
}

export default Header;

