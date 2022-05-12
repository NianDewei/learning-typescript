// Lesson 05
/**
 *  Destructuring of objects
 */

 interface Player {
	volume: number
	seconds: number
	song: string
	details: Details
}

interface Details {
	author: string
	year: number
}

const player: Player = {
	volume: 90,
	seconds: 36,
	song: "Everybody´s Changing",
	details: {
		author: "Keane",
		year: 2009
	}
}


// const author = "AC/DC"
// destructuring in a single line.
// details -> author by authDetail
// const {volume,seconds,song, details:{author:authorDetail,year}} = player
const {volume,seconds,song} = player
const {author,year} = player.details

// show in console.log  player and its properties

console.log("Player -> Volume: ",volume)
console.log("Player -> seconds: ",seconds)
console.log("Player -> song: ",song)
console.log("Player -> Author: ",author)