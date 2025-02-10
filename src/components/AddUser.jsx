import { useState } from "react";

function AddUser({ addUser }) {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    address: { city: "" },
    phone: "",
    company: { name: "" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ ...newUser, id: Date.now() });
    setNewUser({
      name: "",
      username: "",
      email: "",
      address: { city: "" },
      phone: "",
      company: { name: "" },
    });
  };

  return (

    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Name" value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} required />
      <input type="text" placeholder="Username" value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} required />
      <input type="email" placeholder="Email" value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} required />
      <input type="text" placeholder="City" value={newUser.address.city}
        onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, city: e.target.value } })} />
      <input type="text" placeholder="Phone" value={newUser.phone}
        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
      <input type="text" placeholder="Company" value={newUser.company.name}
        onChange={(e) => setNewUser({ ...newUser, company: { ...newUser.company, name: e.target.value } })} />
      <button type="submit">Add User</button>
    </form>
  );

}

export default AddUser;