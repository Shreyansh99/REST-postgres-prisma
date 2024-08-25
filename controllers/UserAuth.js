import prisma from "../db/db.config.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) {
      return res.json({ status: 400, message: "Email already exists" });
    }
    const newuser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    return res.status(200).json({ data: newuser, msg: "User created" });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async(req,res)=>{
   try {
    const { name, email, password } = req.body;
    const userId = req.params.id

     await prisma.user.update({
        where:{
            id : Number(userId)
        },
        data:{
            name,
            email,
            password
        }
     })
     return res.status(200).json({message: "User updated "})
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async(req,res)=>{
    try {
        const users = await prisma.user.findMany({})

        return res.status(200).json({users})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteUser = async(req, res) =>{

  const userId = req.params.id

  await prisma.user.delete({
    where:{
      id: userId
    }
  })
  res.json({message : "User deleted"})
}
