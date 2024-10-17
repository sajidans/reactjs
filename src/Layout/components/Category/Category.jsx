// src/components/UserList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/categories');
            console.log(response);
            setUsers(response?.data?.Data);
        };

        fetchUsers();
    }, []);

    return (
        <ul className='category' >
            {users.map(user => (

                <>
                  {/* <li key={user.id}>{user.category}</li> */}

                <div className="owl-item active"  onClick={()=>{navigate(`/details/${user.id}`)}} style={{ width: '80.25px', marginRight: '10px' }}>
                <div className="item text-center">
               
                    <div className="sd box radius100">
                    <img src={user.image} alt="Women" />
                    </div>
                    <p className="m-0 mt-3 ellipsis">{user.category}</p>
              
                </div>
                </div>
                </>
              
            ))}
        </ul>
    );
};

export default Category;
