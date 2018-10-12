const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
	const p = document.querySelector('p');
	p.innerHTML = "<a href=\"https://imgflip.com/i/2juom6\"><img src=\"https://i.imgflip.com/2juom6.jpg\" title=\"made at imgflip.com\"/></a>";
}
let p = document.querySelector('p');
// Regular
console.log("hello");

// Interpolated
console.log("That is so", "fetch");

// Styled
console.log('%c big leage fetch', 'font-size:50px; color:#FF69B4');
// warning!
console.warn('hold up!');

// Error :|
console.error('You really did it this time');

// Info
console.info('It\'s possible to lead a cow upstairs...but not downstairs.');

// Testing
console.assert(1 ===2, 'danger will robinson');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();
console.log('%c big leage fetch', 'font-size:50px; color:#FF69B4');
// Grouping together

// counting

// timing
