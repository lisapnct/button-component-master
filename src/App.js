import "./stylesheets/App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>Reusable button component</h1>
      <h4>
        solution for{" "}
        <a
          href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY"
          target="_blank"
          rel="noreferrer"
        >
          this challenge{" "}
        </a>{" "}
        from devchallenges.io
      </h4>
      <small>created by Lisa Poncet</small>
      <div className="buttons">
        <div className="button-container">
          <div>
            <Button />
          </div>
          <p>{"<Button />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button variant="outline" />
          </div>
          <p>{"<Button variant='outline' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button variant="text" />
          </div>
          <p>{"<Button variant='text' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button disableShadow />
          </div>
          <p>{"<Button disableShadow />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button disabled />
          </div>
          <p>{"<Button disabled />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button variant="text" disabled />
          </div>
          <p>{"<Button variant='text' disabled />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button color="primary" content="primary" />
          </div>
          <p>{"<Button color='primary' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button color="secondary" content="secondary" />
          </div>
          <p>{"<Button color='secondary' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button color="danger" content="danger" />
          </div>
          <p>{"<Button color='danger' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button start_icon="launch" color="primary" />
          </div>
          <p>{"<Button end_icon='grade' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button end_icon="arrow_circle_down" color="primary" />
          </div>
          <p>{"<Button end_icon='arrow_circle_down' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button start_icon="star" color="primary" />
          </div>
          <p>{"<Button start_icon='star' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button size="lg" color="primary" />
          </div>
          <p>{"<Button size='lg' />"}</p>
        </div>
        <div className="button-container">
          <div>
            <Button size="sm" color="primary" />
          </div>
          <p>{"<Button size='sm' />"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
