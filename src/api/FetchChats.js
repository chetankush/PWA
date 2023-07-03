// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// const FetchChats = () => {

//   const [data, setData] = useState(null);
//   const [chats, setChats] = useState([]);

//   useEffect(() => {
    
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://qa.corider.in/assignment/chat');
//       const jsonData = response.data;
//       setData(jsonData);
//       setChats(jsonData.chats);
//       console.log(jsonData.chats)
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };
    
//   return () => fetchData();
//   }, []);

 

//   return (
//     <div>
//       {data && (
//         <>
//           <h1>Chat Data:</h1>
//           <p>Name: {data.name}</p>
//           <p>From: {data.from}</p>
//           <p>To: {data.to}</p>
//           <p>Message: {data.message}</p>
//           <p>Status: {data.status}</p>
//         </>
//       )}

//       <h2>Chats:</h2>
//       {chats.map((chat) => (
//         <div key={chat.id}>
//           <p>Message: {chat.message}</p>
//           <img src={chat.sender.image} alt="Sender " style={{ width: '160px', height: '160px' }} />
//           <p>Is KYC Verified: {chat.sender.is_kyc_verified ? 'Yes' : 'No'}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchChats;
