import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchTextState } from '../../recoil/assets';
import { getAssetListType } from '../../types/asset';
import { assetNumberState } from './../../recoil/assets';

const SearchList = ({ assetList }: any) => {
  const searchText = useRecoilValue(searchTextState);
  const [assetNumber, setAssetNumber] = useRecoilState(assetNumberState);
  const searchResultList = () => {
    if (searchText !== '') {
      const searchName = assetList?.filter((value: any) => value.name.includes(searchText));
      const searchProduct = assetList?.filter((value: any) => value.product.includes(searchText));
      const searchCategory = assetList?.filter((value: any) => value.category.includes(searchText));
      const searchDepartment = assetList?.filter((value: any) => value.department.includes(searchText));
      const searchManufacturer = assetList?.filter((value: any) => value.manufacturer.includes(searchText));
      const searchacAuisitionDate = assetList?.filter((value: any) => value.acquisitionDate.includes(searchText));
      const searchStatus = assetList?.filter((value: any) => value.status.includes(searchText));
      const searchNote = assetList?.filter((value: any) => value.note.includes(searchText));
      return [
        ...searchName,
        ...searchProduct,
        ...searchCategory,
        ...searchDepartment,
        ...searchManufacturer,
        ...searchacAuisitionDate,
        ...searchStatus,
        ...searchNote,
      ];
    }
  };

  useEffect(() => {
    setAssetNumber([{ assetNumber: 0, identifier: '' }]);
  }, []);

  const checkedsearch = (e: any) => {
    const checked = e.target.checked;
    if (checked) {
      const identifier = window.localStorage.getItem('identifier');
      setAssetNumber([...assetNumber, { assetNumber: Number(e.target.id), identifier: identifier as string }]);
    } else {
      let filtered = assetNumber.filter((element) => element.assetNumber !== Number(e.target.id));
      setAssetNumber(filtered);
    }
  };
  return (
    <div>
      <AssetListContainer>
        {!!searchResultList() ? (
          <>
            {searchResultList()?.map((value: getAssetListType) => {
              return (
                <li key={value?.assetNumber}>
                  <AssetLabel htmlFor={String(value?.assetNumber)}>
                    <AssetItem>
                      <input type="checkbox" id={String(value.assetNumber)} onChange={checkedsearch} />
                    </AssetItem>
                    <AssetItem>{value?.assetNumber}</AssetItem>
                    <AssetItem>{value?.name}</AssetItem>
                    <AssetItem>{value?.product}</AssetItem>
                    <AssetItem>{value?.category}</AssetItem>
                    <AssetItem>{value?.quantity}</AssetItem>
                    <AssetItem>{value?.department}</AssetItem>
                    <AssetItem>{value?.manufacturer}</AssetItem>
                    <AssetItem>{value?.acquisitionDate}</AssetItem>
                    <AssetItem>{value?.status}</AssetItem>
                    <AssetItem>{value?.note}</AssetItem>
                  </AssetLabel>
                </li>
              );
            })}
          </>
        ) : (
          <li>??????????????? ????????????.</li>
        )}
      </AssetListContainer>
      <TotalNumber>
        <p>
          ??????:
          <span> {searchResultList()?.length ? String(searchResultList()?.length).padStart(2, '0') : '00'}</span>???
        </p>
      </TotalNumber>
    </div>
  );
};

export default SearchList;

const AssetListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const AssetLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f4f7fe;
`;
const AssetItem = styled.p`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  font-size: var(--heading4);
`;
const TotalNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  span {
    font-weight: bold;
  }
  p {
    border: 1px solid var(--sub);
    padding: 10px 15px;
    border-radius: 14px;
  }
`;
