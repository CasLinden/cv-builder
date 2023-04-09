import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import react from "/src/assets/skillicons/react.svg"; 
import js from "/src/assets/skillicons/js.svg";
import jest from "/src/assets/skillicons/jest.svg";
import git from "/src/assets/skillicons/git.svg";
import css from "/src/assets/skillicons/css.svg";
import webpack from "/src/assets/skillicons/webpack.svg";
import node from "/src/assets/skillicons/node.svg";
import chatgpt from "/src/assets/skillicons/chatgpt.svg";
import phone from "/src/assets/contacticons/phone.svg";
import email from "/src/assets/contacticons/email.svg";
import website from "/src/assets/contacticons/website.svg";
import gitHub from "/src/assets/contacticons/github.svg";
import address from "/src/assets/contacticons/address.svg";
import "/src/css/icon.css";

const IconsContext = createContext();

export default function IconsProvider({ children }) {
  const [icons, setIcons] = useState(() => {
    const storedIcons = localStorage.getItem("icons");
    return storedIcons
      ? JSON.parse(storedIcons)
      : {
          phone: phone,
          email: email,
          website: website,
          gitHub: gitHub,
          address: address,
          js: js,
          react: react,
          git: git,
          jest: jest,
          css: css,
          webpack: webpack,
          node: node,
          chatgpt: chatgpt,
        };
  });

  useEffect(() => {
    localStorage.setItem("icons", JSON.stringify(icons));
  }, [icons]);



  return (
    <IconsContext.Provider value={{ icons, setIcons }}>
      {children}
    </IconsContext.Provider>
  );
}

export { IconsContext, IconsProvider };
