
// Dynamic Programming Javascript implementation
// to find minimum number of deletions and
// insertions

// Returns length of length common
// subsequence for str1[0..m-1],
// str2[0..n-1]
function lcs(str1, str2, m, n) {
  let L = new Array(m + 1);

  let i, j;

  for (i = 0; i <= m; i++) {
    L[i] = new Array(n + 1);
    for (j = 0; j <= n; j++) {
      L[i][j] = 0;
    }
  }

  // Following steps build L[m+1][n+1] in
  // bottom up fashion. Note that L[i][j]
  // contains length of LCS of str1[0..i-1]
  // and str2[0..j-1]
  for (i = 0; i <= m; i++) {
    for (j = 0; j <= n; j++) {
      if (i == 0 || j == 0)
        L[i][j] = 0;

      else if (str1[i - 1]
        == str2[j - 1])
        L[i][j] = L[i - 1][j - 1] + 1;

      else
        L[i][j] = Math.max(L[i - 1][j],
          L[i][j - 1]);
    }
  }

  // L[m][n] contains length of LCS
  // for X[0..n-1] and Y[0..m-1]
  return L[m][n];
}

// function to find minimum number
// of deletions and insertions
function printMinDelAndInsert(str1, str2) {
  let m = str1.length;
  let n = str2.length;

  let len = lcs(str1, str2, m, n);

  console.log("Minimum number of "
    + "deletions = ");
  console.log((m - len));

  console.log("Minimum number of "
    + "insertions = ");
  console.log((n - len));
}

let str1 = "heap";
let str2 = "pea";

// Function Call
printMinDelAndInsert(str1, str2);

