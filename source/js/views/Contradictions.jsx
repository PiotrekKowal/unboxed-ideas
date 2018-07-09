import React, { Component } from 'react';
import ListOfContradictions from 'components/containers/ListOfContradictions';

import FaAnchor from 'react-icons/lib/ti/anchor';
import MdHealing from 'react-icons/lib/md/healing';

export default class Contradictions extends Component {
  render() {
    return (
      <div className='animate_text_focus_in'>
        <h3>List of contradictions</h3>
        <p>select which feature you want to improve ({<MdHealing />}) and which has to be left unchanged ({<FaAnchor />})</p>
        <ListOfContradictions />
      </div>
    );
  }
}
