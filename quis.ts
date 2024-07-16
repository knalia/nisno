interface ValueContainer {
  value: number[];
}

let v1: ValueContainer = {
  value: [1, 2, 3]
};

let v2: ValueContainer = {
  value: [4, 5, 6]
};

let combined: ValueContainer = {
  value: [...v1.value, ...v2.value]
};

console.log(combined.value); // Output: [1, 2, 3, 4, 5, 6]
