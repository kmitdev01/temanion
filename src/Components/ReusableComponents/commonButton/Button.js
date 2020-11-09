import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { BaseColor, Text } from '../../ReusableComponents';
import LinearGradient from "react-native-linear-gradient"

import PropTypes from 'prop-types';
const { width } = Dimensions.get("window")

const Button = (props) => {
  const { onPress, style, title } = props;
  const { loading } = useSelector((state) => ({
    ...state.auth.user,
  }));
  return (

    <TouchableOpacity
      {...{ onPress }}
      style={[
        {
          height: 41.75,
          borderRadius: 20.87,
          justifyContent: 'center',
          alignItems: 'center',
        },
        { ...style },
      ]}>
      <LinearGradient colors={['#FDBF30', '#EFA329']} style={{
        width: width / 1.4,
        height: 41.75,
        marginHorizontal: 60,
        borderRadius: 20.87,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
      }}>
        {loading ? <ActivityIndicator size="small" color={BaseColor.darkBlue} animating={loading} /> : null}
        <Text white17ExtraBold {...{ title }} style={{ marginLeft: 10 }} />
      </LinearGradient>
    </TouchableOpacity>

  );
};

export default Button;

Button.propTypes = {
  loading: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string, // plain text
};

Button.defaultProps = {
  //props for style
  loading: false,
  numberOfLines: 10,
  style: {},
  title: 'tap',
};
