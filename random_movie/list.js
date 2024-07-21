function paintList(movieObj) {
  const li = document.createElement("li");
  li.id = movieObj.id;
  console.log(li);
  const listBox = document.createElement("div");
  listBox.className = "list_box";
  const nowDate = document.createElement("span");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = String(date.getDate()).padStart(2, "0");
  nowDate.innerText = `${year}.${month}.${day}`;

  const span = document.createElement("span");
  span.setAttribute("id", "listName");
  span.innerText = movieObj.name;

  const mins = document.createElement("span");
  mins.className = "mins_list";
  mins.innerText = movieObj.minutes;

  li.appendChild(listBox);
  listBox.appendChild(span);
  listBox.appendChild(nowDate);
  li.appendChild(mins);
  moiveList.appendChild(li);
}
