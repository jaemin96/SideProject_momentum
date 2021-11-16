const quotes = [
  { id: 1, quote: "Do Best", name: "Bess" },
  { id: 2, quote: "Do Worst", name: "Wos" },
  { id: 3, quote: "You Can Finish", name: "Fin" },
  { id: 4, quote: "Hurry up", name: "Here" },
  { id: 5, quote: "Collect Money", name: "John" },
  { id: 6, quote: "Make be Happy", name: "Smile" },
];

const Quote = document.querySelector("#quoteForm #quote");
const Name = document.querySelector("#quoteForm #name");

const rep_quotes = () => {
  const random_Num = Math.floor(Math.random() * 6) + 1;
  quotes.map((item) => {
    if (random_Num === item.id) {
      Quote.innerText = `${item.quote}`;
      Name.innerText = `/ ${item.name}`;
    }
  });
};

rep_quotes();
setInterval(rep_quotes, 10000);
