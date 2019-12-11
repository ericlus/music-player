import React from "react";
import SearchBar from "./SearchBar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Music Player</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
