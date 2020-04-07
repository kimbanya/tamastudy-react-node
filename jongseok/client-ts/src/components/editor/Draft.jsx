import React, { useState, useEffect } from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import Toolbar from './toolbar';
import styled from 'styled-components';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';

const toolbarPlugin = createToolbarPlugin();

const DraftEditor = ({ handleChangeDescription }) => {
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
  });

  useEffect(() => {
    const content = window.localStorage.getItem('content');
    if (content) {
      state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
    } else {
      state.editorState = EditorState.createEmpty();
    }
  }, []);

  const onChange = (editorState) => {
    setState({
      ...state,
      editorState,
    });
    handleChangeDescription(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <EditorWrapper>
      <Toolbar onChange={onChange} editorState={state.editorState} />
      <EditorContainer>
        <Editor
          placeholder={'포스트 내용을 입력해주세요 ...'}
          editorState={state.editorState}
          onChange={onChange}
          plugins={[toolbarPlugin]}
        />
      </EditorContainer>
    </EditorWrapper>
  );
};

const EditorWrapper = styled.section`
  min-width: 700px;
  display: flex;
  height: fit-content;
  flex-direction: column;
  margin-top: 3em;
`;

const EditorContainer = styled.div`
  display: flex;
  min-height: 9em;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  padding: 5px;
  font-size: 17px;
  font-weight: 300;
  box-shadow: 0 0 3px 1px rgba(15, 15, 15, 0.17);
`;

export default DraftEditor;
