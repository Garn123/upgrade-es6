//4.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let nombres = users.map(user => user.name);

console.log(nombres);

//4.2
let anacleto = users.map(user =>
    user.name[0] === "A" ? "Anacleto" : user.name    
)

console.log(anacleto);

//4.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visited = cities.map(city =>
    city.isVisited == true ? city.name += " (Visitado)" : city.name
)

console.log(visited)