putOnTheShades(["h3", ".gs-u-align-bottom"], ["backgroundColor", "borderColor", "color"]);

function putOnTheShades(textTags, colorTags) {
  changeTheText(textTags);
  changeTheColors(colorTags);
}

function changeTheText(tags) {
  document.querySelectorAll(tags.join()).forEach(element => {
    element.innerText = randomMessage();
  });
}

function changeTheColors(tags) {
  document.querySelectorAll("*").forEach(element => {
    grayscale(element, tags);
  });
}

function randomMessage() {
  const messages = ["OBEY","MARRY AND REPRODUCE","NO INDEPENDENT THOUGHT","CONSUME","CONFORM","SUBMIT","STAY ASLEEP","BUY","WATCH TV","NO IMAGINATION","DO NOT QUESTION AUTHORITY"];
  return messages[Math.floor(Math.random() * messages.length)];
}

function grayscale(element, tags) {

  tags.forEach(tag => {
    if (window.getComputedStyle(element)[tag] !== "rgba(0, 0, 0, 0)") {
      element.style[tag] = makeGrayscale(window.getComputedStyle(element)[tag]);
    };
  })
}

function makeGrayscale(rgb) {
  const colors = extractColors(rgb);
  const average = averageGrey(colors);
  return "rgba(" + average + ", " + average + ", " + average + ", " + colors.alpha + ")";
}

function extractColors(color) {
  const colors = color.match(/\((.*?)\)$/)[1].split(', ');
  return {
    red: parseInt(colors[0]),
    green: parseInt(colors[1]),
    blue: parseInt(colors[2]),
    alpha: parseInt(colors[3]) || 100
  }
}

function averageGrey(colors) {
  return Math.floor((colors.red + colors.green + colors.blue) / 3)
}

// module.exports = {
//   makeGrayscale: makeGrayscale,
//   extractColors: extractColors,
//   averageGrey: averageGrey
// };