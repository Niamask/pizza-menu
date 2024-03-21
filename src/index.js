// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header(params) {
//   // const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
//   const style = {};
//   return (
//     <header className="header">
//       <h1 style={style}>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Menu(params) {
//   const pizzas = pizzaData;
//   // const pizzas = [];
//   const numPizzas = pizzas.length;
//   return (
//     <div className="menu">
//       <h2>Our menu</h2>

//       {numPizzas > 0 ? (
//         <>
//           <p>heloo</p>
//           <ul className="pizzas">
//             {pizzaData.map((pizza) => (
//               <Pizza pizzaObj={pizza} key={pizza.name} />
//             ))}
//           </ul>
//         </>
//       ) : (
//         <p>We're still working on our menu. Please come back later :)</p>
//       )}

//       {/* <Pizza
//         name="Pizza Spinaci"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="pizzas/spinaci.jpg"
//         price={10}
//       />
//       <Pizza
//         name="Pizza Prosciutto"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="pizzas/prosciutto.jpg"
//         price={20}
//       /> */}
//     </div>
//   );
// }

// function Pizza({ pizzaObj }) {
//   // console.log(props);

//   // if (pizzaObj.soldOut) return null;
//   return (
//     <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
//       <div>
//         <h3>{pizzaObj.name}</h3>
//         <p>{pizzaObj.ingredients}</p>
//         <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
//       </div>
//     </li>
//   );
// }

// function Footer(params) {
//   // return React.createElement("footer", null, "We're currently open!");

//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);
//   console.log(hour);

//   // if (hour >= openHour && hour <= closeHour) alert("we are open");
//   // else alert("sorry we are closed");

//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <Order openHours={openHour} closeHours={closeHour} />
//       ) : (
//         <p>
//           We're happy to welcome you between {openHour}:00 and {closeHour}:00
//         </p>
//       )}
//     </footer>
//   );
// }

// function Order({ openHours, closeHours }) {
//   return (
//     <div className="order">
//       <p>
//         We're open from {openHours}:00 to {closeHours}:00. Come visite us or
//         order online{" "}
//       </p>
//       <button className="btn">Order</button>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// :::::::::::::::::::::::::::::::::::::::::::::::::::: //
// /*
// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
//   const style = {};
//   return (
//     <header className="header">
//       <h1 style={style}>Fast React Pizza Co.</h1>
//     </header>
//   );
// }
// function Menu() {
//   const pizzas = [pizzaData];
//   const numPizzas = pizzas.length;
//   return (
//     // const pizzaD=pizzaData

//     <main className="menu">
//       <h2>Our menu</h2>

//       {numPizzas > 0 ? (
//         <>
//           <p>
//             Authentic Italian cuisine. 6 creative dishes to choose from. All
//             from our stone oven, all organic, all delicious.
//           </p>

//           <ul className="pizzas">
//             {pizzaData.map((pizza) => (
//               <Pizza pizzaObj={pizza} key={pizza.name} />
//             ))}
//           </ul>
//         </>
//       ) : (
//         <p>we're still working on our menu</p>
//       )}

//       <Pizza
//         name="Pizza Spinaci"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="pizzas/spinaci.jpg"
//         price={10}
//       />

//       <Pizza
//         name="Pizza Funghi"
//         ingredients="Tomato, mozarella, mushrooms, and onion"
//         photoName="pizzas/funghi.jpg"
//         price={12}
//       />

//     </main>
//   );
// }

// function Pizza({ pizzaObj }) {
//   console.log(pizzaObj);

//   // if (pizzaObj.soldOut) return null;

//   return (
//     <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
//       <div>
//         <h3>{pizzaObj.name}</h3>
//         <p>{pizzaObj.ingredients}</p>
//         <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
//       </div>
//     </li>
//   );
// }

// function Footer(props) {
//   console.log(props);
//   const hour = new Date().getHours();
//   console.log(hour);
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);
//   //   if (hour >= openHour && hour <= closeHour) alert("We are currently open!");
//   //   else alert("Sorry we are closed ");

//   return (
//     <footer className="footer">
//       {/* {new Date().toLocaleTimeString()}. We are currently open
//       {isOpen ? (
//         <Order closeHours={closeHour} openHours={openHour} />
//       ) : (
//         <p>
//           We're open between {openHour}:00 and {closeHour}:00.
//         </p>
//       )}
//     </footer>
//   );
// }

// function Order({ closeHours, openHours }) {
//   return (
//     <div className="order">
//       <p>
//         We're open from {openHours}:00 to {closeHours}:00 come visite us or
//         order online.
//       </p>
//       <button className="btn">Order</button>
//     </div>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// */

// // Challange #1
// const skills = [
//   {
//     skill: "HTML+CSS",
//     level: "advance",
//     color: "green",
//   },
//   {
//     skill: "JavaScript",
//     level: "advance",
//     color: "red",
//   },
//   {
//     skill: "Web Designe",
//     level: "advance",
//     color: "orange",
//   },
//   {
//     skill: "React",
//     level: "advance",
//     color: "pink",
//   },
//   {
//     skill: "Git and github",
//     level: "intermediate",
//     color: "yellow",
//   },
//   {
//     skill: "Flask",
//     level: "beginner",
//     color: "purple",
//   },
// ];

// function App() {
//   return (
//     <div className="two-card">
//       <div className="card">
//         <Avatar />
//         <div className="data">
//           <Intro />
//           <SkillList />
//         </div>
//       </div>
//       <div className="card  test">
//         <Profile />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="avatar-image.jpg" alt="Niama" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Niama SK</h1>
//       <p>
//         Le Lorem Ipsum est simplement du faux texte employé dans la composition
//         et la mise en page avant impression.
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   console.log(skills);

