/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
executeProgram();
function executeProgram() {
  window.onload = () => {
    //write your code here
    document.querySelector("#generate-btn").addEventListener("click", () => {
      const selectedPronoun = getPronoun(pronouns);
      const selectedAdjective = getAdjective(adjectives);
      const selectedNoun = getNoun(nouns);
      const domainName = getDomainName(
        selectedPronoun,
        selectedAdjective,
        selectedNoun
      );
      addExtension(domainName);
      document.querySelector("#listOfDomains").innerHTML = showListOfDomains();

      addExtension(domainName);
      document.querySelector("#listOfDomains").innerHTML = domainNames.join(
        "<br>"
      );
    });
  };
}

const pronouns = ["the", "our", "my"];
const adjectives = ["great", "big", "wow", "best"];
const nouns = ["jogger", "racoon", "company", "world"];
const extensions = [".com", ".net", ".us", ".io"];

const domainNames = [];

const getPronoun = pronouns => {
  return pronouns[Math.floor(Math.random() * pronouns.length)];
};

const getAdjective = adjecives => {
  return adjecives[Math.floor(Math.random() * adjecives.length)];
};

const getNoun = nouns => {
  return nouns[Math.floor(Math.random() * nouns.length)];
};

const getDomainName = (selectedPronoun, selectedAdjective, selectedNoun) => {
  return `${selectedPronoun}${selectedAdjective}${selectedNoun}`;
};

const addExtension = domainName => {
  extensions.forEach(ext => {
    domainNames.push(`${domainName}${ext}`);
  });
};

const showListOfDomains = () => {
  console.log(domainNames.join("\n"));
};
