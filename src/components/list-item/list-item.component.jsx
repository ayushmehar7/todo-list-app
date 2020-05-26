import React from "react";
import "./list-item.styles.css";
import dustbin from "../../icons/dustbin.png";
import FlipMove from "react-flip-move";

const ListItem = ({ List, onClickIcon, setUpdate }) => (
  <div className="item-container">
    <FlipMove duration={200} easing="ease-in-out">
      {List.map((item) => (
        <div key={item.key} className="item">
          <p className="list-item">
            <input
              className="todo"
              type="text"
              value={item.text}
              onChange={(event) => setUpdate(event.target.value, item.key)}
            />
            <span className="trash">
              <img
                src={dustbin}
                alt="dustbin"
                onClick={() => onClickIcon(item.key)}
              />
            </span>
          </p>
        </div>
      ))}
    </FlipMove>
  </div>
);

export default ListItem;
