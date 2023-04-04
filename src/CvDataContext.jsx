import { createContext, useState, useEffect } from "react";

const CvDataContext = createContext();

function CvDataProvider({ children }) {
  const [cvData, setCvData] = useState(() => {
    const storedData = localStorage.getItem("cvData");
    return storedData // If there is data in local storage, use it
      ? JSON.parse(storedData) // If there is no data in local storage, use the default data below
      : {
          name: "Carl Pilkington",
          job: "TV Presenter",
          contact: [
            { key: "phone", description: "080-4777-0988", icon: "phone" },
            {
              key: "email",
              description: "carlpilkington@gmail.com",
              icon: "email",
            },
            { key: "website", description: "anidiotabroad.com", icon: "website" },
            {
              key: "gitHub",
              description: "github.com/CarlPilkington",
              icon: "gitHub",
            },
            {
              key: "address",
              description: "Tokyo Suginami-city",
              icon: "address",
            },
          ],
          languages: [
            { key: "defaultlang1", language: "English",  description: "Native",  },
            { key: "defaultlang2", language: "Japanese",  description: "Fluent", },
            { key: "defaultlang3", language: "Dutch",  description: "Native", },
            { key: "defaultlang4", language: "German",  description: "Basic", },
          ],
          profile:
            "Default Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentrepellendus a teDefault Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentrepellendus a te",
          skills: [
            {
              key: "defaultskill1",
              description: "Solid JavaScript Fundamentals",
              icon: "js",
            },
            {
              key: "defaultskill2",
              description: "Building web applications with React",
              icon: "react",
            },
            {
              key: "defaultskill3",
              description: "Using Git from the command line",
              icon: "git",
            },
            {
              key: "defaultskill4",
              description: "Unit testing with the Jest framework",
              icon: "jest",
            },
            {
              key: "defaultskill5",
              description: "Styling pages with Css",
              icon: "css",
            },
          ],
          workExperience: [
            {
              key: "defaultjob1",
              jobTitle: "Job",
              companyName: "Some British broadcaster",
              period: "20XX - 20XX",
              jobDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentrepellendus a tenetur velit nihil est dolore similique deserunt maioresad quam doloremque dolorem voluptate corrupti tempore iure eaque, fugitlaudantium!",
            },
            {
              key: "defaultjob2",
              jobTitle: "Job2",
              companyName: "Some British broadcaster",
              period: "20XX - 20XX",
              jobDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentrepellendus a tenetur velit nihil est dolore similique deserunt maioresad quam doloremque dolorem voluptate corrupti tempore iure eaque, fugitlaudantium!",
            },
            {
              key: "defaultjob3",
              jobTitle: "Job3",
              companyName: "Some British broadcaster",
              period: "20XX - 20XX",
              jobDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentrepellendus a tenetur velit nihil est dolore similique deserunt maioresad quam doloremque dolorem voluptate corrupti tempore iure eaque, fugitlaudantium!",
            },
          ],
          education: [
            {
              key: "defaultschool1",
              institute: "Univesity of XXXX",
              diploma: "Bsc something",
              period: "20xx -20xx",
            },
          ],
        };
  });

  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]);

  return (
    <CvDataContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CvDataContext.Provider>
  );
}

export { CvDataContext, CvDataProvider };
