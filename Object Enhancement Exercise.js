function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
   //ES2015 Version

   function createInstructor(firstName,lastName){
    return{
        firstName,
        lastName
    }
   }
   ====================================================
   let favoriteNumber=42;

   let instructor={
    firstName: "Colt",
[favoriteNumber]: "That is my favorite!"
}
   ====================================================
   const instructor={
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye({
        return this.firstName + "says bye"
    })
   }
   ====================================================
   function animal(species, action, noise){
    return{
        species,
        [verb]({
            return noise;
        })
    }
   }