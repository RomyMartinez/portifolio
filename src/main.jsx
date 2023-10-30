import "./styles/header.css"
import "./styles/index.css"
import "./styles/home.css"
import "./styles/aboutMe.css"
import "./styles/projects.css"
import "./styles/skills.css"
import "swiper/css"
import "swiper/css/navigation"

import "swiper/css/effect-fade"

import App from "./App.jsx"
import React from "react"
import ReactDOM from "react-dom/client"

import { register } from "swiper/element/bundle"

register()

ReactDOM.createRoot(document.getElementById("swiper")).render(<App />)
