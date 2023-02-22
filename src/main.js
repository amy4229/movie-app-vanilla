import App from "./app.js"
import router from './pages'

const root = document.querySelector("#root");
root.append(new App().el);
console.log("hello")

router();


