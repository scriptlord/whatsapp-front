import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  wedth: 100%;
  background: #f8f9fb;
`
export const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  gap: 10px;
  span {
    font-size: 32px;
    color: #525252;
  }
`
export const ChatPlaceholder = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: contain;
`
