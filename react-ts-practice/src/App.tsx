import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  const nameList = [
    {
      firstName: "Bruce",
      lastName: "Wayne",
    },
    {
      firstName: "Clark",
      lastName: "Kent",
    },
    {
      firstName: "Princess",
      lastName: "Diana",
    },
  ];

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to ...</Heading>
      </Oscar>
      <Greet name="Welcome" isLoggedIn={false} />
      <Button
        handleClick={(e, id) => {
          console.log("Button clicked", e, id);
        }}
      />
      <Input value="" handleChange={(e) => console.log(e)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
