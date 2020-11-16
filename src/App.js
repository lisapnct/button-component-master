import "./stylesheets/App.css";
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
        <Button variant="text" disabled />
        <p>Sizes</p>
        <Button size="sm" color="primary" />
        <Button color="primary" />
        <Button size="lg" color="primary" />
        <p>Colors</p>
        <Button />
        <Button color="primary" content="primary" />
        <Button color="secondary" content="secondary" />
        <Button color="danger" content="danger" />
        <p>Icons</p>
        <Button start_icon="add_shopping_cart" color="primary" />
        <Button start_icon="favorite" color="primary" />
        <Button start_icon="launch" color="primary" />
        <Button end_icon="grade" color="primary" />
        <Button end_icon="arrow_circle_down" color="primary" />
      </div>
    </div>
  );
}

export default App;
