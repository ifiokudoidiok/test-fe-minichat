import styles from './styles.module.css';
import MessagesReceived from './Messages';
import SendMessage from './SendMessage';
import RoomAndUsersColumn from './RoomAndUsers';

const Chat = ({ username, room, socket, messages, messagesRecieved, setMessagesReceived}) => {
  return (
    <div className={styles.chatContainer}>
      <RoomAndUsersColumn socket={socket} username={username} room={room} messagesRecieved={messagesRecieved}
                setMessagesReceived={setMessagesReceived} />
      <div>
        <MessagesReceived socket={socket} messages={messages} messagesRecieved={messagesRecieved}
                setMessagesReceived={setMessagesReceived}/>
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;