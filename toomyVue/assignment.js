// global variable
let age, obj;

// first task(1)
function isOldEnoughToDrink(age) {
    age = 'the legal drinking age in nigeria is 18'
    console.log(age);
} 
isOldEnoughToDrink(age)


// second task(2)

function isOldEnoughToDrinkAndDrive(age){

//   age = 18;
    if (age <= 17) {
         age = 'the legal drinking age in United State is 21' 
        
    } 
  
    else{
       return age = 'It is always illegal to drink and drive in the United State'
    }
    // console.log(age);
}
console.log(isOldEnoughToDrinkAndDrive(age));


 // THIRD TASK(3)
    let object = false;
    function getproperty() {
        if (object){
        return false
        }
        
    }console.log(getproperty(obj));


    // FOURTH Task (4)
    var myObj = {};
    addProperty(myObj, 'myProperty')
    function addProperty(myObj, myProperty) {
        if (myObj.myProperty = 'true') {
            return true
        }
        
        
    }console.log(addProperty(myObj.myProperty));

    // // FIFTH TASK(5)
    obj = {
        age : 45
    };
    function isPersonOldEnoughToDrinkAndDrive(age){
         
        if (age <= 18) {
            age = 'The legal drinking age in Nigeria is 18'
            
        }
        else{
           return age = 'It is always illegal to drink and drive in the United State'
            

        }
        

    }
    console.log(isPersonOldEnoughToDrinkAndDrive(obj.age))
    

//     // SIXTH TASK(6)
//     function computeAverageLength(code, programs){
//         let sum = code.length + programs.length;
//         let result = sum / 2

//         console.log(result)
        
//     }computeAverageLength('code', 'programs')


// SEVENTH TASK (7)
var input =  ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']

    function transformFirstAndLast(data) {
        var output = {}
        output[data[0]]=data[data.length -1]
        
       return output

    }
    
    console.log(transformFirstAndLast(input) )


    // TASK EIGHT(8)
//  var item ={
//         name : 'Sam',
//         age : 25,
//         hasPets : true
//     };

//     var answer
//     function getAllKeys() {
//          answer = Object.keys(item) ;
//         return answer

        
//     }
//     console.log(getAllKeys(answer));

// 
    const map = { a: 'A', 
            b: 'B', 
            c: 'C'
    }

const arrayTorObject = Object.assign([], map);

console.log(arrayTorObject); 

var item ={
            name : 'Sam',
            age : 25,
            hasPets : true
        };

        function reducer(acc, cur){
            return {...acc,[cur.name]:cur}
        }

        let answer = item.reduce(reducer, {})
        console.log(answer);