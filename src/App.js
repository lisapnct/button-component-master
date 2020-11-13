import './App.css';
import Button from "./components/Button"

function App() {
  return (
    <div className="App">
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <Button disableShadow />
    </div>
  );
}

export default App;
