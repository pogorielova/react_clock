import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};
export class App extends React.Component<State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContext = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div
        className="App"
        onClick={this.handleClick}
        onContextMenu={this.handleContext}
      >
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
