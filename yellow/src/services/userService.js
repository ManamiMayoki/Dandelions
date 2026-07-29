//The Hard Worker

//array acting as a temporary database storage memory
const usersDatabase=[
    {id:1,name:'Marufa',role:'Developer'}
];

const fetchAllUsers=()=>{
    return usersDatabase;
};

const addNewUser=(userData)=>{
    const newUser={
        id:usersDatabase.length+1,
        name:userData.name,
        role:userData.role || 'User'
    };
    usersDatabase.push(newUser);
    return newUser;
};

module.exports={fetchAllUsers,addNewUser};