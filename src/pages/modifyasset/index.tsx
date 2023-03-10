import React from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';

import { modifyAssetTypeState, showModifyModalState } from '../../recoil/assets';

import AssetTypeList from './AssetTypeList';
import AssetInputList from './ModifyAssetInputList';
import ModifyAssetTypeButton from './ModifyAssetTypeButton';
import ModifyModal from './ModifyModal';

const ModifyAsset = () => {
  const [showModal, setShowModal] = useRecoilState(showModifyModalState);
  const modifyAssetType = useRecoilValue(modifyAssetTypeState);

  return (
    <ModifySupplyContainer>
      {showModal && <ModifyModal />}
      <Header>
        <Title>제품 등록하기</Title>
        <ModifyAssetBtn
          onClick={() => {
            setShowModal(true);
          }}
        >
          등록하기
        </ModifyAssetBtn>
      </Header>
      <ModifySupplyWrap>
        <Column modifyAssetType={modifyAssetType.length}>
          <AssetTypeList />
          <AssetInputList />
        </Column>
        {modifyAssetType.length !== 9 && <ModifyAssetTypeButton />}
      </ModifySupplyWrap>
    </ModifySupplyContainer>
  );
};
export default ModifyAsset;

const ModifySupplyContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 50px;
`;
const ModifySupplyWrap = styled.div`
  display: flex;
  padding: 20px;
`;
const Header = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid var(--gray);
`;
const Title = styled.h1`
  font-size: var(--heading3);
  margin: 10px 0;
  font-weight: bold;
`;
const Column = styled.div<{ modifyAssetType: number }>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.modifyAssetType === 9 &&
    css`
      width: 100%;
    `}
`;

const ModifyAssetBtn = styled.button`
  background-color: var(--primary);
  padding: 5px 25px;
  color: #fff;
  border-radius: 5px;
`;
