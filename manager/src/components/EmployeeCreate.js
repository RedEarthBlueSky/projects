import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Container, Section, Input, Button } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Container style={{ flex: 1, flexDirection: 'column' }}>
        <Section style={{ flex: 0.075 }}>
          <Input
            label='Name'
            placeholder='Employee name'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </Section>
        <Section style={{ flex: 0.075 }}>
          <Input
            label='Phone'
            placeholder='555-555-555'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </Section>
        <Section style={{ flex: 0.4, flexDirection: 'column' }}>
          <Text style={styles.pickerText}>Select a Shift</Text>
          <Picker
            style={{ flex: 0.3 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </Section>
        <Section style={{ flex: 0.08 }}>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Create
          </Button>
        </Section>
      </Container>
    );
  }
}

const styles = {
  pickerText: {
    flex: 0.09,
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 0
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps,
  { employeeUpdate, employeeCreate })(EmployeeCreate);
