import { Image } from 'expo-image';
import { TouchableOpacityProps, ImageSourcePropType } from 'react-native';

import { Button } from './styles';

interface IconButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  Icon: null | React.ReactElement;
  source?: ImageSourcePropType;
  size: number;
}

export function IconButton({ onPress, Icon, source, size, ...props }: IconButtonProps) {
  return (
    <Button onPress={onPress} {...props}>
      {source ? (
        <Image source={source} style={{ width: size, height: size }} contentFit="contain" />
      ) : (
        Icon
      )}
    </Button>
  );
}
