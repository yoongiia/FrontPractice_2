import searchPeople from "./searchPeople.js";
import people from "./list.js";

const currentYear = new Date().getFullYear();

const getAgeInfo = (name, birthYear= currentYear) => {
  return `Я ${name}, мені ${currentYear - birthYear} років`;
};

console.log(getAgeInfo("Вася", 1990));

console.log(getAgeInfo("Петя"));

  searchPeople(people, 'name', 'Vance')
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
    searchPeople(people, 'age', 50)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
    searchPeople(people, 'weight', 65)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
    searchPeople(people, 'name', 'Susan')
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
    searchPeople(people, 'age', 5)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));