import styled from 'styled-components'


type Props = {
 isSender: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 3;
  background: #f6f7f8;
`
export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
  gap: 10px;
`

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  height: 11.30%;
  align-items: center;
  bottom: 0;
`

export const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 76.27%;
  background: #e5ddd6;
  overflow-y: auto;
`

export const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props:Props) => (props.isSender ? 'flex-end' : 'flex-start')};
  margin: 5px 20px;
`

export const Message = styled.div`
  background: ${(props:Props) => (props.isSender ? '#daf8cb' : 'white')};
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 4px;
`
  
  export const Encrypted = styled.div`
    margin: 0;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    text-align: center;
`

 export const EmojiPlus = styled.div`
  padding: 0;
  display: flex;
  justify-content:space-between;
  width: 70px;
 `