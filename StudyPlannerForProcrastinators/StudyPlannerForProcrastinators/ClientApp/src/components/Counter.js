import React, { Component } from 'react';
import StudyTimer from './StudyTimer';

export class Counter extends Component {
  static displayName = Counter.name;
  render() {
    return (
      <div>
            <StudyTimer />
      </div>
    );
  }
}
