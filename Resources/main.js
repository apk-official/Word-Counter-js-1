"use strict";
let textInput = document.getElementById("input-text");
let wordCountResult = document.getElementById("wordCount");
let sentenceCountResult = document.getElementById("sentenceCount");
let paragraphCountResult = document.getElementById("paragraphCount");
let characterCountResult = document.getElementById("characterCount");
function wordCounter() {
  let words = textInput.value;
  let wordNum = words.split(" ");
  let wordCount = 0;
  for (let i = 0; i < wordNum.length; i++) {
    if (wordNum[i] !== "") {
      wordCount++;
    }
  }
  wordCountResult.innerHTML = wordCount;
}
function sentenceCounter() {
  let sentences = textInput.value;
  let sentenceNum;
  let numCount = 0;
  sentenceNum = sentences.split("");
  let sentenceCount = 0;
  for (let i = 0; i < sentenceNum.length; i++) {
    if (!isNaN(sentenceNum[i])) {
      numCount++;
    }
    if (sentenceNum[i] == ".") {
      if (i - 1 !== 0) {
        if (!isNaN(sentenceNum[i - 1] || sentenceNum[i + 1])) {
          sentenceCount = sentenceCount + 0;
        }
        if (sentenceNum[i - 1] && sentenceNum[i + 1] === ".") {
          sentenceCount = sentenceCount + 0;
        } else {
          sentenceCount++;
        }
      }
    }
  }
  sentenceCountResult.innerHTML = sentenceCount;
}
function paragraphCounter() {
  let paragraphs = textInput.value;
  let paragraphNum = paragraphs.split("");
  let paragraphCount = 0;

  for (let i = 0; i < paragraphNum.length; i++) {
    if (i - 1 !== 0) {
      if (paragraphNum[i - 1] === "\n") {
        paragraphCount++;
      }
    }
  }
  paragraphCountResult.innerHTML = paragraphCount;
}

function results() {
  wordCounter();
  sentenceCounter();
  paragraphCounter();
}
