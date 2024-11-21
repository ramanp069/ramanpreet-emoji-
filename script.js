// Array of emojis with their decimal references
const emojis = [
    { symbol: "&#128512;", code: "128512" }, // Grinning face
    { symbol: "&#128525;", code: "128525" }, // Heart eyes
    { symbol: "&#128513;", code: "128513" }, // Grinning face with big eyes
    { symbol: "&#128540;", code: "128540" }, // Stuck-out tongue wink
    { symbol: "&#128515;", code: "128515" }, // Beaming face with smiling eyes
    { symbol: "&#128170;", code: "128170" }, // Flexed biceps
    { symbol: "&#127774;", code: "127774" }, // Sun
    { symbol: "&#128663;", code: "128663" }, // Car
    { symbol: "&#128081;", code: "128081" }, // Crown
    { symbol: "&#127800;", code: "127800" }, // Cherry blossom
    { symbol: "&#129409;", code: "129409" }, // Lion face
    { symbol: "&#128578;", code: "128578" }, // Slightly smiling face
  ];
  
  // Select the gallery container
  const gallery = document.getElementById("emoji-gallery");
  
  // Loop through the emoji array and add each emoji to the gallery
  emojis.forEach((emoji) => {
    // Create a div for each emoji item
    const emojiItem = document.createElement("div");
    emojiItem.classList.add("emoji-item");
  
    // Create the emoji span
    const emojiSpan = document.createElement("span");
    emojiSpan.classList.add("emoji");
    emojiSpan.innerHTML = emoji.symbol;
  
    // Create the code paragraph
    const codeParagraph = document.createElement("p");
    codeParagraph.classList.add("code");
    codeParagraph.textContent = emoji.code;
  
    // Append the emoji and code to the emoji item
    emojiItem.appendChild(emojiSpan);
    emojiItem.appendChild(codeParagraph);
  
    // Add the emoji item to the gallery
    gallery.appendChild(emojiItem);
  });