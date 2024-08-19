import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {// listen for new messages from the socket.
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		/* The line `return () => socket?.off("newMessage");` is a cleanup function that is returned from the
    `useEffect` hook. This cleanup function is responsible for unsubscribing or removing the event
    listener for the "newMessage" event from the socket when the component unmounts or when the
    dependencies of the `useEffect` hook change. */
    return () => socket?.off("newMessage");// this line is very important to ensure that we are not listening for this event more than once as we have passes the socket as our dependency in the useEffect hook and it continue to listend unless we remove it.
	}, [socket, setMessages, messages]);
};
export default useListenMessages;