const btnLandenLijst = document.querySelector("#landenlijst");
const btnSteenbokVrouwen = document.querySelector("#steenbokVrouwen");
const resultList = document.querySelector("#result");

function createLi(name) {
  const newLi = document.createElement("li");
  const node = document.createTextNode(name);
  newLi.appendChild(node);
  resultList.appendChild(newLi);
}

function getCountries() {
  resultList.innerHTML = "";
  randomPersonData.map((person) => {
    const country = person.region;
    return createLi(country);
  });
}

btnLandenLijst.addEventListener("click", getCountries);

function checkSteenbok(dob) {
  const md = ([month, day] = [dob.getMonth(), dob.getDate()]);
  if ((md[0] === 12 && md[1] >= 22) || (md[0] === 1 && md[1] <= 19)) {
    return "true";
  } else return "false";
}

function createDiv(name, pic) {
  const newLi = document.createElement("li");
  const node = document.createTextNode(name);
  const newImg = document.createElement("img");
  newImg.src = pic;
  newLi.appendChild(node);
  newLi.appendChild(newImg);
  resultList.appendChild(newLi);
}

function getDOB(women) {
  women.filter((woman) => {
    const dob = new Date(woman.birthday.mdy);
    if (checkSteenbok(dob) === "true" && woman.age >= 30) {
      const name = woman.name + " " + woman.surname;
      const pic = woman.photo;
      createDiv(name, pic);
    }
  });
}

function getGender() {
  resultList.innerHTML = "";
  const women = randomPersonData.filter((person) => person.gender == "female");
  return getDOB(women);
}

btnSteenbokVrouwen.addEventListener("click", getGender);
