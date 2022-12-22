import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = ({ username, setUsername, room, setRoom, socket, messages, setMessages }) => {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
      axios.post('//localhost:5055/chat/room', { room })
    .then((res) => {
        setMessages(res.data)
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });

    }
    navigate('/chat', { replace: true });
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input
          className={styles.input}
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)} // Add this
        />

<select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)} // Add this
        >
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='sample-room'>Sample</option>
          <option value='react'>React</option>
        </select>

        <button className='btn btn-secondary'  style={{ width: '100%' }} onClick={joinRoom} >Join Room</button>
      </div>
    </div>
  );
};

export default Home;