import React from "react";
import PropTypes from "prop-types";

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completed: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

function ListItem(props) {
  const { name, done } = props.todo;
  const { completed, remove } = props;
  return (
    <>
      <li style={{ textDecoration: done ? "line-through" : "" }}>{name}</li>
      <div style={{ margin: "10px 0 0 -15px" }}>
        {!done && (
          <button className="nes-btn is-success" onClick={completed}>
            Completed
          </button>
        )}

        {done && (
          <button className="nes-btn is-error" onClick={remove}>
            Remove
          </button>
        )}
      </div>
    </>
  );
}

export default ListItem;
