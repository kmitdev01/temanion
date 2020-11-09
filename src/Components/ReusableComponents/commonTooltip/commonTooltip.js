import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import styles from './TooltipStyle';
import LocalizedStrings from '../../locales/index';

const CommonTooltip = (props) => {
  const {dismissInstructions} = props;
  return (
    <TouchableWithoutFeedback onPress={() => dismissInstructions()} accessible>
      <View style={styles.instructionsView}>
        <Text style={styles.instructionsViewText}>
          {LocalizedStrings.tooltipText}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommonTooltip;
