$(document).ready(function () {
  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      alert("Thanks for you question, We are callback!");
      $("#form").trigger("reset");
    });
    return false;
  });
});
