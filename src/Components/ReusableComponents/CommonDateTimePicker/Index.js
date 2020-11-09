import React from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import styles from './styles';
/**
 * @function minimumDate
 * @param mode
 * @param isPastDate
 * @description If mode is time there there is no restrictions
 */
const minimumDateLocal = (
  mode,
  isPastDate,
  minimumDate,
  isFollowup,
  selectedApptDate,
) => {
  if (mode === 'time' && isFollowup) return undefined;

  if (selectedApptDate) {
    const aptDate = moment(selectedApptDate).format('DD MMM, YYYY');
    const currentDate = moment().format('DD MMM, YYYY');
    if (aptDate === currentDate) {
      return new Date();
    }
  }
  if (isPastDate) {
    const date = moment().subtract(120, 'years').format('LL');
    return new Date(date);
  }
  return minimumDate ? new Date(minimumDate) : undefined;
};

/**
 * @function maximumDate
 * @param mode
 * @param isPastDate
 * @description If mode is time then there is no restrictions
 */
const maximumDate = (mode, isPastDate) => {
  if (mode === 'time') return undefined;

  if (!isPastDate) {
    const maxDate = moment().add(120, 'years').format('LL');
    return new Date(maxDate);
  }
  return new Date();
};

const Index = (props) => {
  const {
    isVisible,
    mode,
    onCancel,
    onConfirm,
    titleIOS,
    isPastDate,
    patientPerHour,
    selectedDate,
    minimumDate,
    isFollowup,
    selectedApptDate,
  } = props;

  return (
    <DateTimePicker
      minimumDate={minimumDateLocal(
        mode,
        isPastDate,
        minimumDate,
        isFollowup,
        selectedApptDate,
      )}
      maximumDate={maximumDate(mode, isPastDate)}
      titleIOS={titleIOS}
      mode={mode || 'date'}
      isVisible={isVisible}
      onConfirm={onConfirm}
      onCancel={onCancel}
      minuteInterval={patientPerHour ? parseInt(60 / patientPerHour, 10) : 30}
      date={selectedDate || new Date()}
      cancelTextStyle={styles.cancelText}
      confirmTextStyle={styles.confirmText}
      is24Hour={false}
    />
  );
};
export default Index;
