import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
            <NavMenu />
            <div className="contents-wrapper">
                <div className="contents">
                    {this.props.children}
                </div>
            </div>
      </div>
    );
  }
}
