import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type, attack = 10, defence = 40) {
    super(name, type);
    this.atack = attack;
    this.defence = defence;
  }
}
