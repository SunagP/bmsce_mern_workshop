import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deleteuser/${id}`)
      .then((res) => {
        console.log(res);
        // remove deleted user from state
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Comic Sans MS', cursive"
    }}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-5deg); }
          75% { transform: translateX(5px) rotate(5deg); }
        }
        .crazy-table tr:hover {
          background: linear-gradient(90deg, #ff00ff, #00ffff) !important;
          transform: scale(1.02);
          transition: all 0.3s;
        }
      `}</style>
      <div style={{
        width: '80%',
        maxWidth: '900px',
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '30px',
        padding: '40px',
        boxShadow: '0 0 50px rgba(255, 0, 255, 0.8), 0 0 100px rgba(0, 255, 255, 0.6)',
        border: '5px solid transparent',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        animation: 'pulse 2s infinite'
      }}>
        <Link to="/create" style={{
          display: 'inline-block',
          padding: '15px 40px',
          fontSize: '24px',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #ff0080, #ff8c00)',
          border: 'none',
          borderRadius: '50px',
          color: 'white',
          textDecoration: 'none',
          marginBottom: '30px',
          boxShadow: '0 0 20px rgba(255, 0, 128, 0.8)',
          animation: 'shake 0.5s infinite',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          🚀 Add User +
        </Link>

        <table className="table crazy-table" style={{
          background: 'transparent',
          color: 'white',
          fontSize: '18px',
          borderCollapse: 'separate',
          borderSpacing: '0 10px'
        }}>
          <thead>
            <tr style={{
              background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontSize: '20px'
            }}>
              <th style={{ padding: '20px', border: 'none', textShadow: '0 0 10px #000' }}>🔥 Name</th>
              <th style={{ padding: '20px', border: 'none', textShadow: '0 0 10px #000' }}>📧 Email</th>
              <th style={{ padding: '20px', border: 'none', textShadow: '0 0 10px #000' }}>🎂 Age</th>
              <th style={{ padding: '20px', border: 'none', textShadow: '0 0 10px #000' }}>⚡ Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} style={{
                background: index % 2 === 0 ? 'rgba(255, 0, 255, 0.2)' : 'rgba(0, 255, 255, 0.2)',
                transition: 'all 0.3s'
              }}>
                <td style={{ padding: '15px', border: 'none', fontWeight: 'bold' }}>{user.name}</td>
                <td style={{ padding: '15px', border: 'none' }}>{user.email}</td>
                <td style={{ padding: '15px', border: 'none' }}>{user.age}</td>
                <td style={{ padding: '15px', border: 'none' }}>
                  <Link to={`/update/${user._id}`} style={{
                    padding: '10px 20px',
                    background: 'linear-gradient(45deg, #00ff00, #00ffff)',
                    border: 'none',
                    borderRadius: '20px',
                    color: 'black',
                    textDecoration: 'none',
                    marginRight: '10px',
                    fontWeight: 'bold',
                    boxShadow: '0 0 15px rgba(0, 255, 0, 0.6)',
                    display: 'inline-block'
                  }}>
                    ✏️ Update
                  </Link>
                  <button
                    style={{
                      padding: '10px 20px',
                      background: 'linear-gradient(45deg, #ff0000, #ff00ff)',
                      border: 'none',
                      borderRadius: '20px',
                      color: 'white',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 0 15px rgba(255, 0, 0, 0.6)'
                    }}
                    onClick={() => handleDelete(user._id)}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
