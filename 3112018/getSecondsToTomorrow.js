function getSecondsToTomorrow(){
  const now = new Date();
  return 24*3600 - now.getHours()*3600 - now.getMinutes()*60 - now.getSeconds();
}
