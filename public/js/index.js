$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var eaten = $(this).data("eaten");

    var eatenState = {
      devoured: eaten,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState,
    }).then(function () {
      console.log("changed devoured to", eaten);

      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");

      location.reload();
    });
  });
});
