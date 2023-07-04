import React, { useState, useEffect } from 'react';
import axios from 'axios';
import userimage from '../assets/images/Component2_Rectangle_12_1.png';
import verified_icon from '../assets/icons/vtick.png';
import { useGlobalContext } from '../context';
import InfiniteScroll from 'react-infinite-scroll-component';

const TextMsg = () => {
  const { chats, setChats, dispatch } = useGlobalContext();
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    try {
      const response = await axios.get(
        'https://qa.corider.in/assignment/chat'
      );
      const jsonData = response.data;
      const newChats = jsonData.chats.slice(
        chats.length,
        chats.length + 4 // Load 4 more chats
      );
      if (newChats.length === 0) {
        setHasMore(false); // No more chats to load
      } else {
        setChats([...chats, ...newChats]); // Append new chats to the existing chats array
        console.log(chats);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={chats.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p style={{ textAlign: 'center' }}>No more chats to load.</p>}
    >
    {chats.map((chat) => (
        <div className="flex text-left mx-4 my-4" key={chat.id}>
          <div className="flex items-center justify-between align-top">
            <div className="w-12 h-12">
              <img
                src={chat.sender.image}
                alt="Rectangle 12"
                className="w-full h-full rounded-3xl cursor-pointer"
              />
              {chat.sender.is_kyc_verified && (
                <img
                  src={verified_icon}
                  alt="Solid"
                  className="w-4 h-4 absolute left-12 -mt-3"
                />
              )}
            </div>
          </div>
          <div className="mt-2 bg-white shadow-md rounded-r-lg rounded-bl-lg  flex relative isolation-isolate flex-col justify-center items-center p-2 box-border ml-2 w-[287px]">
            <p className="text-sm text-gray-600">{chat.message}</p>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default TextMsg;
