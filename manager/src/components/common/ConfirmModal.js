import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Section } from './Section';
import { Button } from './Button';

const ConfirmModal = ({ children, visible, onAccept, onDecline }) => {
  const { sectionStyle, textStyle, wrapperStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={() => {}}  // required by android
    >
      <View style={wrapperStyle}>
        <Section style={sectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </Section>
        <Section>
          <Button onPress={onAccept}> Yes </Button>
          <Button onPress={onDecline}> No </Button>
        </Section>
      </View>
    </Modal>
  );
};

const styles = {
  sectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  wrapperStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { ConfirmModal };
