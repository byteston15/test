let users = [
{ name: "oscar", age: 34},
{ name: "Paola", age: 27},
{ name: "Julio", age: 25},
{ name: "Sara", age: 37},
{ name: "Claudio", age: 42},
{ name: "Antonio", age: 19},
{ name: "Walter", age: 21},
];

const orderUsers = (arr) => {
    arr.sort(function(a,b){
        if(a.name>b.name){
            return 1;
        }
        if(a.name < b.name){
            return -1;
        }
        return 0;
    })
    console.log(arr);    
};



const orderUserByAge = (arr, order) =>{
    arr.sort(function(a,b){
        if(a.name>b.age){
            return 1;
            }
        if(a.name < b.age){
                return  -1;
            }
        return 0;
    })
    if(order === false){
        arr.reverse();
    };
    console.log(arr);  
};
//Ordena los usuarios por nombre
orderUsers(users);

//Ordena los usuarios ascendente o descendiente, el segundo parametro espera
//true en caso de ser ascendete, false descendente. 
orderUserByAge(users, true); //ascendiente
orderUserByAge(users, false);
