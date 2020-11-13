import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h2>Reusable button component</h2>
      <br/>
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <br/>
      <Button disableShadow />
      <Button disabled />
      <br/>
      <Button size="sm" />
      <Button />
      <Button size="lg" />
    </div>
  );
}

export default App;
