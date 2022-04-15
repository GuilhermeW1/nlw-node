import prismaClient from "../prisma";


class ProfileUserService{
  async execute(user_id: string){
    try{
      const user = await prismaClient.user.findFirst({
      where:{
        id:user_id,
      },
    });

    return user;

  }catch(err){
    return err
  }
    
  
  }
}

export  {ProfileUserService};