import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Section } from './Section';
import { Button } from './Button';

const ConfirmModal = ({ children }) => {
  return (
    <Modal>
      <View>
        <Section>
          <Text>{children}</Text>
        </Section>
        <Section>
          <Button>
            Yes, remove.
          </Button>
          <Button>
            No, keep.
          </Button>
        </Section>
      </View>
    </Modal>
  );
};

export { ConfirmModal };
