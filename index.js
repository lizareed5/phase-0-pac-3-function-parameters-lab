function introduction(firstName = "Aki") {
    return (`Hi, my name is ${firstName}.`);
  }
  function introductionWithLanguage(firstName, language = "Ember.js") {
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`)
  }
  function introductionWithLanguageOptional(firstName = "Gracie", language = "JavaScript") {
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`)
  }