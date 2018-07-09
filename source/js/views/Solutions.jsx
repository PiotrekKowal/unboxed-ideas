import React, { Component } from 'react';
import ListOfSolutions from 'components/containers/ListOfSolutions';
import TiLightbulb from 'react-icons/lib/io/ios-lightbulb-outline';

export default class Solutions extends Component {
  render() {
    return (
      <div className='animate_text_focus_in'>
        <h3>Solutions</h3>
        <p>Below you will find sugestions ({<TiLightbulb />}) for fixing pairs of selected contradictions</p>
        <ListOfSolutions />
      </div>
    );
  }
}
