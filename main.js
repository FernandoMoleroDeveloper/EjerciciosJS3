/* 
    Dado el siguiente array, muestra por consola
    la suma de premios de los jugadores de uruguay
*/

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2},
]

let uruguayos = players.filter (futbolista => futbolista.country === 'Uruguay');
console.log(uruguayos);

let uruguayosScore = uruguayos.map ( futbolista => futbolista.goldenBall + futbolista.goldenBoot);
console.log(uruguayosScore);

let totalScoreUruguayos = uruguayosScore.reduce( (acc,score) => acc + score);
console.log(totalScoreUruguayos);



/* 
    Dado el siguiente array:
*/

const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
]
//Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos

/* 
    1) Muestra por consola el listado de nombres de los millonarios
    2) Muestra por consola (true/false) si está Amancio en la lista
    2) Muestra por consola un listado con el resultado de dividir su patrimonio patrimonio entre los años que tienen
    3) Muestra por consola la media de edad de los 10 billonarios de la lista forbes
    4) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
    5) Muestra por consola el millonario más joven que no sea de EEUU
    6) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
    7) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos
*/

//1
let millonariosList = forbesList.map( millonarios => millonarios.name);
console.log (millonariosList);

//2

let amancioList = forbesList.find( millonario => millonario.name === 'Amancio');
if (amancioList === undefined){
    amancioList = 'false';
}
console.log (amancioList);

//3

let patrimonio = forbesList.map( millonarios => millonarios.amount / millonarios.age);
console.log(patrimonio);

//4

let mediaEdad = forbesList.map(millonarios => millonarios.age);
let edadMedia = forbesList.reduce((contador,millonarios) => contador + millonarios.age , 0);
let resEdadMedia = edadMedia / mediaEdad.length;
console.log (resEdadMedia);

//5

let tecnoGuys = forbesList.filter(millonarios => millonarios.industry === 'Technology');
let sumTecno = tecnoGuys.reduce((contador,millonarios) => contador + millonarios.amount,0);
console.log(sumTecno);

//6

let outUsa = forbesList.filter(millonarios => millonarios.country != 'EEUU');
let youngOutUsa = outUsa.reduce(function (youngest,millonarios){
    return (youngest.age === undefined || youngest.age >= millonarios.age) ? millonarios : youngest;
});
console.log(youngOutUsa)

//7

let topFive = forbesList.filter(millonarios => millonarios.amount >= 118 );
let oldestTopFive = topFive.reduce(function (oldest,millonarios){
    return (oldest.age === undefined || oldest.age <= millonarios.age) ? millonarios : oldest;
});
console.log(oldestTopFive);

//8

let googleMicrosoft = forbesList.filter(millonarios => millonarios.company === 'Google' || millonarios.company === 'Microsoft');
let totalAge = googleMicrosoft.reduce((contador,millonarios) => contador + millonarios.age , 0);
let totalAmount = googleMicrosoft.reduce((contador,millonarios) => contador + millonarios.amount , 0);
let ageMedia = totalAge / googleMicrosoft.length;
let amountMedia = totalAmount / googleMicrosoft.length;
console.log(ageMedia);
console.log(amountMedia);