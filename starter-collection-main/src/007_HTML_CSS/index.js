const tbody = document.getElementsByClassName("calendarBody")[0];

for (let week = 0; week < 5; week++) {
  const calendarTr = document.createElement("tr");
  for (let day = 0; day < 7; day++) {
    const dayTd = document.createElement("td");
    let date = 7 * week + day;
    if (date > 31) {
      date -= 31;
      dayTd.classList.add("gray");
    } else if (date < 1) {
      date = 31;
      dayTd.classList.add("gray");
    }
    dayTd.innerText = date;
    calendarTr.append(dayTd);
  }
  tbody.append(calendarTr);
}
