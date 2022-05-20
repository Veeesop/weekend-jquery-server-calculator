$(document).ready(function () {
  console.log("ready!");
});

function calculate() {
  let sendInfo = {
    //data object
    num1: Number($("#num1").val()),
    operatorSelector: $("#operatorSelector").val(),
    num2: Number($("#num2").val()),
  };

  $.ajax({
    url: "/calculate",
    method: "POST",
    data: sendInfo,
  })
    .then(() => {
      console.log("post success");
      res.sendStatus();
    })
    .catch((err) => {
      console.log("Fuck...", err);
    });
}
