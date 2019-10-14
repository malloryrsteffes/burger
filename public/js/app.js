//Click event for adding a burger.
$(".create-form").on("submit", function (event) {
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
        function () {
            console.log("Burger Added!");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(".eat-burger").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = {
        devoured: "true"
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
    }).then(
        function () {
            console.log("Burger eaten!");
            location.reload();
        }
    )
})