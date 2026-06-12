const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
const prices = document.querySelectorAll(".price");

  let total = 0;

  prices.forEach((price) => {
    total += Number(price.innerText);
  });

  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.innerText = total;
  td.colSpan = 2;

  tr.appendChild(td);

  document.querySelector("table").appendChild(tr);

  getSumBtn.disabled = true;
  
};

getSumBtn.addEventListener("click", getSum);

