import profilePic from './profilePic.jpg'
import proPic from './proPic.jpg'
// import bootstrap from './bootstrap.jpg'
import css from './css.jpg'
import db from './db.svg'
import express from './express.jpg'
import git from './git.jpg'
import gith from './gith.jpg'
import html from './html.jpg'
import js from './js.jpg'
import node from './node.jpg'
import react from './react.svg'
// import sql from './sql.jpg'
import tailwind from './tailwind.jpg'
import material from './material.jpg'
import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import edu from "./edu.png";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import project1 from './pjt1.png'
import project2 from './pjt2.png'

const email = 'irfanamd14@gmail.com'

const github = 'http://github.com/irfanamd1'

const linkedin = 'http://linkedin.com/in/irfan-ahamed-s'

export const resume = 'https://drive.google.com/file/d/1QV1GNTlTdw6Lhwvn_-t5L1t9BMlCEx1e/view?usp=drivesdk'

export const navItems = [
    { id: 1, text: "Home", to:'home' },
    { id: 2, text: "About", to:'about' },
    { id: 3, text: "Skills", to:'skills' },
    { id: 4, text: "Projects", to:'projects' },
    { id: 5, text: "Education", to:'education' },
    { id: 6, text: "Contact", to:'contact' }
] 

export const links = [
    { link: linkedin, icon: FaLinkedin },
    { link: github, icon: IoLogoGithub },
    { link: `mailto:${email}`, icon: MdEmail }
]

export const skills = [
    { name: 'ReactJs', image: react },
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'JavaScript', image: js },
    // { name: 'Bootstrap', image: bootstrap },
    { name: 'TailwindCSS', image: tailwind },
    { name: 'MaterialUI', image: material },
    { name: 'NodeJs', image: node },
    { name: 'Express', image: express },
    { name: 'MongoDB', image: db },
    // { name: 'MySQL', image: sql },
    { name: 'Git', image: git },
    { name: 'Git Hub', image: gith },
]

export const projects = [
    {
        id: 1,
        img: project1,
        name: 'AI-Recipe Generator',
        skills: ['React', 'JavaScript', 'TailwindCSS', 'Node with Express', 'MongoDB', 'Google API'],
        description: 'The AI Recipe Generator is a web app built with React, Tailwind CSS, Node.js, and Express, using MongoDB for data storage. It leverages the Google API to generate personalized recipes and uses Clerk for secure user authentication.',
        link: 'https://chefzia.vercel.app'
    },
    {
        id: 2,
        img: project2,
        name: 'AI-Trip Planner',
        skills: ['React', 'JavaScript', 'TailwindCSS', 'Firebase', 'Google API'],
        description: 'The AI Trip Planner is a web app built with React, TailwindCSS, Firebase, and Google APIs, using Firestore for data storage. It leverages the Google API to generate personalized custom itineraries and insights.',
        link: 'https://tripia.vercel.app'
    }
]

export const education = [
    { icon: IoSchool, year: '2023 - 2025', degree: 'Master of Computer Applications (MCA)', institution: 'Jamal Mohamed College, Tiruchirappalli' },
    { icon: IoSchool, year: '2020 - 2023', degree: 'Bachelor of Computer Applications (BCA)', institution: 'Noorul Islam College of Arts and Science, Kumaracoil' },
    { icon: FaSchool, year: '2019 - 2020', degree: 'Higher Secondary Certificate (HSC)', institution: "St. Joseph's Matriculation Higher Secondary School, Nagercoil" },
]

export const contact1 = [
    { icon: MdEmail, name: "Email", content: email, link: `mailto:${email}`},
    { icon: FaLocationDot, name: "Location", content: 'Kottar, Nagercoil - 629002', link: 'https://maps.app.goo.gl/ECs8UFmZ4YoLdjDD6'}
]

export const contact2 = [
    { link: linkedin, icon: RiLinkedinFill },
    { link: github, icon: IoLogoGithub }
]

export {
    profilePic,
    proPic,
    edu
}