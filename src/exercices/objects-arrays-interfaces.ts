// lesson 2
/**
 *  Objects, arrays and interfaces
 */

 const habilities:string[] = ["Bash", "C", "C++", "JavaScript"];

 interface Character{
     name: string;
     hp: number;
     habilities: string[];
     hometown?: string;
 
 }
 
 const character: Character = {
     name: "Rolando",
     hp: 100,
     habilities: ['bash', 'c', 'c++', 'javascript']
 }
 
 character.hometown = "Pueblo Paleta"
 
 console.table(character)