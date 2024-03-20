import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
