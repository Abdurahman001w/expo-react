import React from "react";
import matiz from "./assets/images/matis.png";
import tayota from "./assets/images/Toyota-Camry.png";
import mersedes from "./assets/images/pngwin2.png";
import priora from "./assets/images/pngwin.png";
import bmwx3 from "./assets/images/pngwin3.png";

const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
const positive = array.filter((item) => {
  return item > 0;
});

const words = ["экспо", "js", "react", "css", "angular", "vue", "html"];
const messages = [
  { message: "hello", error: true },
  { message: "javascript", error: false },
  { message: "expovisiov", error: true },
  { message: "react", error: true },
  { message: "angular", error: false },
  { message: "es6", error: false },
];

let cars = [
  {
    img: mersedes,
    model: "mers",
    price: 560000,
    amout: 3,
  },

  { img: bmwx3, model: "Bmw", price: 7600000, amout: 2 },
  {
    img: priora,
    model: "Priora",
    price: 1560000,
    amout: 1,
  },
  {
    img: tayota,
    model: "Camry",
    price: 5100000,
    amout: 19,
  },
  {
    img: matiz,
    model: "MatizTurboSport500",
    price: 5600000,
    amout: 10,
  },
];
//function sendMessage(message=> {
//})
//function half(number => {return number /2})
//const showConsole = () => console.log("Экспо");
//function concatWords =(first, second) => first + second;
//function justText() {
// return "expo";
//}

//function logging(text) {
// console.log(text);
//}

//function add(x, y) {
// const z = 3;

// return z * x * y;
//}

//function onlyPositive(number) {
//if (number < 0) {
//return false;
//}
//
// return true;
//}

function App() {
  const part = messages.filter((item) => !item.error);
  console.log(part);

  const wordPart = words.map((item) => {
    if (item.length < 5) {
      return "*";
    } else {
      return item;
    }
  });
  console.log(wordPart);

  return (
    <div className="container ">
      <p>{positive}</p>

      {carsPrice.map((car) => {
        return (
          <div className="flex">
            {<img src={car.img} alt="car" className="title-logo" />}
            <p className=" title-logo">Model: {car.model}</p>
            <p className=" title-logo">Price: {car.price}</p>
            <p className=" title-logo">Amout: {car.amout}</p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
