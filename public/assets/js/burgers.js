
$(function() {
	




	$(".create-form").on("submit", function(event) {
	  event.preventDefault();
  
	  var newBurger = {
		burger_name: $("#burger").val().trim(),
		devoured: false
	  };
  
	  $.ajax("/api/burger", {
		type: "POST",
		data: newBurger
	  }).then(
		function() {
		  console.log("created new burger");
		  location.reload();
		}
	  );
	});
  });