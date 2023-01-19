import Accordion from "./Components/Accordion";
import Login from "./Components/Login";

function App() {
  const namelist = [
    {
      role: "UI Developer",
      skillSet: "UI",
      experience: "3",
      location: "Hyd",
    },

    {
      role: "React Developer",
      skillSet: "React",
      experience: "4",
      location: "Hyd1",
    },

    {
      role: "Nodejs Developer",
      skillSet: "Node",
      experience: "5",
      location: "Hyd2",
    },

    {
      role: "vue Developer",
      skillSet: "vue",
      experience: "2",
      location: "Hyd3",
    },
  ];

  // const accordionData = {
  //   role: "UI Developer",
  //   skillSet: "UI React",
  //   experience: "5",
  //   location: "location",
  //   interviewStatus: "4 interviews scheduled",
  //   status: "active",
  //   clientInterivew: "yes",
  //   comment: "interviews are in progress",
  //   practiceHeadName: "xyz",
  // };

  return (
    <>
      <div className="App">
        <Accordion names={namelist} />
        <Login />
      </div>
    </>
  );
}

export default App;
