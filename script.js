import { DateTime } from "luxon";

let age_val = document.querySelector(".getage").value;

if (!age_val) {
  alert("Ener Age");
}

let read = luxon.DateTime.fromISO(age_val);
let currect_date = luxon.DateTime.now();

let diff = currect_date.diff(read, ["year", "month", "day"]).toObject;

let year = Math.floor(year);
let month = Math.floor(month);
let day = Math.floor(day);

document.querySelector(".display").innerHTML =
  `Your ag is ${year}years ${month}month ${day}day`;
