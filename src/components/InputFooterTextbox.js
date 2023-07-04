import React,{useState} from 'react'
import inputfootericon1 from '../assets/icons/paperclip_Icon.png';
import inputfootericon2 from '../assets/icons/Frame44_Icon.png';
import camera from '../assets/icons/AttachmentsClick_Icon.png';
import video from '../assets/icons/AttachmentsClick_Icon_1.png';
import docs from '../assets/icons/Document_Icon.png';
const InputFooterTextbox = () => {

    const [showDiv, setShowDiv] = useState(false);

    const handleButtonClick = () => {
      setShowDiv(!showDiv);
    };
  

    return (
        <div className=" duration-500 rounded-lg flex items-center shadow-md px-4 py-1 my-3 fixed left-0 right-0 bottom-3 mx-4 bg-white ">
            <div className="flex items-start flex-1">
                <input
                    type="text"
                    className=" px-3 py-2 border w-full border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 border-none"
                    placeholder="Reply to @Rohit Yadav"
                />



            </div>

            <div className="ml-4 cursor-pointer" >

            {showDiv && 


                <div className='flex transition-transform justify-around absolute right-1 items-center bottom-12 w-40 h-12 rounded-3xl bg-green-600'>
               
                <div className=" mx-1 pl-2">
                <img src={camera} className=" h-5 w-4.5" alt="Icon" />
                </div>
                <div className=" mx-1">
                <img src={video} className="h-4 w-4.5" alt="Icon" />
                </div>
                <div className=" mx-1 mr-2">
                <img src={docs} className="  h-5 w-5 " alt="Icon" />
                </div>               
                
                <div className=" absolute top-9 left-24 bg-green-600 w-4 h-4 border-t-4 border-r-4 border-transparent transform -rotate-45"> </div>
                </div>

            }
            <div className="ml-4 cursor-pointer" onClick={handleButtonClick}>
                <img src={inputfootericon1} className="h-5 w-5" alt="Icon"  />
            </div>
            </div>

            <div className="ml-4 cursor-pointer">
                <img src={inputfootericon2} className="h-5 w-5" alt="Icon" />
            </div>


        </div>


    )
}

export default InputFooterTextbox
