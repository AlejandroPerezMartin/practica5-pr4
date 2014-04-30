"use strict";

var submitButton = document.getElementById("submit");

// Attach events to submit button
submitButton.addEventListener("click", function(e) {

    // Prevent button default action
    e.preventDefault();

    // Variable declaration
    var isFirstCheckboxActive = document.getElementById("checkbox").checked,
        isSecondCheckboxActive = document.getElementById("checkbox2").checked,
        textAreaString = document.getElementById("textarea").value,
        textAreaLength = textAreaString.length,
        listOfWordsAndFreq = [], // Array to store [{frequency: int, word: "str"}, ...]
        numberOfChars = 0,
        outputItems = [],
        frequency = 1,
        numberOfWords,
        numberOfLines,
        listOfWords,
        outputHtml,
        i = 0;

    // Get number of lines
    numberOfLines = textAreaString.split("\n").length;

    // Replace non alphabetic characters with whitespace
    for (i; i < textAreaLength; i++) {
        if (textAreaString[i].toUpperCase() === textAreaString[i].toLowerCase()) {
            textAreaString = textAreaString.replace(textAreaString[i], " ");
        }
    }

    // Remove duplicated whitespaces and split string by whitespace to get words and store them in an array
    listOfWords = textAreaString.replace(/\s+/g, " ").replace(/^\s+|\s+$/, "").trim().split(" ").sort();

    // Get number of words
    numberOfWords = listOfWords.length;

    // Count number of occurrences and store in key:value array listOfWordsAndFreq
    for (i = 0; i < numberOfWords; i++) {
        if ((i + 1) < numberOfWords && listOfWords[i] === listOfWords[i + 1]) {
            // If current word is equal to previous one, increment number of occurrences by 1
            frequency++;
        }
        else {
            // If current word matches its previous one, current word and its number of occurrences is stored in the array
            listOfWordsAndFreq.push({
                "freq": frequency,
                "word": listOfWords[i]
            });
            frequency = 1; // reset occurrences for next word
        }

        // Get total number of characters
        numberOfChars += listOfWords[i].length;
    }

    // Show results only if second checkbox is checked
    if (isSecondCheckboxActive) {
        outputItems.push("<li>Average word length: <span>" + Math.floor(numberOfChars / numberOfWords) + "</span></li>");
        outputItems.push("<li>Number of words: <span>" + numberOfWords + "</span></li>");
        outputItems.push("<li>Number of lines: <span>" + numberOfLines + "</span></li>");
    }

    // Generate output
    outputHtml = "<ul>";

    i = 0;
    for (i; i < outputItems.length; i++) {
        outputHtml += outputItems[i];
    }

    outputHtml += "</ul>";

    // Write output in results div
    document.getElementById("results").innerHTML = outputHtml;

});
