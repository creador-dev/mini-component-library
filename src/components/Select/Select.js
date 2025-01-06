import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect aria-label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper
          style={{
            "--size": 24 + "px",
          }}
        >
          <Icon id="chevron-down" strokeWidth={1} size={24}></Icon>
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  appearance: none;
`;

const PresentationalBit = styled.div`
  font-size: ${16 / 16} rem;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  pointer-events: none;
  width: var(--size);
  height: var(--size);
  margin: auto;
`;

export default Select;
