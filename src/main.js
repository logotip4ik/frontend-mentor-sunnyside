import "normalize.css/normalize.css";
import "./app.scss";

import App from "./App.svelte";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

// eslint-disable-next-line
gsap.registerPlugin(ScrollTrigger);

const app = new App({ target: document.getElementById("app") });

export default app;
