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
        "A chat application inspired by AOL's Instant Messanger (AIM).",
      image: retro,
      github: "https://github.com/CharliePine22/retro-chat-application",
      live: "https://simply-phresh.web.app/meals",
      stack: [{src: reactIcon, name: 'React'}, {src: firebaseIcon, name: 'Firebase'}, {src: chatengineIcon, name: 'Chat Engine'}]
    },
    {
      title: "Simply Phresh",
      description:
        "A fake food app, in which the user can place and view fake food orders.",
      image: simply,
      github: "https://github.com/CharliePine22/Simply-Phresh",
      live: "https://astro-chat.netlify.app/", //Right now, this app is broken, need to fix....
      stack: [{src: reactIcon, name: 'React-Redux'}, {src: firebaseIcon, name: 'Firebase'}, {src: sqlIcon, name: 'SQL'}]
    },
    {
      title: "Video Game Database",
      description:
        "An application in which a user can rank, view, and edit their owned games.",
      image: video,
      github: "https://github.com/CharliePine22/video_game_database",
      live: "",
      stack: [{src: nextjsIcon, name: 'NextJS'}, {src: mongodbIcon, name: 'MongoDB'}, {src: rawgIcon, name: 'Rawg'}]
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
      stack: [{src: pythonIcon, name: 'Python'}, {src: sqlIcon, name: 'PostgreSQL'}, {src: bs4Icon, name: 'Beautiful Soup'}]
    },
    {
      title: "Planner",
      description:
        "An app that allows gives the user both a daily todo list a and long-term goals list.",
      image: planner,
      github: "https://github.com/CharliePine22/planner",
      live: "",
      stack: [{src: pythonIcon, name: 'Python'}, {src: flaskIcon, name: 'Flask'}, {src: bootstrapIcon, name: 'Bootstrap'}]
    },
    {
      title: "SP Playlist Generator",
      description:
        "An app that generates a Spotify playlist of the top 100 songs of the entered date.",
      image: spotify,
      github: "https://github.com/CharliePine22/spotify_top_100",
      live: "",
      stack: [{src: pythonIcon, name: 'Python'}, {src: bs4Icon, name: 'Beautiful Soup'}]
    },
  ],
  html: [
    {
      title: "Terror Trades",
      description: "A fake Crypto Trading website inspired by Futureswap.",
      image: terror,
      github: "https://github.com/CharliePine22/tindog", // Have to fix it ,
      live: "",
      stack: [{src: htmlIcon, name: "HTML5"}, {src: css3Icon, name: 'CSS3'}, {src: javascriptIcon, name: 'Javascript'}]
    },
    {
      title: "Tindog",
      description:
        "A fake Tinder for dogs website, inspired by the trademark name.",
      image: tindog,
      github: "",
      live: "",
      stack: [{src: htmlIcon, name: "HTML5"}, {src: css3Icon, name: 'CSS3'}, {src: bootstrapIcon, name: 'Bootstrap'}]
    },
    {
      title: "Top Movies Database",
      description:
        "An app that allows the user to search and rank their favorite movies.",
      image: top,
      github: "https://github.com/CharliePine22/top_movies_database",
      live: "",
      stack: [{src: htmlIcon, name: "HTML5"}, {src: bootstrapIcon, name: 'Bootstrap'}, {src: flaskIcon, name: 'Flask'}]
    },
  ],
};
