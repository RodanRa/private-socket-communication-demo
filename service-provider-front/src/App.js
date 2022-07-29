import "./App.css";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
function App() {
  //He is Hari bahadur with providerId 35
  socket.on("35", (payload) => {
    console.log(payload);
  });
  return <p>I am service Provider</p>;
}

export default App;
