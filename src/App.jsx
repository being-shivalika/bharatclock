import "./App.css";
import ClockHeading from "./Commponents/ClockHeading";
import ClockSlogan from "./Commponents/ClockSlogan";
import CurrentTime from "./Commponents/CurrentTime";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
