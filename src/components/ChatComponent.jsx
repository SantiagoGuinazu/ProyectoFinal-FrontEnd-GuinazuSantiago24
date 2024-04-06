import { useEffect, useState } from "react";
import io from "socket.io-client";
import { NavBar } from "./NavBar";

const socket = io("/");

export const ChatComponent = () => {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        socket.on("mensaje", receiveMessage);
        return () =>{
            socket.off("mensaje", receiveMessage)
        }
    }, []);

    const receiveMessage = message => 
        setMessages((state) => [...state, message]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = {
            body: message,
            from: "Me",
        };
        setMessages(state => [newMessage, ...state]);
        setMessage("");
        socket.emit("mensaje", newMessage.body);
    };

    return (
        <>  
            <NavBar />
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Chat React</h1>
                    <input
                        name="message"
                        type="text"
                        placeholder="Write your message..."
                        onChange={(e) => setMessage(e.target.value)}
                        className="border-2 border-zinc-500 p-2 w-full text-black"
                        value={message}
                        autoFocus
                    />

                    <ul>
                        {messages.map((message, index) => (
                            <li
                                key={index}
                                className={` ${message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-lightblue"
                                    }`}
                            >
                                <b>{message.from}</b>: {message.body}
                            </li>
                        ))}
                    </ul>
                </form>
            </div>
        </>
    );
};
