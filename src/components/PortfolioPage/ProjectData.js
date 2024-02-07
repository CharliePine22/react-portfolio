// Card image imports, named them the first word of their respective project title
// React Project Images
// import retro from '../../assets/images/ProjectImages/retro-chat-ss.png';
import jcj from "../../assets/images/ProjectImages/jcj-logo.png";
import phantomChat from "../../assets/images/ProjectImages/phantomchat.png";
import simply from "../../assets/images/ProjectImages/simply-phresh.png";
import video from "../../assets/images/ProjectImages/gameflix-screenshot.png";
// Python Project Images
import animal from "../../assets/images/ProjectImages/animal-crossing-database.png";
import planner from "../../assets/images/ProjectImages/planner.png";
import spotify from "../../assets/images/ProjectImages/spotifyBIG.jpg";
// HTML, CSS, JS Project Images
import terror from "../../assets/images/ProjectImages/terror-trades.png";
import tindog from "../../assets/images/ProjectImages/yunaBIG.jpg";
import top from "../../assets/images/ProjectImages/top-movies.png";

// Stack Icon Image Imports
import bootstrapIcon from "../../assets/images/StackImages/bootstrap-logo.png";
import bs4Icon from "../../assets/images/StackImages/bs4-logo.jpg";
import css3Icon from "../../assets/images/StackImages/css3-icon.png";
import expressIcon from "../../assets/images/StackImages/express.png";
import firebaseIcon from "../../assets/images/StackImages/firebase-logo.png";
import flaskIcon from "../../assets/images/StackImages/flask-logo.png";
import googleIcon from "../../assets/images/StackImages/google-icon.png";
import htmlIcon from "../../assets/images/StackImages/html-icon.png";
import javascriptIcon from "../../assets/images/StackImages/javascript-icon.png";
import mongodbIcon1 from "../../assets/images/StackImages/mongodb-icon.svg";
import nextjsIcon from "../../assets/images/StackImages/nextjs-logo.png";
import nodeJsIcon from "../../assets/images/StackImages/node-js.svg";
import oauthIcon from "../../assets/images/StackImages/oauth-logo.png";
import prismaIcon from "../../assets/images/StackImages/prisma-icon.svg";
import pythonIcon from "../../assets/images/StackImages/python-icon.png";
import igdbIcon from "../../assets/images/StackImages/igdb-icon.jpg";
import reactIcon from "../../assets/images/StackImages/react-icon.png";
import sanityIcon from "../../assets/images/StackImages/sanity-icon.webp";
import spotifyIcon from "../../assets/images/StackImages/spotify-icon.png";
import sqlIcon from "../../assets/images/StackImages/sql-icon.png";
import steamIcon from "../../assets/images/StackImages/steam-icon.png";
import stripeIcon from "../../assets/images/StackImages/stripe-icon.svg";
import tailwindIcon from "../../assets/images/StackImages/tailwind-icon.svg";

