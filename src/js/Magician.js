import Character from './Character';

export default class Magician extends Character {
  constructor(name, type, attack = 20, defence = 10) {
    super(name, type);
    this.atack = attack;
    this.defence = defence;
  }
}
