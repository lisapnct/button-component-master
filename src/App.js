import './App.css';
import Button from "./components/Button"

function App() {
  return (
    <div className="App">
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <Button disableShadow />
      <Button disabled />
    </div>
  );
}

export default App;
