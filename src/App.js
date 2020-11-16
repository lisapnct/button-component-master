import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h2>Reusable button component</h2>
      <div className="buttons">
        <p>Variants</p>
        <Button />
        <Button variant="outline" />
        <Button variant="text" />
        <p>Disabled</p>
        <Button disableShadow />
        <Button disabled />
        <p>Sizes</p>
        <Button size="sm" />
        <Button />
        <Button size="lg" />
        <p>Colors</p>
        <Button />
        <Button color="primary" content="primary" />
        <Button color="secondary" content="secondary" />
        <Button color="danger" content="danger" />
        <p>Icons</p>
        <Button start_icon="add_shopping_cart" />
        <Button start_icon="favorite" />
        <Button start_icon="launch" />
        <Button end_icon="grade" />
        <Button end_icon="arrow_circle_down" />
      </div>
    </div>
  );
}

export default App;
