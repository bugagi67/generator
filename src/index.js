/* eslint-disable no-unused-vars */
import Character from './js/Character';
import Bowerman from './js/Bowerman';
import Daemon from './js/Daemon';
import Zombie from './js/Zombie';
import Team from './js/Team';
import './css/style.css';

const result1 = new Team();
const bowerman1 = new Character('Ludvig0', 'Bowerman', 10, 10);
const daemon1 = new Character('Ludvig1', 'Bowerman', 10, 10);
const zombie1 = new Character('Ludvig2', 'Bowerman', 10, 10);

result1.addAll(bowerman1, daemon1, zombie1);

const iterator = result1[Symbol.iterator]();

console.log(result1.toArray());

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
