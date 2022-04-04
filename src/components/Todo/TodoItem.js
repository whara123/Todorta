import React from "react";
import styled from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import { useTodoDispatch } from "../../TodoContext";

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => {
    dispatch({ type: "TOGGLE", id });
  };
  const onRemove = () => {
    dispatch({ type: "REMOVE", id });
  };
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 20px;
  border-radius: 16px;
  border: 1px solid;
  border-color: ${(props) => (props.done ? "#38d9a9" : "#ced4da")};
  color: ${(props) => (props.done ? "#38d9a9" : "#000")};
  font-size: 24px;
  cursor: pointer;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: ${(props) => (props.done ? "#ced4da" : "#495057")};
`;

TodoItem.propTypes = {
  id: PropTypes.number,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

TodoItem.defaultProps = {
  id: 0,
};

export default React.memo(TodoItem);
