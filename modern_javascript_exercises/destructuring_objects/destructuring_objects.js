// Instructions can be found in destructuring_objects.md
/*
export function introduction(person) {
  const name = person.name;
  const city = person.city;
  const pet = person.pet;

  return "Hello my name is " + name + " and I live in " + city + " with " + pet;
}*/

export const introduction = ({name, city, pet}) => {
  return `Hello my name is ${name} and I live in ${city} with ${pet}`;
}
