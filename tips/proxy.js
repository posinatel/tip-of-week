const target = {
  name: 'Carlos',
  dogs: [
    'Lessie',
    'Tobby',
    'Pit'
  ]
};

const target2 = {
  name: 'Leandro',
  nationality: 'Brazilian'
};

const handler = {
  get: (target, property) => {
    const message = 'No available data';

    try {

      if (property === 'lastDog') {
        return target.dogs[target.dogs.length - 1];
      }

      if (property === 'firstDog') {
        return target.dogs[0];
      }

      if (property === 'age') {
        return target.name === 'Carlos' ? 'Older than it looks!' : 'Looks old...';
      }

      return target[property] || message;

    } catch (error) {
      return message;
    }
  },

  set(target, property, value) {
    if (property === 'age' && value > 30 && target.name === 'Carlos') {
      console.log(`${value}?? Are you kidding me?`);
      return false;
    }

    target[property] = value;
    console.log(`He actually looks ${value}...`);
    return true;
  },

  deleteProperty: function (target, property) {
    if (property === 'name' && target[property] === 'Carlos') {
      console.log('I don\'t wanna lose my identity');
      return false;
    }
    delete target[property];
    return true;
  }

};

const carlos = new Proxy(target, handler);

console.log('age:', carlos.age); // age: Older than it looks!
console.log('nationality:', carlos.nationality); // nationality: No available data
console.log('firstDog:', carlos.firstDog); // firstDog: Lessie
console.log('lastDog:', carlos.lastDog); // lastDog: Pit

carlos.age = 35; // 35?? Are you kidding me?

delete carlos.name; // I don't wanna lose my identity
console.log('name: ', carlos.name); // Carlos

console.log('---------------------------------:');

const leandro = new Proxy(target2, handler);

console.log('age:', leandro.age); // age: Looks old...
console.log('nationality:', leandro.nationality);  // nationality: Brazilian
console.log('firstDog:', leandro.firstDog); // firstDog: No available data
console.log('lastDog:', leandro.lastDog); // lastDog: No available data

leandro.age = 35; // He actually looks 35...

delete leandro.name;
console.log('name: ', leandro.name); // name: No available data

