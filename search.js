import people from "./list.js";
function searchPeople(list, searchField, searchValue){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const results =list.filter((people)=> people[searchField]== searchValue)
            if (results.length > 0) resolve(results)
            else reject(`За пошуком за умовою "${searchField}: ${searchValue}" не знайдено.`);
        }, 1500);
      });
    }
  


export default searchPeople