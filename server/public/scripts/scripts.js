$(document).ready(function () {
  console.log("ready!");
  getHistory();
  $("#calculator").on("submit", calculate);
});

function calculate(evt) {
  evt.preventDefault();
  let sendInfo = {
    //data object
    num1: Number($("#num1").val()),
    operatorSelector: $("#operatorSelector").val().toString(),
    num2: Number($("#num2").val()),
  };

  $.ajax({
    url: "/calculate",
    method: "POST",
    data: sendInfo,
  })
    .then(() => {
      console.log("post success", sendInfo);
      getHistory();
      clearInputs();
    })
    .catch((err) => {
      console.log("Fuck...", err);
    });
}

function getHistory() {
  $.ajax({
    url: "/history",
    method: "GET",
  })
    .then((response) => {
      displayHistory(response);
    })
    .catch((err) => {
      console.log("Shit....", err);
    });
}

function displayHistory(arr) {
  $("#historyList").empty();
  for (let item of arr) {
    $("#historyList").append(`
      <li>${item.num1} ${item.operatorSelector} ${item.num2} = ${item.output}</li>
      `);
  }
}

function clearInputs() {
  $("#num1").val("");
  $("#num2").val("");
}
