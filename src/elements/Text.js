import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin , inline_block, align, overflow} = props;

  const styles = {
    bold: bold, 
    color: color, 
    size: size, 
    margin:margin, 
    inline_block:inline_block,
    align:align,
    overflow:overflow,
  };

  if(overflow){
    return (
      <ScrollP {...styles}>
          {children}
      </ScrollP>
    )
  }
  
  return (
      <P {...styles}>
          {children}
      </P>
  )
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  inline_block:false,
  align:"left",
  overflow:"auto",
};

const P = styled.p`
  display: ${(props) => (props.inline_block? "inline-block" : "block")};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')};
  ${(props) => (props.align? `text-align: ${props.align};` : 'left')};
`;

const ScrollP = styled.p`
  display: ${(props) => (props.inline_block? "inline-block" : "block")};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')};
  ${(props) => (props.align? `text-align: ${props.align};` : 'left')};
  ${(props) => (props.overflow? `overflow-y: ${props.overflow};` : 'auto')};
  max-height: 300px;
  @media screen and (max-width: 540px) {
    max-height: 150px;
  };
  
`;

export default Text;
