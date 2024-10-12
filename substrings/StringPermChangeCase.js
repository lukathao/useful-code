const str = 'aaB57';
const changeCase = function (S = '') {
  const res = []
  const helper = (ind = 0, current = '') => {
    if (ind >= S.length) {
      res.push(current)
      return
    }
    if (/[a-zA-Z]/.test(S[ind])) {
      helper(ind + 1, current + S[ind].toLowerCase())
      helper(ind + 1, current + S[ind].toUpperCase())
    } else {
      helper(ind + 1, current + S[ind])
    }
  }
  helper()
  return res
};
console.log(changeCase(str));