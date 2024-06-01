import Team from '../js/Team';
import Character from '../js/Character';

test('testing the add method and the toArray method', () => {
  const result = new Team();
  const character = new Character('Ludvig', 'Bowerman', 10, 10);
  const expected = [
    {
      name: 'Ludvig',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
  ];

  result.add(character);

  expect(result.toArray()).toEqual(expected);
});

test('testing the add method for the absence of duplicates in the collection', () => {
  const result = new Team();
  const character = new Character('Ludvig', 'Bowerman', 10, 10);

  expect(() => {
    result.add(character);
    result.add(character);
  }).toThrow(Error('Такой персонаж уже существует'));
});

test('testing the addAll method', () => {
  const result = new Team();
  const character1 = new Character('Ludvig0', 'Bowerman', 10, 10);
  const character2 = new Character('Ludvig1', 'Bowerman', 10, 10);
  const character3 = new Character('Ludvig2', 'Bowerman', 10, 10);
  result.addAll(character1, character2, character3);
  const expected = [
    {
      name: 'Ludvig0',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
    {
      name: 'Ludvig1',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
    {
      name: 'Ludvig2',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
  ];

  expect(result.toArray()).toEqual(expected);
});

test('testing the add All method for the absence of duplicates', () => {
  const result = new Team();
  const character1 = new Character('Ludvig0', 'Bowerman', 10, 10);
  const character2 = new Character('Ludvig1', 'Bowerman', 10, 10);
  const character3 = new Character('Ludvig2', 'Bowerman', 10, 10);
  result.addAll(character1, character2, character3, character1);
  const expected = [
    {
      name: 'Ludvig0',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
    {
      name: 'Ludvig1',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
    {
      name: 'Ludvig2',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
  ];

  expect(result.toArray()).toEqual(expected);
});

test('checking the completion of iterations [Symbol.iterator', () => {
  const result = new Team();
  const bowerman = new Character('Ludvig0', 'Bowerman', 10, 10);
  const daemon = new Character('Ludvig1', 'Bowerman', 10, 10);
  const zombie = new Character('Ludvig2', 'Bowerman', 10, 10);

  result.addAll(bowerman, daemon, zombie);

  const iterator = result[Symbol.iterator]();

  expect(iterator.next()).toEqual({
    value: {
      name: 'Ludvig0',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
    done: false,
  });

  expect(iterator.next()).toEqual({
    value: {
      name: 'Ludvig1',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
    done: false,
  });
  expect(iterator.next()).toEqual({
    value: {
      name: 'Ludvig2',
      type: 'Bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
    done: false,
  });
  expect(iterator.next()).toEqual({ done: true });
});
