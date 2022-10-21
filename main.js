let getJsonFile = (pathToFile) => {
  let request = new XMLHttpRequest();

  request.open("GET", pathToFile, false);
  request.send(null);

  let my_JSON_object = JSON.parse(request.responseText);

  return my_JSON_object;
};
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");

let item = document.getElementById('item');

function result (massiv) {
  item.innerHTML = "";
  let icons = "";
  for ( let i = 0; i < massiv.length; i++) {

    icons +=
     
      `<div class="item-card" id="card">
  			<div class="symbol">
          ${massiv[i].symbol}
  			</div>
  			<div class="title">
        ${massiv[i].title}
  			</div>
  			<div class="keywords">
        ${massiv[i].keywords}
  			</div>
  		</div>`
  }
  item.innerHTML = icons;
}  
result (allEmoji);

document.querySelector('#input_id').oninput = function() {
  let value = this.value.trim();
  newEmoji = allEmoji.filter(item => item.title.includes(value));

  result(newEmoji);
}

