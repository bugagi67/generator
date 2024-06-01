import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type, attack = 15, defence = 20) {
    super(name, type);
    this.atack = attack;
    this.defence = defence;
  }
}
