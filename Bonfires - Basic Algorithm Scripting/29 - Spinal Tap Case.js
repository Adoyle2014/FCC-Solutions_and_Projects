function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase().split(/[^a-z]/).join('-');
}

spinalCase('This Is Spinal Tap');