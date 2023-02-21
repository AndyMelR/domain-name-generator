/* eslint-disable */
import "bootstrap";
import "./style.css";

executeProgram();

const pronouns = ["the", "our", "my"];
const adjectives = ["great", "big", "wow", "best"];
const nouns = ["jogger", "racoon", "company", "world"];
const extensions = [".com", ".net", ".us", ".io"];

const getDomainName = () => {
  const domainNameParts = [];

  pronouns.forEach(pronoun => {
    adjectives.forEach(adjective => {
      nouns.forEach(noun => {
        extensions.forEach(extension => {
          domainNameParts.push(`${pronoun}${adjective}${noun}${extension}`);
        });
      });
    });
  });

  return domainNameParts;
};

const listOfDomains = getDomainName()
  .map(domain => `<p>${domain}</p>`)
  .join("");

function executeProgram() {
  window.onload = function() {
    const generateButton = document.querySelector("#generate-btn");
    generateButton.addEventListener("click", () => {
      document.querySelector("#listOfDomains").innerHTML = listOfDomains;
    });
  };
}
