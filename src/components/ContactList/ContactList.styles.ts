import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 1.6;
`
export const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
`
export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`
export const SearchBox = styled.div`
  display: flex;
  background: #f6f6f6;
  padding: 10px;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  width: 79.78%;
  padding: 5px 10px;
`
export const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
`
export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  height: 48px;
  border: none;
  font-size: 15px;
  margin-left: 10px;
`
export const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px 12px;
  :hover {
    background: #ebebeb;
  }
`
export const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 12px;
`
export const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
`
export const MessageText = styled.span`
  width: 100%;
  font-size: 14px;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
`
export const MessageTime = styled.span`
  font-size: 12px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
`
