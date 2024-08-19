import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);// by default our socket connection is null.
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("https://localhost:5000"
        , {
          query: {
            userId: authUser._id,
          },
        }
      );

      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side

      socket.on("getOnlineUsers", (users) => {// This will liten teh getOnlineUsers event and get the all the online users.
      	setOnlineUsers(users);
      });

      return () => socket.close();// when the component unmounts.
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};