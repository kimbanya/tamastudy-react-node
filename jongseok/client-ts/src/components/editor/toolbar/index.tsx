import React from 'react';
import styled from 'styled-components';
import RenderInlineStyles from './inlineStyles';

interface Props {
  editorState: any;
  onChange: any;
}

const Toolbar = (props: Props) => {
  const { editorState, onChange } = props;

  return (
    <ToolbarContainer>
      <RenderInlineStyles editorState={editorState} onChange={onChange} />
    </ToolbarContainer>
  );
};

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  padding: 5px 7px;
  margin-bottom: 8px;
  border-radius: 2px 2px 0 0;
  box-shadow: 0 0 3px 1px rgba(15, 15, 15, 0.17);
`;

export default Toolbar;
