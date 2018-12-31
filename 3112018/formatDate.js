function formatDate(date) {
  const diffInSecs = Math.floor((Date.now() - date.getTime())/1000) ;
  if (diffInSecs < 1) return "right now";
  if (diffInSecs < 60) return `${diffInSecs} sec. ago`;
  if (diffInSecs < 3600) return `${diffInSecs/60} min. ago`;

  //let year = String(date.getFullYear()).slice(2);
  //let month = String(date.getMonth() + 1).padStart(2,'0');
  //let day = String(date.getDate()).padStart(2,'0');
  //let hours = String(date.getHours()).padStart(2,'0');
  //let minutes = String(date.getMinutes()).padStart(2,'0');

  // "refactoring"
  const [year, month, day, hours, minutes] = [
    date.getFullYear(),
    date.getMonth()+1,
    date.getDate(),
    date.getHours(),
    date.getMinutes()
  ].map(v => String(v).padStart(2,'0').slice(-2));

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
console.log(formatDate(new Date(2014, 2, 1, 11, 22, 33)));
// issues I've encountered:
// I've made a mistake at first time by omitting the String() call
// I didn't pad hours and minutes as well... and date/month too :)
// used pad instead of padStart
// Months in JS Date are from 0(Jan) to 11 (Dec) ^^
// Used slice(2) instead improved and more generic slice(-2) arguably though.
