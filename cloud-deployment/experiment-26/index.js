function add(a, b) {
  return a + b;
}

module.exports = add;

// Run directly for demo
if (require.main === module) {
  console.log("Result:", add(2, 3));
}
