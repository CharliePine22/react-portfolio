// Card image imports, named them the first word of their respective project title
// React Project Images
import retro from "../../assets/images/ProjectImages/retro-chat.png";
import simply from "../../assets/images/ProjectImages/simply-phresh.png";
import video from "../../assets/images/ProjectImages/video-game-database.jpg";
// Python Project Images
import animal from "../../assets/images/ProjectImages/animal-crossing-database.png";
import planner from "../../assets/images/ProjectImages/planner.png";
import spotify from "../../assets/images/ProjectImages/spotify.jpg";
// HTML, CSS, JS Project Images
import terror from "../../assets/images/ProjectImages/terror-trades.png";
import tindog from "../../assets/images/ProjectImages/yuna.jpg";
import top from "../../assets/images/ProjectImages/top-movies.png";

// Stack Icon Image Imports
import bootstrapIcon from "../../assets/images/StackImages/bootstrap-logo.png";
import bs4Icon from "../../assets/images/StackImages/bs4-logo.jpg";
import css3Icon from "../../assets/images/StackImages/css3-icon.png";
import chatengineIcon from "../../assets/images/StackImages/chat-engine-icon.ico"
import firebaseIcon from "../../assets/images/StackImages/firebase-logo.jpg";
import flaskIcon from "../../assets/images/StackImages/flask-logo.png";
import htmlIcon from "../../assets/images/StackImages/html-icon.png";
import javascriptIcon from "../../assets/images/StackImages/javascript-icon.png";
import mongodbIcon from "../../assets/images/StackImages/mongodb-icon.png";
import nextjsIcon from "../../assets/images/StackImages/nextjs-logo.png";
import pythonIcon from "../../assets/images/StackImages/python-icon.png";
import rawgIcon from "../../assets/images/StackImages/rawg-logo.jpg";
import reactIcon from "../../assets/images/StackImages/react-icon.png";
import sqlIcon from "../../assets/images/StackImages/sql-icon.png";

// Project data to be mapped out
export const projectTitles = {
  react: [
    {
      title: "Retro Chat",
      description:
        "A chat application built using Chat Engine, inspired by AOL's Instant Messanger(AIM).",
      image: retro,
      github: "https://github.com/CharliePine22/retro-chat-application",
      live: "https://simply-phresh.web.app/meals",
      stack: [reactIcon, firebaseIcon, chatengineIcon]
    },
    {
      title: "Simply Phresh",
      description:
        "A fake food app, in which the user can place and view fake food orders.",
      image: simply,
      github: "https://github.com/CharliePine22/Simply-Phresh",
      live: "https://astro-chat.netlify.app/", //Right now, this app is broken, need to fix....
      stack: [reactIcon, firebaseIcon, sqlIcon]
    },
    {
      title: "Video Game Database",
      description:
        "An application in which a user can rank, view, and edit their owned games.",
      image: video,
      github: "https://github.com/CharliePine22/video_game_database",
      live: "",
      stack: [nextjsIcon, mongodbIcon, rawgIcon]
    },
  ],
  python: [
    {
      title: "Animal Crossing Database",
      description:
        "An app related to Animal Crossing: New Horizons, that allows the user to look up and save details about their villagers.",
      image: animal,
      github:
        "https://github.com/CharliePine22/animal_crossing_island_database",
      live: "",
      stack: [pythonIcon, sqlIcon, bs4Icon]
    },
    {
      title: "Planner",
      description:
        "An app that allows gives the user both a daily todo list a and long-term goals list.",
      image: planner,
      github: "https://github.com/CharliePine22/planner",
      live: "",
      stack: [pythonIcon, flaskIcon, bootstrapIcon]
    },
    {
      title: "Spotify Playlist Generator",
      description:
        "An app that connects to the user's Spotify account, and generates a playlist of the top 100 songs of the date the user chooses.",
      image: spotify,
      github: "https://github.com/CharliePine22/spotify_top_100",
      live: "",
      stack: [pythonIcon, bs4Icon]
    },
  ],
  html: [
    {
      title: "Terror Trades",
      description: "A fake Crypto Trading website inspired by Futureswap.",
      image: terror,
      github: "https://github.com/CharliePine22/tindog", // Have to fix it ,
      live: "",
      stack: [htmlIcon, css3Icon, javascriptIcon]
    },
    {
      title: "Tindog",
      description:
        "A fake Tinder for dogs website, inspired by the trademark name.",
      image: tindog,
      github: "",
      live: "",
      stack: [htmlIcon, css3Icon, bootstrapIcon]
    },
    {
      title: "Top Movies Database",
      description:
        "An app that allows the user to search and rank their favorite movies.",
      image: top,
      github: "https://github.com/CharliePine22/top_movies_database",
      live: "",
      stack: [htmlIcon, bootstrapIcon, flaskIcon]
    },
  ],
};

