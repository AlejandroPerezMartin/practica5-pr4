"use strict";

var submitButton = document.getElementById("submit");

// Attach events to submit button
submitButton.addEventListener("click", function() {
    
    // Variable declaration
    var checkbox = document.getElementById("checkbox"),
        checkbox2 = document.getElementById("checkbox2"),
        textAreaValue = document.getElementById("textarea").value,
        textAreaLength = textAreaValue.length,
        numberOfLines,
        numberOfWords,
        separatedWords,
        averageWordLength,
        numberOfChars = 0,
        i = 0;

    // Get number of lines
    numberOfLines = textAreaValue.split("\n").length;

    // Replace non alphabetic characters with whitespace
    for (i; i < textAreaLength; i++) {
        if (textAreaValue[i].toUpperCase() === textAreaValue[i].toLowerCase()) {
            textAreaValue = textAreaValue.replace(textAreaValue[i], " ");
        }
    }

    // Split string by whitespace to get words and store them in an array
    separatedWords = textAreaValue.replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '').trim().split(' ');

    // Get number of words
    numberOfWords = separatedWords.length;

    // Get total number of characters
    averageWordLength = separatedWords.forEach(function(word) {
        numberOfChars += word.length;
    });

    // Show results in console
    console.log("Words: " + separatedWords);
    console.log("Number of words: " + numberOfWords);
    console.log("Number of lines: " + numberOfLines);
    console.log("Average word length: " + Math.floor(numberOfChars / numberOfWords));

});
