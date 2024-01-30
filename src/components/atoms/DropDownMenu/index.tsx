import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import {
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import {
  Container,
  Label,
  Overlay,
  DropdownContentContainer,
  OptionText,
  Placeholder,
} from './styles';
import theme from '../../../style/theme';
import { Option } from '../../../utils/taskOptions';

interface DropDownMenuProps {
  name: string;
  control: Control<any>;
  default?: any;
  placeholder?: string;
  options: Option[];
}

export function DropDownMenu({
  name,
  control,
  placeholder = 'Selecione uma opção',
  options,
}: DropDownMenuProps): React.ReactElement {
  const { field } = useController({ name, control });

  const findSelectedOption = useCallback(() => {
    const option = options.find((option) => option.value === field.value);
    return option ?? null;
  }, [field.value, options]);

  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState<Option | null>(() => findSelectedOption());
  const [dropdownButtonLayout, setDropdownButtonLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });

  const dropdownButtonRef = useRef<TouchableOpacity>(null);
  const rotation = useRef(new Animated.Value(0)).current;

  const onButtonLayout = () => {
    dropdownButtonRef.current?.measure((x, y, width, height, pageX, pageY) => {
      console.log(height);
      setDropdownButtonLayout({ x, y, width, height, pageX, pageY });
    });
  };

  const handleOptionPress = useCallback(
    (item: Option) => {
      setSelected(item);
      field.onChange(item.value);
      setIsVisible(false);
    },
    [field],
  );

  useEffect(() => {
    Animated.timing(rotation, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isVisible]);

  return (
    <Container showShadow={isVisible}>
      <TouchableOpacity
        ref={dropdownButtonRef}
        style={styles.dropdownButton}
        onPress={() => setIsVisible(!isVisible)}
        onLayout={onButtonLayout}
        activeOpacity={0.2}>
        {selected && field.value ? (
          <Label color={selected?.color}>{selected.label}</Label>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}
        <Animated.Image
          source={require('../assets/arrow-down.png')}
          style={{
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '180deg'],
                }),
              },
            ],
            width: 15,
            height: 15,
          }}
        />
      </TouchableOpacity>

      <Modal visible={isVisible} transparent>
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
          <Overlay />
        </TouchableWithoutFeedback>
        <DropdownContentContainer
          relativeHeight={dropdownButtonLayout.height + dropdownButtonLayout.pageY}
          relativeWidth={dropdownButtonLayout.pageX}
          width={dropdownButtonLayout.width}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleOptionPress(item)}>
                <OptionText>{item.label}</OptionText>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          />
        </DropdownContentContainer>
      </Modal>
    </Container>
  );
}

const styles = StyleSheet.create({
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: `${theme.colors.primary[50]}`,
  },
});
