
/************************************************************************
 *                                                                      *
 **                      Guessing Game - Amenity42                     **
 *                                                                      *
 ************************************************************************/


//* ----------------------------| Setup |----------------------------



class User{

      constructor(Name){

            this. name = Name;
            this. score = 0;
            this. highScore;

      }

}

class System{

      constructor(){


      }

      static randomNum(){

            let randomNo = Math.round(Math.random() * 6);

            return randomNo;

      }

}

//todo Do this with front end but for now...
const newUser = new User('Richard');

//* --------------------------| Game Logic |--------------------------

console.log(System.randomNum());


