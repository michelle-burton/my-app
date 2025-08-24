import Greeting from "./components/Greeting"
import { useState, useEffect } from 'react';
import UserList from "./components/UserList"


function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // API Call
    useEffect(() => {
        async function load() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                setError(error.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }
        load();
    },[])
  return (
    <div>
          <h1>Hello from App.jsx 🚀</h1>
          {loading && <p>Loading users...</p>}
          {!loading && <UserList users={users} />}
    </div>
  )
}
export default App

