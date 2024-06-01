import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type, attack = 5, defence = 5) {
    super(name, type);
    this.atack = attack;
    this.defence = defence;
  }
}
