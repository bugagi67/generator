export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже существует');
    }
    return this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    const array = this.toArray();
    for (let i = 0; i < array.length; i += 1) {
      yield array[i];
    }
  }
}
