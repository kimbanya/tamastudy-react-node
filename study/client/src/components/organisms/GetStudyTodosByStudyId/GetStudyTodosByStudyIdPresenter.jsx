import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import 'moment/locale/ko';
import mediaQuery from '../../../theme/mediaQuery';
import theme from '../../../theme';
import TodoContainer from '../../molecules/TodoContainer';

// atomic
import Input from '../../atoms/Input';

const GetStudyTodosByStudyIdPresenter = ({
  formData,
  handleChange,
  handleKeyPress,
  onClickChangeTodoStatus,
  onClickDeleteTodo,
  todos,
  currentUserId,
  participant,
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

      <TodoContainer
        currentUserId={currentUserId}
        todos={todos}
        onClickChangeTodoStatus={onClickChangeTodoStatus}
        onClickDeleteTodo={onClickDeleteTodo}
        currentUserId={currentUserId}
      />
    </section>
  );
};

export default GetStudyTodosByStudyIdPresenter;
