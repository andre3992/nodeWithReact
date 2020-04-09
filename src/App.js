import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      clubes: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            clubes: result.clubes
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  render() {
    const { error, isLoaded, clubes } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {clubes.map(item => (
            <li key={item.name}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
