import React, {useEffect , useState} from "react";

import axios from "axios";


const AdminDashborad = () => {
    const [users, setUsers] = useState([]);
    const [saerch, setSearch] = useState ('');
    const fetchUsers = ()=>{
        axios.get("http://localhost:3000//users").then(res => setUsers(res.data));
    }

    useEffect(() => {
        fetchUsers
     },[]);

     const handleDelete = (id)=>{
        axios.delete(`http://localhost:3000//users/${id}`).then (fetchUsers);

     }

     const filteredUsers  = users.filter(user =>{
        user.email.toLowerCase().includes(saerch.toLocaleLowerCase()) ||
        user.name.toLowerCase().includes(saerch.toLocaleLowerCase()) 
        })

    return(
        <div>
            <h2>Admin Dashboard</h2>
        
            <input  placeholder="Search" onChange={(e) => setSearch(e.target.value)}></input>
            {filteredUsers.map(user =>{
                <div key= {user.id}>
                        <p>{user.name} ({user.email}) - {user.id}</p>
                        <button onclick  = {()=> handleDelete(user.id)}>Delete</button>
                    </div>
            })}
        </div>

    )
}

export default AdminDashborad;