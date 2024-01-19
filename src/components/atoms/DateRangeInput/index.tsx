import React, { useMemo, useRef, useState } from 'react';
import { StyleSheet, Modal, TouchableWithoutFeedback, View, Dimensions } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { DateData, MarkedDates } from 'react-native-calendars/src/types';

import { DateButton, DateText, Overlay, Placeholder } from './styles';
import theme from '../../../style/theme';
import { formatDateRange } from '../../../utils/dateUtils';

const CENTER_HEIGHT = Dimensions.get('window').height / 4;

export interface dateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export function DateRangeInput() {
  const [dateRange, setDateRange] = useState<dateRange>({
    startDate: null,
    endDate: null,
  });

  const [calendarVisible, setCalendarVisible] = useState(false);
  const [calendarContainerLayout, setCalendarContainerLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });

  const calendarContainerRef = useRef<View>(null);

  const onContainerLayout = () => {
    calendarContainerRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setCalendarContainerLayout({ x, y, width, height, pageX, pageY });
    });
  };

  const selectDay = (day: DateData) => {
    const selectedDate = new Date(day.dateString);

    const equalToStartDate = selectedDate.getTime() === dateRange.startDate?.getTime();
    const equalToEndDate = selectedDate.getTime() === dateRange.endDate?.getTime();

    if (!dateRange.startDate && !dateRange.endDate)
      return setDateRange({ startDate: selectedDate, endDate: selectedDate });

    if (selectedDate < dateRange.startDate)
      return setDateRange((previous) => ({
        startDate: selectedDate,
        endDate: previous.startDate,
      }));

    if (selectedDate > dateRange.startDate && !equalToEndDate)
      return setDateRange((previous) => ({
        startDate: previous.startDate,
        endDate: selectedDate,
      }));

    if (equalToStartDate && !equalToEndDate)
      return setDateRange((previous) => ({
        startDate: previous.endDate,
        endDate: previous.endDate,
      }));

    if (!equalToStartDate && equalToEndDate)
      return setDateRange((previous) => ({
        startDate: previous.startDate,
        endDate: previous.startDate,
      }));

    return setDateRange({ startDate: null, endDate: null });
  };

  const computedMarkedDates = useMemo(() => {
    if (!dateRange.startDate && !dateRange.endDate) return {};

    if (dateRange.startDate === dateRange.endDate) {
      return {
        [dateRange.startDate?.toISOString().split('T')[0] || '']: {
          color: theme.colors.primary[500],
          textColor: 'white',
        },
      };
    }

    const marked: MarkedDates = {
      [dateRange.startDate?.toISOString().split('T')[0] || '']: {
        startingDay: true,
        color: theme.colors.primary[500],
        textColor: 'white',
      },

      [dateRange.endDate?.toISOString().split('T')[0] || '']: {
        endingDay: true,
        color: theme.colors.primary[500],
        textColor: 'white',
      },
    };

    return marked;
  }, [selectDay, dateRange]);

  return (
    <View style={styles.container}>
      <DateButton onPress={() => setCalendarVisible(!calendarVisible)}>
        {dateRange.endDate && dateRange.startDate ? (
          <DateText>
            {formatDateRange({ startDate: dateRange.startDate, endDate: dateRange.endDate })}
          </DateText>
        ) : (
          <Placeholder>Adicione uma data</Placeholder>
        )}
      </DateButton>

      <Modal visible={calendarVisible} transparent>
        <TouchableWithoutFeedback onPress={() => setCalendarVisible(false)}>
          <Overlay />
        </TouchableWithoutFeedback>
        <View
          ref={calendarContainerRef}
          onLayout={onContainerLayout}
          style={[styles.calendarContainer, { top: CENTER_HEIGHT }]}>
          <CalendarList
            markingType="period"
            hideArrows={false}
            scrollEnabled={false}
            style={{ borderRadius: 8 }}
            calendarStyle={{ padding: 16, borderRadius: 8 }}
            theme={{
              monthTextColor: `${theme.colors.gray[600]}`,
              textSectionTitleColor: `${theme.colors.gray[300]}`,
              dayTextColor: `${theme.colors.gray[500]}`,
              selectedDayTextColor: `${theme.colors.gray[50]}`,
              calendarBackground: `${theme.colors.primary[50]}`,
              arrowColor: `${theme.colors.primary[500]}`,
            }}
            pastScrollRange={12 * 50}
            futureScrollRange={12 * 50}
            horizontal
            enableSwipeMonths
            onDayPress={(day) => selectDay(day)}
            markedDates={computedMarkedDates}
            calendarWidth={calendarContainerLayout.width}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  calendarContainer: {
    flex: 1,
    margin: 32,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
  },
});