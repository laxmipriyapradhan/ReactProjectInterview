import React, {useEffect , useState} from "react";

import axios from "axios";


const AdminDashborad = () => {
    const [users, setUsers] = useState([]);
    const [saerch, setSearch] = useState ('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const fetchUsers = ()=>{
        axios.get("http://localhost:3000/users").then(res => setUsers(res.data));
    }

    useEffect(() => {
        fetchUsers()
     },[]);
     
     useEffect(() => {
        console.log("search", saerch.length, users);
        
        if (saerch.length == 0) {
            setFilteredUsers(users);
           
        }else if (saerch.length > 1) {
            const filtered = users.filter(user => user.name.toLowerCase().includes(saerch.toLowerCase()));
            setFilteredUsers(filtered);
         }
            
     },[saerch, users]);


     const handleDelete = (id)=>{
        axios.delete(`http://localhost:3000/users/${id}`).then (fetchUsers);

     }

     

    return(
        <div>
            <h2>Admin Dashboard</h2>
        
            <input  placeholder="Search" onChange={(e) => setSearch(e.target.value)}></input>
            {filteredUsers.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>

    )
}

export default AdminDashborad;