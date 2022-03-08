function getDayInfo(userDate) {
    const gd = new Date(userDate);
  
    const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    
    const day = gd.getDate(); // получаем дату 1-31
    const dayIndex = gd.getDay(); //получаем день недели 0-6
    const weekNumber = Math.ceil(day / 7) //получаем номер недели
    const monthIndex = gd.getMonth(); //получем номер месяца
    const year = gd.getFullYear(); //получаем год
    let result = `${dayNames[dayIndex]}, ${weekNumber} неделя ${monthNames[monthIndex]} ${year} года`;
    return result;
  }
  
  console.log(getDayInfo('15.12.2021'));

// getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года
// getDayInfo(“15.12.2021”) // => Среда, 3 неделя Декабря 2021 года
