import "./App.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");
function App() {
  const socketTrigger = () => {
    socket.emit("35", {
      userId: 1,
      serviceId: 2,
    });
  };

  return <button onClick={socketTrigger}>Trigger Socket</button>;
}

export default App;
