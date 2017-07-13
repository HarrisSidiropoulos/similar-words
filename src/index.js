/* eslint-disable class-methods-use-this, one-var, one-var-declaration-per-line */
function getEditDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];
  let i, j;
  // increment along the first column of each row
  for (i = 0; i <= b.length; i += 1) {
    matrix[i] = [i];
  }
  // increment each column in the first row
  for (j = 0; j <= a.length; j += 1) {
    matrix[0][j] = j;
  }
  // Fill in the rest of the matrix
  for (i = 1; i <= b.length; i += 1) {
    for (j = 1; j <= a.length; j += 1) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                           Math.min(matrix[i][j - 1] + 1, // insertion
                                  matrix[i - 1][j] + 1)); // deletion
      }
    }
  }
  return matrix[b.length][a.length];
}

class Dictionary {
  constructor(words) {
    this.words = words;
  }
  findMostSimilar(term) {
    this.words.sort((a, b) => getEditDistance(term, a) - getEditDistance(term, b));
    return this.words[0];
  }
}

export default Dictionary;
