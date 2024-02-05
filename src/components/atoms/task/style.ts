import { Swipeable } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(Swipeable)`
  border-radius: 8px;
`;

export const ContainerDeleteTask = styled.View`
  background-color: ${({ theme }) => theme.colors.error[500]};
  border-radius: 8px;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  padding-right: 16px;
`;

export const ContainerDetailScreen = styled.View`
  background-color: ${({ theme }) => theme.colors.primary[200]};
  border-radius: 8px;
  justify-content: center;
  width: 100%;
  padding-left: 16px;
`;

export const ContainerMain = styled.View`
  display: flex;
  background-color: #fff;
  flex-direction: row;
  background-color: white;
  padding: 8px;
  border-radius: 8px;
`;

export const ContainerData = styled.View`
  gap: 4px;
  flex-basis: 90%;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
  gap: 4px;
`;

export const TextCategory = styled.Text`
  padding: 2px 4px;
  font-size: ${({ theme }) => theme.texts.bodyP4Regular.fontSize}px;
  background-color: ${({ theme }) => theme.colors.secondary[300]};
  border-radius: 8px;
`;

export const TextIcon = styled.Text`
  background-color: ${({ theme }) => theme.colors.secondary[800]};
  padding: 2px 8px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray[50]};
  text-align: center;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const TextDate = styled.Text`
  font-size: ${({ theme }) => theme.texts.bodyP4Regular.fontSize}px;
`;

export const Check = styled.TouchableOpacity`
  flex-basis: 10%;
  align-items: center;
  justify-content: center;
`;

export const CicleOff = styled.View`
  border: 1.5px solid black;
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export const CicleOn = styled.View`
  border: 1.5px solid green;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
