import React from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  name: string;
};

type State = {
  today?: Date;
  name: string;
};

export class Clock extends React.PureComponent<Props, State> {
  private nameTimerId: number | undefined;

  private clockTimerId: number | undefined;

  state: State = {
    today: new Date(),
    name: this.props.name,
  };

  componentDidMount(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({
        name: getRandomName(),
      });
    }, 3300);

    this.clockTimerId = window.setInterval(() => {
      const currentTime = new Date();

      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
      this.setState({ today: currentTime });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevState.name} to ${this.state.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.nameTimerId);
    window.clearInterval(this.clockTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today?.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
