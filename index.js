function logTwoValues(value1, value2) {
  console.log(`The two values are ${value1} and ${value2}.`);
}

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }

  function introduction(name)
  {
  return `Hi, my name is ${name}.`;
  }
  function introductionWithLanguage(name, language)
  {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }
  function introductionWithLanguageOptional(name, language="JavaScript")
  {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  } 