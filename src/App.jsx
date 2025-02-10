import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import AddUser from "./components/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.address.city.toLowerCase().includes(search.toLowerCase())
  );

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
    setIsModalOpen(false);
  };

  return (
    <div>

      <h1>Challenge ForIT</h1>

      <input
        type="text"
        placeholder="Find a user by name, email, or city"
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
      />

      <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
        Add Users +
      </button>

      <div className="user-list">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>X</button>
            <AddUser addUser={addUser} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
