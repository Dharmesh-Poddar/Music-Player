import React ,{Component} from 'react';



export default class App extends React.Component {
  state = {
    selectedTrack: null
  };

  render() {
    const list = [{ id: 1, title: "Campfire Story" }, {id: 2, title: "Booting Up"}].map(item => {
      return (
        <li
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
        >
        {item.title}
        </li>
      );
    });

    return (
      <>
        <h1>My Little Player</h1>
        <ul>{list}</ul>
        <audio />
      </>
    );
  }
}
