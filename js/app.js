


//Psuedo code
//Have 2 objects, 1. USS Schwaz and 2. Aliens 
//Schawz gets to attack 1st and Aliens attack one at a time
//Schwaz can either attach or retreat, and if it retreats game is over
//Properties of Schwaz : hull/hitpoints 0 or less ship is destroyed
//firepower- damage done to the hull of the target/alien
//Accuracy should be between 0 to 1- chances of hitting the target
//Aliens will also have hull, firepower and accuracy
//have alert box to enter to attack yes or no
//for loop in to determine the result along with Math.random()


//step 1 to give welcome alter message and instructions to open console
var username = prompt("Welcome to Space Battle Game, To play the game, right click on the screen, select 'Inspect', go to Console tab! Now lets start with your name");
alert("welcome " +username+ " to the Space Battle Game, let's begin!");

console.log('%c SpaceBattle', 'font-size: 40px');

//make a constructor of US-Schwaz because Schwaz gets to attack 1st


class Schwaz{
    constructor(hull,firepower,accuracy){  //adding 3 properties of Schwaz -hull, firepower and accuracy
    this.hull=hull;
    this.firepower=firepower;
    this.accuracy=accuracy;
    }
    attack=()=>
    {
        for(let i=currentAlien;i<6;i++)  //hard coding for 6 because we have 6 aliens
        {
            console.log("USS- Schwaz is attacking alien ship " +(i+1));
            
            if(Math.random()<=Aliens[i].accuracy)
            {
                console.log("%c USS- Schwaz attacked alien " +(i+1)  +" successfully","font-size:15px;background:lightblue;");
                if(this.hull_calc(i)<=0)
                {
                console.log("%c kabloo-ey !!!Alien ship" +(i+1) +" is destroyed!","font-size:20px;background:lightgreen;");
                if(this.retreat()==1)     //if the player decides to retreat
                {
                    console.log("%c USS- Schwaz retreated from the alien attack","font-size:20px;color:lightblue;")
                    return;
                }
                if(i===5)      //after 1 Alien is destroyed, we have 5 more to attack! Hence, i is strictly equals to 5
                alert("Hurray!!!! USS- Schwaz Won")
                }
                else i--;        
                }else{
                console.log("%c Another Alien ship " +(i+ 1) +" is about to attack"); 
                Aliens[i].attack(i);
                return;
            }
        }

    }

       //USS-Schwaz has retreat fuction which leads to game end
    retreat(){
        let action = "";
        action = prompt("Do you want to retreat? Press Yes to retreat or 'Ok' button to attack ", "Yes or No");   
        try{                       //The try statement allows you to define a block of code to be tested for errors while it is being executed.
            if(action.toLowerCase()=="yes")
            return 1;
            else
            return 0;
        }
        catch(err)
        {
            console.log("Please press yes or no");
        }
       
    }
    hull_calc(i){             //Calculating hull of aliens
        Aliens[i].hull=Aliens[i].hull-Aliens[i].firepower;
        return Aliens[i].hull;
    }
    
}
class Alien_Ship{      //Aliens also have hull, firepower and accuracy and all 3 are generated randomly, so using Math.random() functionality
    constructor() {
    this.hull=Math.floor(Math.random()*3)+3; //selecting hull=3
    this.firepower=Math.floor(Math.random()*2)+2; // selecting firepower=2
    this.accuracy=((Math.floor(Math.random() * 3) + 6) )/10;  //to get accuracy=0.6 dividing by 10 (6/10=0.6)
    }
    attack(Aliegnno)   //when alien attacks the Schwaz
    {
     if(Math.random()<=schwaz.accuracy)
        {
            console.log("%c Alien " +Aliegnno+ " attacked USS- Schwaz successfully","font-size:15px;background:lightblue;");
        if(this.hull_calc()<=0)
            {
            console.log("%c USS- Schwaz is destroyed! Alien attack successful. You LOST the WAR","font-size:20px;color:red;");
            alert("USS- Schwaz is Lost")
            return;
            }
            else this.attack(Aliegnno);
        }else
        {
            currentAlien=Aliegnno;
            schwaz.attack();
        }
   }
    hull_calc(){                 //hull calculated again after attack
        this.hull=this.hull-this.firepower;
        return this.hull;
    }
}
const Alien1= new Alien_Ship();  //defining all alien ships to Alien_ship() and creating an array of 6 aliens
const Alien2= new Alien_Ship();
const Alien3= new Alien_Ship();
const Alien4= new Alien_Ship();
const Alien5= new Alien_Ship();
const Alien6= new Alien_Ship();
let Aliens=[Alien1,Alien2,Alien3,Alien4,Alien5,Alien6];
var currentAlien=0;           // we have already used currentAlien in the code above hence defining
const schwaz=new Schwaz(20,5,0.7);  //values of USS-Schwaz's hull, firepower and accuracy
 alert("War is starting.... And you are the captain of USS- Schwaz, Get ready to attack or retreat");
schwaz.attack();



