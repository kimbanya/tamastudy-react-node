import React from 'react';
import { Container, ToolbarItem } from './common';
import { inlineStyles } from './constants';
import { RichUtils } from 'draft-js';

interface Props {
  editorState: any;
  onChange: any;
}

const RenderInlineStyles = (props: Props) => {
  const { editorState, onChange } = props;

  const applyStyle = (style: any) => {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style: any) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return currentStyle.has(style);
  };

  return (
    <Container>
      {inlineStyles.map((item, idx) => {
        return (
          <ToolbarItem
            isActive={() => isActive(item.style)}
            key={`${item.label}.${idx}`}
            onClick={() => applyStyle(item.style)}
          >
            {item.icon || item.label}
          </ToolbarItem>
        );
      })}
    </Container>
  );
};

export default RenderInlineStyles;
