import { useState } from "react";

function UserCard({ user }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`user-card ${isExpanded ? "expanded" : ""}`} 
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h2>{user.name}</h2>
      {!isExpanded && <p>Mostrar contenido</p>}
      {isExpanded && (
        <>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
          <p>{user.phone}</p>
          <p>{user.company.name}</p>
        </>
      )}
    </div>
  );
}

export default UserCard;