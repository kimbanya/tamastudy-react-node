import React from 'react';
import styled from '@emotion/styled';
import mediaQuery from '../../../theme/mediaQuery';
import theme from '../../../theme';

// atomic
import Input from '../../atoms/Input';

const TodoContainer = styled.div`
  ${mediaQuery(1)} {
    display: flex;
    flex-wrap: wrap;
    margin: ${theme.space}px 0 ${theme.space * 2}px;
  }
`;

const TodoItem = styled.div`
  margin: ${theme.space * 2}px ${theme.space}px;
  border: 1px solid ${theme.colors.base.black};
  box-sizing: border-box;
  padding: ${theme.space}px ${theme.space * 2}px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.completed ? theme.colors.base.black : 'inherit')};
  ${mediaQuery(1)} {
    margin: ${theme.space}px ${theme.space}px;
    justify-content: initial;
  }
`;

const TodoText = styled.p`
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  -webkit-text-fill-color: ${(props) => (props.completed ? theme.colors.base.white : 'inherit')};
  color: ${(props) => (props.completed ? theme.colors.base.white : 'inherit')};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.span`
  margin-left: ${theme.space * 2}px;
  position: relative;
  width: ${theme.space}px;
  height: ${theme.space}px;
  cursor: pointer;
  background-color: ${theme.colors.base.black};
  border-radius: 50%;
  padding: 4px;
  &::before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: ${theme.space}px;
    background-color: ${theme.colors.base.white};
    transform: rotate(-45deg);
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: ${theme.space}px;
    background-color: ${theme.colors.base.white};
    transform: rotate(45deg);
  }
`;

const GetStudyTodosByStudyIdPresenter = ({
  formData,
  handleChange,
  handleKeyPress,
  onClickChangeTodoStatus,
  onClickDeleteTodo,
  todos,
  currentUserId,
}) => {
  return (
    <section>
      <Input
        type={'text'}
        placeholder={'스터디 Todo List를 작성해주세요. '}
        onChange={handleChange}
        name={'text'}
        value={formData.text}
        onKeyPress={handleKeyPress}
      />

      <TodoContainer>
        {todos.map((todo) => (
          <TodoItem key={todo._id} completed={todo.completed}>
            <TodoText completed={todo.completed} onClick={() => onClickChangeTodoStatus(todo._id)}>
              {todo.text}
            </TodoText>
            {todo.user === currentUserId && (
              <DeleteButton
                completed={todo.completed}
                onClick={() => onClickDeleteTodo(todo._id)}
              ></DeleteButton>
            )}
          </TodoItem>
        ))}
      </TodoContainer>
    </section>
  );
};

export default GetStudyTodosByStudyIdPresenter;
