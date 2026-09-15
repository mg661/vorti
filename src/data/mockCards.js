export const MOCK_CARDS = [
  // English Basics
  {
    id: 1,
    set_id: 1,
    front: "negotiate",
    example: "We need to negotiate the terms of the contract before signing.",
    back: "negocjować",
    meaning: "To discuss something in order to reach an agreement.",
    mastered: false,
  },
  {
    id: 2,
    set_id: 1,
    front: "appointment",
    example: "I have a doctor's appointment tomorrow morning.",
    back: "wizyta / spotkanie",
    meaning: "An arrangement to meet someone at a particular time.",
    mastered: false,
  },
  {
    id: 3,
    set_id: 1,
    front: "reliable",
    example: "She is very reliable and always keeps her promises.",
    back: "niezawodny / godny zaufania",
    meaning:
      "Someone or something that can be trusted to work well or behave as expected.",
    mastered: false,
  },
  {
    id: 4,
    set_id: 1,
    front: "afford",
    example: "I can't afford to buy a new car right now.",
    back: "móc sobie pozwolić",
    meaning: "To have enough money to pay for something.",
    mastered: false,
  },
  {
    id: 5,
    set_id: 1,
    front: "improve",
    example: "I want to improve my English before traveling abroad.",
    back: "poprawiać",
    meaning: "To make something better.",
    mastered: false,
  },
  {
    id: 6,
    set_id: 1,
    front: "schedule",
    example: "Let me check my schedule before I confirm the meeting.",
    back: "harmonogram / planować",
    meaning:
      "A plan that shows when activities or events will happen.",
    mastered: false,
  },
  {
    id: 7,
    set_id: 1,
    front: "borrow",
    example: "Can I borrow your laptop for a few hours?",
    back: "pożyczyć",
    meaning:
      "To take and use something that belongs to someone else with the intention of returning it.",
    mastered: false,
  },
  {
    id: 8,
    set_id: 1,
    front: "although",
    example: "Although it was raining, we went for a walk.",
    back: "chociaż / mimo że",
    meaning: "Used to introduce a contrast or unexpected fact.",
    mastered: false,
  },
  {
    id: 9,
    set_id: 1,
    front: "opportunity",
    example: "This job is a great opportunity to gain experience.",
    back: "okazja / możliwość",
    meaning:
      "A favorable situation that makes it possible to do something.",
    mastered: false,
  },
  {
    id: 10,
    set_id: 1,
    front: "confident",
    example: "She feels confident about her English exam.",
    back: "pewny siebie",
    meaning: "Feeling sure about your abilities or decisions.",
    mastered: false,
  },

  // JavaScript Fundamentals
  {
    id: 11,
    set_id: 2,
    front: "let",
    back: "Słowo kluczowe służące do deklarowania zmiennej o zasięgu blokowym.",
    meaning:
      "let pozwala tworzyć zmienne, których wartość może zostać później zmieniona.",
    mastered: false,
  },
  {
    id: 12,
    set_id: 2,
    front: "const",
    back: "Słowo kluczowe służące do deklarowania zmiennej, której nie można ponownie przypisać.",
    meaning:
      "const jest używane, gdy przypisanie do zmiennej nie powinno zostać zmienione.",
    mastered: false,
  },
  {
    id: 13,
    set_id: 2,
    front: "arrow function",
    example: "const add = (a, b) => a + b;",
    back: "funkcja strzałkowa",
    meaning: "A shorter syntax for writing functions in JavaScript.",
    mastered: false,
  },
  {
    id: 14,
    set_id: 2,
    front: "array",
    example: "const fruits = ['apple', 'banana', 'orange'];",
    back: "tablica",
    meaning: "An ordered collection of values.",
    mastered: false,
  },
  {
    id: 15,
    set_id: 2,
    front: "object",
    example: "const user = { name: 'John', age: 25 };",
    back: "obiekt",
    meaning:
      "A collection of key-value pairs used to represent structured data.",
    mastered: false,
  },
  {
    id: 16,
    set_id: 2,
    front: "map()",
    example: "const doubled = numbers.map(n => n * 2);",
    back: "map()",
    meaning:
      "A method that creates a new array by applying a function to every element.",
    mastered: false,
  },
  {
    id: 17,
    set_id: 2,
    front: "filter()",
    example: "const adults = users.filter(user => user.age >= 18);",
    back: "filter()",
    meaning:
      "A method that creates a new array containing elements that pass a condition.",
    mastered: false,
  },
  {
    id: 18,
    set_id: 2,
    front: "===",
    back: "ścisłe porównanie",
    meaning:
      "An operator that checks both value and type without type coercion.",
    mastered: false,
  },
  {
    id: 19,
    set_id: 2,
    front: "undefined",
    back: "undefined / niezdefiniowany",
    meaning:
      "A value that indicates that a variable has been declared but has not been assigned a value.",
    mastered: false,
  },
  {
    id: 20,
    set_id: 2,
    front: "Promise",
    example: "fetch('/api/users').then(response => response.json());",
    back: "Promise",
    meaning:
      "An object representing the eventual completion or failure of an asynchronous operation.",
    mastered: false,
  },

  // World Geography
  {
    id: 21,
    set_id: 3,
    front: "Capital of France",
    back: "Paris",
    meaning: "Paris is the capital and largest city of France.",
    mastered: false,
  },
  {
    id: 22,
    set_id: 3,
    front: "Capital of Japan",
    back: "Tokyo",
    meaning:
      "Tokyo is the capital and largest metropolitan area of Japan.",
    mastered: false,
  },
  {
    id: 23,
    set_id: 3,
    front: "Largest continent",
    back: "Asia",
    meaning:
      "Asia is the largest continent by both area and population.",
    mastered: false,
  },
  {
    id: 24,
    set_id: 3,
    front: "Largest ocean",
    back: "Pacific Ocean",
    meaning:
      "The Pacific Ocean is the largest and deepest ocean on Earth.",
    mastered: false,
  },
  {
    id: 25,
    set_id: 3,
    front: "Highest mountain",
    back: "Mount Everest",
    meaning:
      "Mount Everest is the highest mountain above sea level.",
    mastered: false,
  },
  {
    id: 26,
    set_id: 3,
    front: "Capital of Australia",
    back: "Canberra",
    meaning: "Canberra is the capital city of Australia.",
    mastered: false,
  },
  {
    id: 27,
    set_id: 3,
    front: "Largest country by area",
    back: "Russia",
    meaning:
      "Russia is the world's largest country by total area.",
    mastered: false,
  },
  {
    id: 28,
    set_id: 3,
    front: "Sahara Desert",
    back: "Africa",
    meaning:
      "The Sahara is the largest hot desert in the world and is located in North Africa.",
    mastered: false,
  },
  {
    id: 29,
    set_id: 3,
    front: "Capital of Canada",
    back: "Ottawa",
    meaning: "Ottawa is the capital city of Canada.",
    mastered: false,
  },
  {
    id: 30,
    set_id: 3,
    front: "Amazon River",
    back: "South America",
    meaning:
      "The Amazon River flows through South America and has the largest drainage basin in the world.",
    mastered: false,
  },

  // Modern History
  {
    id: 31,
    set_id: 4,
    front: "Start of World War I",
    back: "1914",
    meaning:
      "World War I began in 1914 following the assassination of Archduke Franz Ferdinand.",
    mastered: false,
  },
  {
    id: 32,
    set_id: 4,
    front: "End of World War I",
    back: "1918",
    meaning:
      "World War I ended in 1918 with the defeat of the Central Powers.",
    mastered: false,
  },
  {
    id: 33,
    set_id: 4,
    front: "Start of World War II",
    back: "1939",
    meaning:
      "World War II began in Europe in 1939 after Germany invaded Poland.",
    mastered: false,
  },
  {
    id: 34,
    set_id: 4,
    front: "End of World War II",
    back: "1945",
    meaning:
      "World War II ended in 1945 after the defeat of Germany and Japan.",
    mastered: false,
  },
  {
    id: 35,
    set_id: 4,
    front: "First person on the Moon",
    back: "Neil Armstrong",
    meaning:
      "Neil Armstrong became the first person to walk on the Moon in 1969.",
    mastered: false,
  },
  {
    id: 36,
    set_id: 4,
    front: "Moon landing",
    back: "1969",
    meaning:
      "Apollo 11 successfully landed humans on the Moon in July 1969.",
    mastered: false,
  },
  {
    id: 37,
    set_id: 4,
    front: "Fall of the Berlin Wall",
    back: "1989",
    meaning:
      "The Berlin Wall fell in November 1989, becoming a major symbol of the end of the Cold War.",
    mastered: false,
  },
  {
    id: 38,
    set_id: 4,
    front: "Cold War",
    back: "1947–1991",
    meaning:
      "A period of geopolitical tension primarily between the United States and the Soviet Union.",
    mastered: false,
  },
  {
    id: 39,
    set_id: 4,
    front: "First president of the United States",
    back: "George Washington",
    meaning:
      "George Washington served as the first President of the United States.",
    mastered: false,
  },
  {
    id: 40,
    set_id: 4,
    front: "French Revolution",
    back: "1789",
    meaning:
      "A major political and social revolution that began in France in 1789.",
    mastered: false,
  },
];
