 //Click event for adding a burger.
 $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
    burger_name: $("#burgerName").val().trim(),
    devoured: 0
    };

    // Send the POST request using ajax.
    $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
    }).then(
    function() {
        console.log("Burger Added!");
        // Reload the page to get the updated list
        location.reload();
    }
    );
});