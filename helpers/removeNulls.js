// Function to remove null values
function removeNulls(obj) {
    if (Array.isArray(obj)) {
      return obj
        .map(removeNulls)  // Recursively apply to each element in the array
        .filter(value => value !== null);  // Filter out null values
    } else if (obj !== null && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj)
          .map(([k, v]) => [k, removeNulls(v)])  // Recursively apply to each key-value pair in the object
          .filter(([_, v]) => v !== null)  // Filter out entries where the value is null
      );
    }
    return obj;  //
}

module.exports = {
    removeNulls
};