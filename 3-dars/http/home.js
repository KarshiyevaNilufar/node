const fs=require('fs/promises')
const path=require('path')


class User{
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    
    //Main methods
    async newUser(){
      let flag=await this.#checkUser()
      if(!flag){
          await this.#saveData()
      }else{
          console.log('this name exists')
      }
    }
    
   static async countUsers(){
        let response =await fs.readFile(path.join(__dirname,'db.json'),'utf-8')
        response=await JSON.parse(response)
        return response.users.length
    }

    //private method
    async #saveData(){
        let user={
            name:this.name,
            age:this.age
        }
        let users=await fs.readFile(path.join(__dirname,'db.json'),'utf-8');
        users=await JSON.parse(users)
        users=users.users;
        users.push(user)
      await fs.writeFile(path.join(__dirnmae,'db.json'),JSON.stringify({users:users}))
    }

    async #checkUser(){
     let db=await fs.readFile(path.join(__dirname,'db.json'),'utf-8')
     db=await JSON.parse(db)
     let users=db.users
     let user=users.find(
         (user) =>  user.name.toLowerCase()===this.name.toLowerCase()
    );
    return user? true:false
    }
}

let user1=new User('asadbek',19)
console.log(user1.newUser())