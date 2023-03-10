import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { assetlistState } from '../../recoil/assets';

const SelectStatus = ({ postAssetType, index, onChange }: any) => {
  const [showStatus, setShowStatus] = useState(false);
  const assetlist = useRecoilValue(assetlistState);

  return (
    <SelectContainer>
      <SelectBtn
        onClick={() => {
          setShowStatus(!showStatus);
        }}
      >
        {assetlist[index].status ? assetlist[index].status : 'μ ννκΈ° π½'}
      </SelectBtn>
      {showStatus && (
        <SlectList>
          <AssetLabel>
            <input
              type="radio"
              id={String(index)}
              name={postAssetType.type}
              value="π’ μ μ"
              onChange={onChange}
              onClick={() => {
                setShowStatus(false);
              }}
            />
            π’ μ μ
          </AssetLabel>
          <AssetLabel>
            <input
              type="radio"
              id={String(index)}
              name={postAssetType.type}
              value="π΄ λΆμ€"
              onChange={onChange}
              onClick={() => {
                setShowStatus(false);
              }}
            />
            π΄ λΆμ€
          </AssetLabel>
          <AssetLabel>
            <input
              type="radio"
              id={String(index)}
              name={postAssetType.type}
              value="π‘ μλ¦¬μ€"
              onChange={onChange}
              onClick={() => {
                setShowStatus(false);
              }}
            />
            π‘ μλ¦¬μ€
          </AssetLabel>
          <AssetLabel>
            <input
              type="radio"
              id={String(index)}
              name={postAssetType.type}
              value="π΅ μλ¦¬μλ£"
              onChange={onChange}
              onClick={() => {
                setShowStatus(false);
              }}
            />
            π΅ μλ¦¬μλ£
          </AssetLabel>
        </SlectList>
      )}
    </SelectContainer>
  );
};

export default SelectStatus;

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
