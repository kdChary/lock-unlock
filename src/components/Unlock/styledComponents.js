// Style your elements here
import styled from 'styled-components'

// styling main container
export const UnlockBg = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, #0b0c1e, #161617, #3c2940);

  display: flex;
  justify-content: center;
  align-items: center;
`

// Styling Content holding container
export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;

  gap: 33px;
  padding: 3vw;
`

// Styling text
export const Text = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`

// Styling button..
export const Button = styled.button`
  border-radius: 5px;
  border: solid 2px #06b6d4;
  background: #06b6d4;
  color: #ffffff;

  padding: 5px 9px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 600;

  outline: none;
  cursor: pointer;
`
// Styling Image..
export const Image = styled.img`
  width: 123px;

  @media (min-width: 768px) {
    width: 223px;
  }
`
