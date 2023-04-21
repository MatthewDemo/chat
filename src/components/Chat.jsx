import React, { useContext } from "react";
import Add from '../img/add.png'
import Video from '../img/video.png'
import More from '../img/more.png'
import Messages from "./Messages";
import Input from './Input'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Add} alt="Add" />
          <img src={Video} alt="Video" />
          <img src={More} alt="More" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
