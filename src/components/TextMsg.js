import React,{useState} from 'react'
import axios from 'axios'
import userimage from '../assets/images/Component2_Rectangle_12_1.png'
import verified_icon from '../assets/icons/vtick.png'
import { useGlobalContext } from '../context'
import InfiniteScroll from 'react-infinite-scroll-component'
const TextMsg = () => {

    const { chats, setChats, dispatch } = useGlobalContext();
    const [hasMore, setHasMore] = useState(true);
    const fetchMoreData = () => {
        setTimeout(async () => {
          try {
            const response = await axios.get('https://qa.corider.in/assignment/chat');
            const jsonData = response.data;
            dispatch({
              type: 'get_chats',
              payload: {
                chats: jsonData.chats.slice(0, 4), // Fetch only 4 chats from API response
                from: jsonData.from,
                message: jsonData.message,
                name: jsonData.name,
                status: jsonData.status,
                to: jsonData.to,
              },
            });
          } catch (error) {
            console.log('Error:', error);
          }
        }, 1000);
      };
      


    return (
        <InfiniteScroll
         dataLength={chats.length}
         next={fetchMoreData}
         hasMore={true}
         loader={<h4>Loading...</h4>}
         endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
         
        >
        {chats.map((chat) => (
        <div className='flex text-left mx-4 my-4' key={chat.id}>
            <div className="flex items-center justify-between align-top">
                <div className="w-12 h-12 ">
                    <img src={chat.sender.image} alt="Rectangle 12" className="w-full h-full rounded-3xl" />
                    {chat.sender.is_kyc_verified ? <img src={verified_icon} alt="Solid" className="w-4 h-4 absolute left-12 -mt-3" /> : ''}       
                </div>

            </div>
            <div className="mt-2 bg-white shadow-md rounded-r-lg rounded-bl-lg  flex relative isolation-isolate flex-col justify-center items-center p-2 box-border ml-2 w-[287px]">
                <p className="text-sm text-gray-600">
                {chat.message}
                </p>
            </div>
            </div>
            ))}


        </InfiniteScroll>
    )
}

export default TextMsg
