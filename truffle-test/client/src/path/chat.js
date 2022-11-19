import React from 'react';
import Footer from './Footer';
import Header from './Header'
import Main from './Main';
import { useState } from 'react';
import SockJsClient from "react-stomp";
import chatApi from "./chatapi";


function Second() {
  const user = "1";
  const [message, setMessage] = useState("")
  {user !== null ? (
    <div className="chat-container">
      <SockJsClient
        url={"http://localhost:8080/my-chat/"}
        topics={["/topic/group"]}
        onConnect={console.log("connected!")}
        onDisconnect={console.log("disconnected!")}
        onMessage={(msg) => onMessageReceived(msg)}
        debug={false}
      />
      <Chat messages={messages} currentUser={user} />
      <Input handleOnSubmit={handleMessageSubmit} />
    </div>
  ) : (
    <Login handleOnSubmit={handleLoginSubmit} />
  )}

    return (
      
      <div>
        <Header/>
        <Main message = {message}/>
        <Footer setMessage = {getMessage}/>
      </div>
    );
  };

  export default Second;