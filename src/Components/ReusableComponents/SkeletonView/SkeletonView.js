import React from 'react';
import PropTypes from 'prop-types';
import {Animated, View, Easing} from 'react-native';

class SkeletonView extends React.Component {
  constructor(props) {
    super(props);

    this.animatedOpacity = new Animated.Value(0);

    this.state = {
      opacityValue: 0,
    };
  }

  componentDidMount() {
    this.getAnimated();

    this.intervalId = setInterval(() => {
      this.getAnimated();
    }, 800);
  }

  /**
   * @function getAnimated.
   * @description getAnimated.
   */
  // eslint-disable-next-line react/sort-comp
  getAnimated() {
    const {opacityValue} = this.state;
    return Animated.timing(this.animatedOpacity, {
      toValue: opacityValue,
      easing: Easing.linear,
      duration: 500,
      useNativeDriver: true,
    }).start(() => this.setState({opacityValue: opacityValue === 0 ? 1 : 0}));
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getChildren(element) {
    return React.Children.map(element, (child, index) => {
      const {style} = child.props;
      if (child.props.children) {
        return (
          <View
            key={index}
            style={{
              ...style,
            }}>
            {this.getChildren(child.props.children)}
          </View>
        );
      }
      return (
        <View
          key={index}
          style={[style, {backgroundColor: this.props.backgroundColor}]}
        />
      );
    });
  }

  render() {
    const {maxOpacity, minOpacity} = this.props;
    return (
      <Animated.View
        style={{
          opacity: this.animatedOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [maxOpacity, minOpacity],
          }),
        }}>
        {this.getChildren(this.props.children)}
      </Animated.View>
    );
  }
}

SkeletonView.propTypes = {
  minOpacity: PropTypes.number,
  maxOpacity: PropTypes.number,
  backgroundColor: PropTypes.string,
};

SkeletonView.defaultProps = {
  minOpacity: 0.3,
  maxOpacity: 1,
  backgroundColor: '#eee',
};

export default SkeletonView;
