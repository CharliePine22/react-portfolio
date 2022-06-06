// Icon Imports
import { DiFirebase, DiMongodb, DiPostgresql, DiJavascript1 } from 'react-icons/di';
import { FaDatabase, FaReact, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { BsFillChatTextFill, BsBootstrapFill } from 'react-icons/bs';
import { IconBrandNextjs } from '@tabler/icons';
import { MdVideogameAsset } from 'react-icons/md';
import { GiSpiderWeb } from 'react-icons/gi';
import { SiFlask } from 'react-icons/si';

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
      stack: [<DiFirebase />, <DiMongodb />, <BsFillChatTextFill />]
    },
    {
      title: "Simply Phresh",
      description:
        "A mock food app, in which the user can create an account, place an order, and view past orders placed.",
      image: simply,
      github: "https://github.com/CharliePine22/Simply-Phresh",
      live: "https://astro-chat.netlify.app/", //Right now, this app is broken, need to fix....
      stack: [<DiFirebase />, <FaDatabase />, <FaReact />]
    },
    {
      title: "Video Game Database",
      description:
        "An application in which a user can rank their favorite games, view completed games, and even link their Steam library to view owned games.",
      image: video,
      github: "https://github.com/CharliePine22/video_game_database",
      live: "",
      stack: [<IconBrandNextjs />, <DiMongodb />, <MdVideogameAsset />]
    },
  ],
  python: [
    {
      title: "Animal Crossing Database",
      description:
        "An app related to Animal Crossing: New Horizons, that uses the GUI Tkinter that allows the user to look up details about villagers and save them to match their own islands.",
      image: animal,
      github:
        "https://github.com/CharliePine22/animal_crossing_island_database",
      live: "",
      stack: [<DiPostgresql />, <FaPython />, <GiSpiderWeb />]
    },
    {
      title: "Planner",
      description:
        "An app that allows gives the user both a daily todo list a and long-term goals list.",
      image: planner,
      github: "https://github.com/CharliePine22/planner",
      live: "",
      stack: [<FaPython />, <SiFlask />, <BsBootstrapFill />]
    },
    {
      title: "Spotify Playlist Generator",
      description:
        "An app that connects to the user's Spotify account, and generates a playlist of the top 100 songs of the date the user chooses.",
      image: spotify,
      github: "https://github.com/CharliePine22/spotify_top_100",
      live: "",
      stack: [<FaPython />, <GiSpiderWeb />]
    },
  ],
  html: [
    {
      title: "Terror Trades",
      description: "A fake Crypto Trading website inspired by Futureswap.",
      image: terror,
      github: "https://github.com/CharliePine22/tindog", // Have to fix it ,
      live: "",
      stack: [<FaHtml5 />, <FaCss3 />, <DiJavascript1 />]
    },
    {
      title: "Tindog",
      description:
        "A fake Tinder for dogs website, inspired by the trademark name.",
      image: tindog,
      github: "",
      live: "",
      stack: [<FaHtml5 />, <FaCss3 />, <BsBootstrapFill />]
    },
    {
      title: "Top Movies Database",
      description:
        "An app that allows the user to search and rank their favorite movies.",
      image: top,
      github: "https://github.com/CharliePine22/top_movies_database",
      live: "",
      stack: [<FaHtml5 />, <BsBootstrapFill  />, <SiFlask />]
    },
  ],
};

