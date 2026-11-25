import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import CreateUsers from "./CreateUser";
import UpdateUsers from "./UpdateUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUsers />} />
          <Route path="/update/:id" element={<UpdateUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
