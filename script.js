console.log('Hello World');

/*
Const - nøkkelord for å erklære variable
userName - funnet på variable navn
= - setter verdien
"yaye" - "String" verdi til variable
*/
const userName = 'yaye'; // Sting "Reddish pink"
console.log(userName);
let userAge = 28; // Number "Limeish Green"
let isPresent = true; // Boolean "Blue"
// var isPresent = true; = "var" Depricated, use "let"

// Regular Function
function character() {
  // Yellow name ^
  console.log('Hello from function');
  const characterName = 'Julius '; //Sting value
  let characterLevel = 9999; //Variable value
  let isOnline = false; //Boolean/binary value

  // Variable chaining / Variable knytting
  console.log(
    'Welcome back ' +
      characterName +
      'Level: ' +
      characterLevel +
      ' Online ' +
      isOnline
  );
  // Template litteral
  console.log(
    `Welcome back ${characterName} Level ${characterLevel} Online ${isOnline}`
  );
}

// Function call / Function trigger
character();

function hamburgerToggle() {
  // console.log('Hi from hamburgerToggle');

  const navListElement = document.querySelector('.navList'); //bevist brukt klasse for kun et element med det klassenavnet
  console.log(navListElement);

  // Metode 1, Skrive CSS i JS som blir inline-CSS
  navListElement.style.display = 'flex';
  navListElement.flexDirection = 'column';
  navListElement.alignItems = 'center';
  navListElement.justifyContents = 'center';

  // Metode 2, Endre aktivt klassenavn via external-CSS fil
  navListElement.classList.add('show');
  navListElement.classList.remove('hidden');
}

// Declare global rule nødvendig for type=module, men ikke nødvendig for defer
// globalThis.hamburgerToggle = hamburgerToggle;
