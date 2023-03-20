import React from "react";
import "./App.scss";
import PercentText from "./components/PercentText";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 95,
      to: 105,
      money: 0,
    };
  }

  changeFrom = (e) => {
    this.setState((previous) => {
      return { ...previous, from: e.target.value };
    });
  };

  changeTo = (e) => {
    this.setState((previous) => {
      return { ...previous, to: e.target.value };
    });
  };
  render() {
    const percentsComponents = [];
    var from = parseFloat(this.state.from);
    var to = parseFloat(this.state.to);
    if (this.notValidFromAndTo(from, to) || !this.state.money) {
      from = 0.95;
      to = 1.05;
    } else {
      from = from / 100;
      to = to / 100;
    }
    for (var i = from; i <= to; i = i + 0.01) {
      percentsComponents.push(
        <PercentText amount={this.state.money} percent={i} />
      );
    }
    return (
      <div className="App">
        <div
          className="approw"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div></div>
          <span className="mainscreen border-gradient-purple">
            <span
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flex: "1 1 1px",
              }}
            >
              <span className="alignedCenter">
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flex: "1",
                  }}
                >
                  <input
                    name="from"
                    type="number"
                    defaultValue={95}
                    onChange={this.changeFrom}
                  />
                  <input
                    name="to"
                    type="number"
                    defaultValue={105}
                    onChange={this.changeTo}
                  />
                </span>
                Enter value:
                <br />
                <input
                  name="money"
                  type="number"
                  onChange={(e) =>
                    this.setState((previous) => {
                      return { ...previous, money: e.target.value };
                    })
                  }
                />
              </span>
              <span style={{ flex: 2 }}>
                <table>
                  <tbody>
                    <tr>{percentsComponents}</tr>
                  </tbody>
                </table>
              </span>
            </span>
          </span>
          <div></div>
        </div>
      </div>
    );
  }

  notValidFromAndTo(from, to) {
    return isNaN(from) || isNaN(to) || from > to || from < 1 || to > 200;
  }
}

export default App;
