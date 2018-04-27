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
  age: 26
};

const handler = {
  get: (target, property) => {
    try {

      let message = 'No available data';

      if (property === 'lastDog') {
        return target.dogs[target.dogs.length - 1];
      }

      if (property === 'firstDog') {
        return target.dogs[0];
      }

      if (property === 'age') {
        message = target.name === 'Carlos' ? 'Older than it looks!' : 'Looks old...';
      }

      return target[property] || message;
    } catch (err) {
      return 'No available data';
    }
  },

  set(target, property, value) {
    if (property === 'age' && value > 30 && target.name === 'Carlos') {
      console.log(`${value}?? Are you kidding me?`);
      return false;
    }

    target[property] = value;
    console.log(`He actually looks ${value}`);
    return true;
  },

  deleteProperty: function (target, property) {
    if (property === 'name' && target[property] === 'Carlos') {
      console.log('I don\'t wanna lose my id');
      return false;
    }
    delete target[property];
  }

};

const carlos = new Proxy(target, handler);

console.log('age:', carlos.age);
console.log('nacionality:', carlos.nacionality);
console.log('lastDog:', carlos.lastDog);
console.log('firstDog:', carlos.firstDog);

carlos.age = 35;

delete carlos.name;
console.log(carlos.name);

console.log('---------------------------------:');

const leandro = new Proxy(target2, handler);

console.log('age:', leandro.age);
console.log('nacionality:', leandro.nacionality);
console.log('lastDog:', leandro.lastDog);
console.log('firstDog:', leandro.firstDog);

leandro.age = 35;

delete leandro.name;
console.log(leandro.name);

