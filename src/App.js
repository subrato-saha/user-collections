import { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User/User";
import userData from "./data/usersData.json";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(userData);
  }, []);
  const [selectedUser, setSelectedUser] = useState([]);
  const totalS = selectedUser.reduce(
    (total, user) => total + Number(user.salary),
    0
  );

  const addClickHandler = (user) => {
    setSelectedUser([...selectedUser, user]);
  };
  return (
    <div className="App">
      <div className="header">
        <h2>Users Collection</h2>
        <hr />
      </div>
      <div className="container">
        <div className="userdetails">
          {users.map((user) => (
            <User
              user={user}
              key={user.id}
              addClickHandler={addClickHandler}
            ></User>
          ))}
        </div>
        <div className="sidebar">
          <h2>ADDED USER DETAILS</h2>
          <hr />
          <p>
            Total Added User : <b>{selectedUser.length}</b>
          </p>
          <p>
            Users Total Salary : <b>{totalS}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
