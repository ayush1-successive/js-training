// Write a program to display Diamond Pattern

// Generates diamond pattern of given length
function diamondPattern(diamondLength) {
  const generateDiamondInCurrentLine = (diamondsInCurrentLine, maxDiamonds) => {
    gapBeforeStartingDiamond = maxDiamonds - diamondsInCurrentLine;

    currentDiamondLine =
      " ".repeat(gapBeforeStartingDiamond) + "* ".repeat(diamondsInCurrentLine);
    return currentDiamondLine;
  };

  for (let i = 1; i < diamondLength; i++)
    console.log(generateDiamondInCurrentLine(i, diamondLength));

  for (let i = diamondLength; i >= 0; i--)
    console.log(generateDiamondInCurrentLine(i, diamondLength));
}

diamondPattern(5);
