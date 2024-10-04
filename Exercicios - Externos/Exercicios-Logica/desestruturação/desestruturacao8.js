console.clear()
function displayPerson({ name, age }) {  // Desestruturação direta nos parâmetros
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  displayPerson({ name: 'Emma', age: 32 });
  