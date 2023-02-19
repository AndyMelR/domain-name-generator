/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log(domainNames);
};

const pronouns = ["the", "our"];
const adjectives = ["great", "big"];
const nouns = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io"];
const domainHacks = [".us"];

const domainNames = [];

pronouns.forEach(pronoun => {
  adjectives.forEach(adj => {
    nouns.forEach(noun => {
      const domainName = `${pronoun}${adj}${noun}`;

      // Add different extensions

      extensions.forEach(ext => {
        domainNames.push(`${domainName}${ext}`);
      });
    });
  });
});

const generateBtn = document.getElementById("generate-btn");
const domainList = document.getElementById("domain-list");

generateBtn.addEventListener("click", () => {
  domainList.innerHTML = "";
  domainNames.forEach(domain => {
    const listItem = document.createElement("li");
    listItem.textContent = domain;
    domainList.appendChild(listItem);
  });
});
