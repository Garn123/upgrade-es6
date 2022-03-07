//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let older = ages.filter(age => age > 18);

/* console.log(older); */
//5.2
let par = ages.filter(age => age%2 == 0);

/* console.log(par) */
//5.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let lol = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends");

/* console.log(lol) */
//5.4
let u = streamers.filter(streamer => streamer.name.includes('u'));

/* console.log(u) */
//5.5
let legends = streamers.filter(streamer =>
    streamer.gameMorePlayed.includes('Legends')
)

/* console.log(legends) */
