/* eslint-disable */
import "bootstrap";
import "./style.css";

executeProgram();

const executeProgram = () => {
  window.onload = () => {
    //write your code here
    document.querySelector("#generate-btn").addEventListener("click", () => {
      const domainName = getDomainName();
      addExtension(domainName);
      document.querySelector("#listOfDomains").innerHTML = showListOfDomains(5);
      document.querySelector("#listOfDomains").innerHTML = domainNames.join(
        "<br>"
      );
    });
  };
};

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

const constructDomainName = (
  selectedPronoun,
  selectedAdjective,
  selectedNoun
) => {
  return `${selectedPronoun}${selectedAdjective}${selectedNoun}`;
};

const addExtension = domainName => {
  extensions.forEach(ext => {
    domainNames.push(`${domainName}${ext}`);
  });
};

const getDomainName = () => {
  const selectedPronoun = getPronoun(pronouns);
  const selectedAdjective = getAdjective(adjectives);
  const selectedNoun = getNoun(nouns);
  const domainName = constructDomainName(
    selectedPronoun,
    selectedAdjective,
    selectedNoun
  );
  return domainName;
};

const showListOfDomains = (maxCount = domainNames.length) => {
  const listItems = domainNames
    .slice(0, maxCount)
    .map((domainName, index) => `<li>${index + 1}. ${domainName}</li>`);
  const list = `<ul>${listItems.join("")}</ul>`;
  return list;
};
