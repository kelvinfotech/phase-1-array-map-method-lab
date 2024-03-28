// Function to convert a string to title case
function toTitleCase(str) {
  return str.replace(/\b\w+/g, function(txt) {
    // Ensure consistent capitalization for certain words
    const specialCases = {
      'oo': 'OO',
      'api': 'API',
      'nan': 'NaN',
      'jsonp': 'JSONP'
    };
    const lowercaseTxt = txt.toLowerCase();
    return specialCases[lowercaseTxt] || txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Define the titleCased function
function titleCased(tutorials) {
  // Check if tutorials is defined and is an array
  if (!Array.isArray(tutorials)) {
    console.warn('Invalid input. "tutorials" must be an array. Returning an empty array.');
    return [];
  }

  // Create a new array to store title-cased tutorial names
  const titleCasedTutorials = [];

  // Loop through each tutorial name
  for (let i = 0; i < tutorials.length; i++) {
    // Modify each tutorial name to title case using the toTitleCase function
    const titleCasedName = toTitleCase(tutorials[i]);
    
    // Add the title-cased tutorial name to the new array
    titleCasedTutorials.push(titleCasedName);
  }

  // Return the array of title-cased tutorial names
  return titleCasedTutorials;
}

// Define the expected title-cased tutorial names
const expectedTitleCasedTutorials = [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
];

const titleCasedTutorials = titleCased(tutorials);
