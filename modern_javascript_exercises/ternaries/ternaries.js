// Instructions can be found in ternaries.md

export const sayHello = (name) => {
  /*if (name === undefined) {
    return "Hello you!";
  } else return "Hello, " + name + "!";*/
  return name === undefined ? 'Hello you!' : `Hello, ${name}!`; 
}
