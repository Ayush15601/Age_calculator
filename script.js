import { DateTime } from "luxon";

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let age_val = document.querySelector(".getage").value;

  if (!age_val) {
    alert("Ener Age");
  }

  let read = DateTime.fromISO(age_val);
  let currect_date = DateTime.now();

  let diff = currect_date.diff(read, ["years", "months", "days"]).toObject();

  let year = Math.floor(diff.years);
  let month = Math.floor(diff.months);
  let day = Math.floor(diff.days);

  document.querySelector(".display").innerHTML =
    `Your age is ${year} years ${month} month ${day} day old`;
});
