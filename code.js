"use strict";

var submitButton = document.getElementById("submit");

// Attach events to submit button
submitButton.addEventListener("click", function(e) {

    // Prevent button default action
    e.preventDefault();

    // Variable declaration
    var isFirstCheckboxActive = document.getElementById("checkbox").checked,
        isSecondCheckboxActive = document.getElementById("checkbox2").checked,
        resultsDiv = document.getElementById("results"),
        textAreaString = document.getElementById("textarea").value,
        textAreaLength = textAreaString.length,
        numberOfChars = 0,
        numberOfLines,
        numberOfWords,
        averageWordLength,
        listOfWords,
        listOfWordsAndFreq = [], // Array to store [{frequency: int, word: "str"}, ...]
        frequency = 1,
        i = 0;

    // Get number of lines
    numberOfLines = textAreaString.split("\n").length;

    // Replace non alphabetic characters with whitespace
    for (i; i < textAreaLength; i++) {
        if (textAreaString[i].toUpperCase() === textAreaString[i].toLowerCase()) {
            textAreaString = textAreaString.replace(textAreaString[i], " ");
        }
    }

    // Split string by whitespace to get words and store them in an array
    listOfWords = textAreaString.replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '').trim().split(' ').sort();

    // Get number of words
    numberOfWords = listOfWords.length;

    // Count number of occurrences and store in key:value array listOfWordsAndFreq
    for (i = 0; i < numberOfWords; i++) {
        if ((i + 1) < numberOfWords && listOfWords[i] === listOfWords[i + 1]) {
            frequency++;
        }
        else {
            listOfWordsAndFreq.push({
                "freq": frequency,
                "word": listOfWords[i]
            });
            frequency = 1; // reset variable for next word
        }

        // Get total number of characters
        numberOfChars += listOfWords[i].length;
    }

    averageWordLength = Math.floor(numberOfChars / numberOfWords);

    // Show results in console
    console.log("Words: " + listOfWords);
    console.log("Number of words: " + numberOfWords);
    console.log("Number of lines: " + numberOfLines);
    console.log("Average word length: " + averageWordLength);
    for (i = 0; i < listOfWordsAndFreq.length; i++) {
        console.log(listOfWordsAndFreq[i].freq + " occurrences of '" + listOfWordsAndFreq[i].word + "'");
    };
    console.log("---------------------");

});
