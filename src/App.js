import React from "react";
import "./App.css";
import "./components/list-item/list-item.component";
import ListItem from "./components/list-item/list-item.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  removeItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ ...this.state, items: filteredItems });
  };
  handleChange = (event) => {
    this.setState({
      ...this.state,
      currentItem: { text: event.target.value, key: Date.now() },
    });
  };

  addItem = (event) => {
    event.preventDefault();
    if (this.state.currentItem.text !== "") {
      this.setState({
        items: this.state.items.concat(this.state.currentItem),
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({ ...this.state, items: items });
  };
  render() {
    return (
      <header>
        <div className="todo-container">
          <form id="todo-form" onSubmit={this.addItem}>
            <input
              className="todo-input"
              placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleChange}
            />
            <button className="add-todo-button" type="submit">
              Add
            </button>
            <ListItem
              List={this.state.items}
              onClickIcon={this.removeItem}
              setUpdate={this.setUpdate}
            />
          </form>
        </div>
      </header>
    );
  }
}

export default App;
