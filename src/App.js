import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const socket = io.connect("http://localhost:5056");

export default function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [messagesRecieved, setMessagesReceived] = useState([]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
                messages={messages}
                setMessages={setMessages}
                messagesRecieved={messagesRecieved}
                setMessagesReceived={setMessagesReceived}
              />
            }
          />
          <Route
            path="/chat"
            element={
              <Chat
                username={username}
                room={room}
                socket={socket}
                messages={messages}
                setMessages={setMessages}
                messagesRecieved={messagesRecieved}
                setMessagesReceived={setMessagesReceived}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
