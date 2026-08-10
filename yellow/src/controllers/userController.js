let users=[
    {id:1, name:"Marufa",email:"marufa@gmail.com"},
    {id:2, name:"Meng",email:"meng@gmail.com"}
]



//1.Read
const getAllUsers=(req,res)=>{
    req.status(200).json(users);
}

//2.Create
const createUser=(req,res)=>{
    const {name,email}=req.body;

    //validation
    if(!name || !email){
        return res.status(400).json({message:'Name & Email are required!'});
    }
    const newUser={
        id:users.length+1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
}