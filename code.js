var submitButton = document.getElementById("submit");

// Attach events to submit button
submitButton.addEventListener("click", function() {

    var checkbox = document.getElementById("checkbox"),
        checkbox2 = document.getElementById("checkbox2"),
        textAreaValue = document.getElementById("textarea").value,
        textAreaLength = textAreaValue.length,
        i = 0;

    for (i; i < textAreaLength; i++) {
        console.log(textAreaValue[i]);
    }

});
