import { createContext, useState, useEffect } from "react";

const CvDataContext = createContext();

function CvDataProvider({ children }) {
  const [cvData, setCvData] = useState(() => {
    const storedData = localStorage.getItem("cvData");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: "Global Data Name",
          job: "web developer",
          age: 30,
          phone: "080-4777-0988",
          email: "carlpilkington@gmail.com",
          website: "anidiotabroad.com",
          gitHub: "github.com/CarlPilkington",
          address: "Tokyo Suginami-city",
          profile:
            "Default Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentrepellendus a te",
          workExperience: [
            {
              jobTitle: "TV presentor",
              companyName: "Some British broadcaster",
              period: "20XX - 20XX",
              jobDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentrepellendus a tenetur velit nihil est dolore similique deserunt maioresad quam doloremque dolorem voluptate corrupti tempore iure eaque, fugitlaudantium!",
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