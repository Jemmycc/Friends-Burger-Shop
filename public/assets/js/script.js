$(function () {

    $("#addburger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger: $("#addburger [name=burger]").val().trim()
        };

        if (newBurger.burger === "") {
            alert("Please enter a burger name.");
            return;
        }

        $.ajax("/burgers/create", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // console.log("added new burger");
                location.reload();
            }
        );
    });

    $(".devourburger").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/burgers/update/" + id, {
            type: "PUT",
            data: "id"
        }).then(
            function () {
                // console.log("updated id ", id);
                location.reload();
            }
        );
    });

});