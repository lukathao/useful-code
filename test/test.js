class store {
  shelf;
  constructor() {
    this.shelf = {};
  }

  add(aisle, category, v) {
    this.shelf[aisle] = { ...this.shelf[aisle], [category]: v }
  }

  get(aisle, category) {
    if (this.shelf[aisle]) {
      if (this.shelf[aisle][category]) {
        return this.shelf[aisle][category];
      }
    }
    return null;
  }

  remove(aisle, category) {
    if (this.shelf[aisle]) {
      if (this.shelf[aisle][category]) {
        delete this.shelf[aisle][category];
        return true;
      }
    }
    return false;
  }

  listByCategory(category) {
    const result = Object.keys(this.shelf).map((key) => [key, this.shelf[key]]);
    const filtered = result.filter(function (mem) {
      return (category in mem[1]);
    });
    return filtered;
  };

  getAllCategories(category) {
    const result = Object.keys(this.shelf).map((key) => [key, this.shelf[key]]);
    let arr = [];
    for (const k in result) {
      if (category in result[k][1]) {
        arr.push(result[k][1][category]);
      }
    }
    console.log(arr);
  }
}

let target = new store();
target.add("A1", "C1", "shampoo");
target.add("A1", "C1", "brush");
target.add("A1", "C2", "toothpaste");
target.add("E2", "C1", "comb");
target.add("E2", "C1", "toothpick");
target.add("E2", "C2", "flyswatter");
target.add("E3", "C2", "rubbing alcohol");
target.add("E4", "C2", "rubber band");
console.log("target");
console.log(target);
console.log("getting all fields");
target.listByCategory("C1");
target.getAllCategories("C1");
