import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { assetlistState } from '../../recoil/assets';

const SelectCategory = ({ postAssetType, index, onChange }: any) => {
  const [showCategory, setShowCategory] = useState(false);
  const assetlist = useRecoilValue(assetlistState);

  return (
    <SelectContainer>
      <SelectBtn
        onClick={() => {
          setShowCategory(!showCategory);
        }}
      >
        {assetlist[index].category ? assetlist[index].category : 'μ ννκΈ° π½'}
      </SelectBtn>
      {showCategory && (
        <SlectList>
          <AssetLabel>
            <input
              type="radio"
              id={String(index)}
              name={postAssetType.type}
              value="π₯οΈ λͺ¨λν°"
              onChange={onChange}
              onClick={() => {
                setShowCategory(false);
              }}
            />
            π₯οΈ λͺ¨λν°
          </AssetLabel>
          <AssetLabel>
            <input
              type="radio"
              id={String(index)}
              name={postAssetType.type}
              value="π» λΈνΈλΆ"
              onChange={onChange}
              onClick={() => {
                setShowCategory(false);
              }}
            />
            π» λΈνΈλΆ
          </AssetLabel>
          <AssetLabel>
            <input
              type="radio"
              id={String(index)}
              name={postAssetType.type}
              value="π¨βπ» λ°μ€ν¬ν"
              onChange={onChange}
              onClick={() => {
                setShowCategory(false);
              }}
            />
            π¨βπ» λ°μ€ν¬ν
          </AssetLabel>
        </SlectList>
      )}
    </SelectContainer>
  );
};

export default SelectCategory;

const AssetLabel = styled.label`
  display: block;
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  :hover {
    background-color: var(--gray);
  }
  input {
    display: none;
    ::placeholder {
      opacity: 0;
    }
  }
`;

const SelectContainer = styled.div`
  position: relative;
  padding: 5px;
`;

const SelectBtn = styled.button`
  width: 100%;
`;

const SlectList = styled.div`
  width: 85%;
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  z-index: 999;
  background-color: #fff;
  box-shadow: var(--box-shadow);
`;
