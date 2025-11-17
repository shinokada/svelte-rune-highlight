const items = [
  { id: 1, title: "Book", price: 12 },
  { id: 2, title: "Pen", price: 3 },
  { id: 3, title: "Laptop", price: 999 },
  { id: 4, title: "Bag", price: 45 }
];

const titles = items.map(i => i.title);
const prices = items.map(i => i.price);
const expensive = items.filter(i => i.price > 20);
const total = prices.reduce((a, b) => a + b, 0);
const capped = items.map(i => ({ ...i, capped: i.price > 50 }));

console.log(titles);
console.log(prices);
console.log(expensive);
console.log(total);
console.log(capped);
