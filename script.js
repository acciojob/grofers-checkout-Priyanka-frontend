const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.textContent = total;
  td.colSpan = 2; // optional, makes the total cell span columns

  tr.appendChild(td);

  document.querySelector("table").appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