//   return (
//     <div className="skill-list">
//       {/* <Skill skill="React" emoji="💪🏻" color="green" />
//       <Skill skill="HTML + CSS" emoji="✌🏻" color="red" />
//       <Skill skill="JavaScript" emoji="🤌🏻" color="orange" />
//       <Skill skill="Flask" emoji="👍🏻" color="yellow" /> */}
//       {skills.map((sk) => (
//         <Skill skillObj={sk} key={sk.skill} />
//         // <Skill skill={sk.skill} color={sk.color} ghfhgf="gfhgf" />
//       ))}
//     </div>
//   );
// }

// function Skill({ skillObj }) {
//   //console.log({ skillObj });
//   console.log({ skillObj });

//   return (
//     <div className="skill" style={{ backgroundColor: skillObj.color }}>
//       <span>{skillObj.skill}</span>
//       <span>
//         {skillObj.level === "beginner"
//           ? "👶🏻"
//           : skillObj.level === "intermediate"
//           ? "👍🏻"
//           : "💪🏻"}
//       </span>
//     </div>
//   );
// }

// const user = {
//   name: "Hind",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };

// function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar1"
//         src={user.imageUrl}
//         alt={"Photo of " + user.name}
//         style={{ width: user.imageSize, height: user.imageSize }}
//       ></img>
//     </>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ----------------------------------------------------  //
// CHALLENGE #1
// import React from "react";
// import ReactDom from "react-dom/client";
// import "./index.css";

// const skills = [
//   {
//     skill: "HTML+CSS",
//     level: "advance",
//     color: "green",
//   },
//   {
//     skill: "JavaScript",
//     level: "advance",
//     color: "red",
//   },
//   {
//     skill: "Web Designe",
//     level: "advance",
//     color: "orange",
//   },
//   {
//     skill: "React",
//     level: "advance",
//     color: "pink",
//   },
//   {
//     skill: "Git and github",
//     level: "intermediate",
//     color: "yellow",
//   },
//   {
//     skill: "Flask",
//     level: "beginner",
//     color: "purple",
//   },
// ];

// function App(params) {
//   return (
//     <div className="card">
//       <Avatar />
//       <Intro />
//       <SkillList />
//     </div>
//   );
// }

// function Avatar(params) {
//   return <img src="avatar-image.jpg" alt="Niama" className="avatar"></img>;
// }

// function Intro(params) {
//   return (
//     <div className="data">
//       <h1>Niama SK</h1>
//       <p>
//         It is a long established fact that a reader will be distracted by the
//         readable content of a page when looking at its layout.
//       </p>
//     </div>
//   );
// }

// function SkillList(params) {
//   return (
//     <div className="skill-list data">
//       {skills.map((skillObj) => (
//         <Skill
//           skill={skillObj.skill}
//           emoji={skillObj.level}
//           color={skillObj.color}
//           key={skillObj.skill}
//         />
//       ))}
//       {/* <Skill skill="HTML+CSS" emoji="💪🏻" color="pink" />
//       <Skill skill="javaScript" emoji="👍🏻" color="yellow" />
//       <Skill skill="Web developer" emoji="👍🏻" color="green" />
//       <Skill skill="flask" emoji="👍🏻" color="orange" />
//       <Skill skill="React" emoji="👶🏻" color=" purple" />
//       <Skill skill="Git & Github" emoji="💪🏻" color="orangered" /> */}
//     </div>
//   );
// }

// function Skill({ skill, emoji, color }) {
//   return (
//     <div className="skill" style={{ backgroundColor: color }}>
//       <span>{skill}</span>
//       <span>
//         {emoji === "advance" ? "💪🏻" : emoji === "beginner" ? "👶🏻" : "👍🏻"}
//       </span>
//     </div>
//   );
// }

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ------------------------------------------- //
// CHALLENGE 1

import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advance",
    color: "green",
  },
  {
    skill: "JavaScript",
    level: "advance",
    color: "red",
  },
  {
    skill: "Web Designe",
    level: "advance",
    color: "orange",
  },
  {
    skill: "React",
    level: "advance",
    color: "pink",
  },
  {
    skill: "Git and github",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Flask",
    level: "beginner",
    color: "purple",
  },
];

function App(params) {
  return (
    <div className="card">
      <Avatar />
      <Into />
      <SkillList />
    </div>
  );
}

function Avatar(params) {
  return <img src="./avatar-image.jpg" className="avatar" />;
}
function Into(params) {
  return (
    <div className="data">
      <h2>Niama SK</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </div>
  );
}

function SkillList(params) {
  // skills.map((skillObj) => {
  //   <Skill skill={skillObj.skill} color="red" />;
  // });

  return (
    <div className="skill-list data">
      {skills.map((skillObj) => (
        <Skill
          skill={skillObj.skill}
          color={skillObj.color}
          level={skillObj.level}
          key={skillObj.skill}
        />
      ))}
      {/* <Skill skill="html +  css" color="red" level="advance" />
      <Skill skill="JS" color="orange" />
      <Skill skill="Oracle" color="blue" /> */}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <button onClick={click}>
        <span>
          {level === "advance" ? "💪🏻" : null}
          {level === "intermediate" ? "💪🏻" : null}
          {level === "beginner" ? "💪🏻" : null}
        </span>
      </button>
    </div>
  );
}

function click(params) {
  alert("good");
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