// Project data to be mapped outsss
export const projectTitles = {
  react: [
    {
      title: "Gameflix",
      description:
        "Inspired by Netflix and Crunchyroll, allows users to browse for their favorite games, log their progress with owned games, or discover new ones.",
      image: video,
      github: "https://github.com/CharliePine22/gameflix",
      live: "https://gameflixx.netlify.app/",
      stack: [
        { src: mongodbIcon1, name: "MongoDB" },
        { src: expressIcon, name: "Express" },
        { src: reactIcon, name: "React" },
        { src: nodeJsIcon, name: "NodeJS" },
        { src: spotifyIcon, name: "Spotify" },
        { src: steamIcon, name: "Steam" },
        { src: igdbIcon, name: "IGDB" },
      ],
    },
    {
      title: "JCJ Swag",
      description:
        "A fashion eCommerce app built with NextJS, Sanity, and Stripe. This application allows the user to find itmes based on their category, add it to their cart, and checkout with Stripe.",
      image: jcj,
      github: "https://github.com/CharliePine22/ecommerce",
      live: "https://jcj-swag.vercel.app/", //Right now, this app is broken, need to fix....
      stack: [
        { src: nextjsIcon, name: "NextJs" },
        { src: css3Icon, name: "CSS" },
        { src: sanityIcon, name: "Sanity" },
        { src: stripeIcon, name: "Stripe" },
      ],
    },
    {
      title: "Phantom Chat",
      description:
        "A chat application built and inspired by the video game Persona 5. Allows users to add and chat with their friends, just like the game!",
      image: phantomChat,
      github: "https://github.com/CharliePine22/phantom-chat",
      live: "https://phantomchat.vercel.app/",
      stack: [
        { src: mongodbIcon1, name: "MongoDB" },
        { src: expressIcon, name: "Express" },
        { src: nextjsIcon, name: "NextJS" },
        { src: nodeJsIcon, name: "NodeJS" },
        { src: tailwindIcon, name: "TailwindCSS" },
        { src: prismaIcon, name: "Prisma" },
      ],
    },
    {
      title: "Simply Phresh",
      description:
        "An application used to order food from a fake restaurant. The user can add items to the cart, checkout, and get an ETA on arrival. You can also create an account for faster checkouts.",
      image: simply,
      github: "https://github.com/CharliePine22/Simply-Phresh",
      live: "https://simply-phresh.web.app/meals",
      stack: [
        { src: reactIcon, name: "React" },
        { src: css3Icon, name: "CSS" },
        { src: googleIcon, name: "GoogleAPI" },
        { src: firebaseIcon, name: "Firebase" },
      ],
    },
  ],
  python: [
    {
      title: "AC:NH Database",
      description:
        "An Animal Crossing app, in which the user can search and save their island villagers.",
      image: animal,
      github:
        "https://github.com/CharliePine22/animal_crossing_island_database",
      live: "",
      stack: [
        { src: pythonIcon, name: "Python" },
        { src: sqlIcon, name: "PostgreSQL" },
        { src: bs4Icon, name: "Beautiful Soup" },
      ],
    },
    {
      title: "Planner",
      description:
        "An app that allows gives the user both a daily todo list a and long-term goals list.",
      image: planner,
      github: "https://github.com/CharliePine22/planner",
      live: "",
      stack: [
        { src: pythonIcon, name: "Python" },
        { src: flaskIcon, name: "Flask" },
        { src: bootstrapIcon, name: "Bootstrap" },
      ],
    },
    {
      title: "SP Playlist Generator",
      description:
        "An app that generates a Spotify playlist of the top 100 songs of the entered date.",
      image: spotify,
      github: "https://github.com/CharliePine22/spotify_top_100",
      live: "",
      stack: [
        { src: pythonIcon, name: "Python" },
        { src: oauthIcon, name: "OAuth" },
        { src: bs4Icon, name: "Beautiful Soup" },
      ],
    },
  ],
  html: [
    {
      title: "Terror Trades",
      description: "A fake Crypto Trading website inspired by Futureswap.",
      image: terror,
      github: "",
      live: "https://terror-trades-landing.netlify.app/",
      stack: [
        { src: htmlIcon, name: "HTML5" },
        { src: css3Icon, name: "CSS3" },
        { src: javascriptIcon, name: "Javascript" },
      ],
    },
    {
      title: "Tindog",
      description:
        "A fake Tinder for dogs website, inspired by the trademark name.",
      image: tindog,
      github: "https://github.com/CharliePine22/tindog",
      live: "https://tindog-cp.netlify.app/",
      stack: [
        { src: htmlIcon, name: "HTML5" },
        { src: css3Icon, name: "CSS3" },
        { src: bootstrapIcon, name: "Bootstrap" },
      ],
    },
    {
      title: "Top Movies Database",
      description:
        "An app that allows the user to search and rank their favorite movies.",
      image: top,
      github: "https://github.com/CharliePine22/top_movies_database",
      live: "",
      stack: [
        { src: htmlIcon, name: "HTML5" },
        { src: bootstrapIcon, name: "Bootstrap" },
        { src: flaskIcon, name: "Flask" },
      ],
    },
  ],
};
