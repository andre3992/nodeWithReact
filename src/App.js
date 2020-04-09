import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      clubes: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.clubeAAdicionar = this.clubeAAdicionar.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  clubeAAdicionar = (novo) => {
    fetch("http://localhost:3001/adicionar", {
      method: "POST",
      body: "value=" + novo, 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
  };

  componentDidMount() {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            clubes: result.clubes,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
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
          {clubes.map((item,index) => (
            <li key={index}>{item}</li>
          ))}
          <form onSubmit={() => this.clubeAAdicionar(this.state.value)}>
            <label>
              Adicionar Clube:
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"  />
          </form>
        </ul>
      );
    }
  }
}

export default App;
