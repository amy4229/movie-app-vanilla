import App from "./app.js"

const root = document.querySelector("#root");
root.append(new App().el);
console.log("hello")