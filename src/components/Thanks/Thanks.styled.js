import styled from 'styled-components';
import { StyledRemText } from 'components/Remainder/Remainder.styled';
import { StyledSecTitle } from 'components/Benefits/Benefits.styled';
import { colors } from 'styles/globalStyles';

export const StyledThkSection = styled.section`
  margin-top: 10px;
  padding: 10px;
  min-width: 320px;
  max-width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('https://i.pinimg.com/564x/01/c8/a2/01c8a2cf6b78cd914eb10ef13360f5cd.jpg');
`;

export const StyledThkTitle = styled(StyledSecTitle)`
  margin-left: auto;
  margin-right: auto;
  width: 310px;

  color: ${colors.mainTextColor};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledThkText = styled(StyledRemText)`
  width: 310px;
  font-size: 16px;
  text-align: center;

  color: ${colors.mainTextColor};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledThkBtn = styled.button`
  padding: 10px 20px;
  margin-top: 60px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  border: none;
  border-radius: 25px;

  color: ${colors.mainTextColor};
  background-color: rgba(0, 0, 0, 0.5);
`;