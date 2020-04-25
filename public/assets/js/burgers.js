$(function () {
  $(".devour-btn").on("click", function (event) {
    var id = $(this).data("id");
    console.log(id);

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: id,
    }).then(function () {
      console.log(id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: false,
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });
});
