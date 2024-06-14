import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import { useSelector } from "react-redux";
import { userChats } from "../../api/ChatRequest";
import Conversation from "../../components/Coversation/Conversation";
import { Link } from "react-router-dom";
import { UilSetting } from "@iconscout/react-unicons";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import ChatBox from "../../components/ChatBox/ChatBox";
import { io } from "socket.io-client";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage,setSendMessage] =  useState(null);
  const [recieveMessage,setRecieveMessage] =  useState(null);
  const socket = useRef();


  useEffect(()=>{
    if(sendMessage!==null){
      socket.current.emit('send-message', sendMessage)
    }
  }, [sendMessage])


  
  
  
  
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      
    });
  }, [user]);
  
  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setRecieveMessage(data);
    }

    );
  }, []);
  
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);

  const checkOnlineStatus = (chat)=>{
    const chatMember =  chat.members.find((member)=>member!==user._id)
    const online = onlineUsers.find((user)=>user.userId===chatMember)
    return online? true:false
  }

  // Log onlineUsers when it changes
  useEffect(() => {
    console.log("Online Users:", onlineUsers);
  }, [onlineUsers]);


  return (
    <div className="Chat">
      {/* left side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation data={chat} currentUserId={user._id} online={checkOnlineStatus(chat)}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <div className="navIcons">
            <Link to="../home">
              <img src={Home} alt="" />
            </Link>
            <UilSetting />
            <img src={Noti} alt="" />
            <Link to="../chat">
              <img src={Comment} alt="" />
            </Link>
          </div>

          {/* chat body */}
        </div>
        <ChatBox chat={currentChat} currentUser={user._id} setSendMessage={setSendMessage} recieveMessage={recieveMessage}/>
      </div>
    </div>
  );
};

export default Chat;
