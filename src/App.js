// Given a class component, add state to it
// state should have a property called `isRaining` which is a boolean
// (true if it is raining, false if not)
// Render the word "Yes" if it is raining
// or "No" if it is not raining

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isRaining: "false"
    };
  }

  render() {
    const { isRaining } = this.state;
    return (
      <div className="content">
        <div>Is it raining today?{isRaining}</div>
      </div>
    );
  }
}

export default App;
