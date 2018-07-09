import React from 'react';
import FaAnchor from 'react-icons/lib/ti/anchor';
import MdHealing from 'react-icons/lib/md/healing';
import GoLink from 'react-icons/lib/io/android-compass';
import IoAndroidBulb from 'react-icons/lib/io/android-bulb';
import IoCheckmarkRound from 'react-icons/lib/io/android-done-all';
import IoHelpCircled from 'react-icons/lib/io/help';
import ListItem from 'components/global/List/ListItem';
import ListItemContent from 'components/global/List/ListItemContent';
import ListItemAvatar from 'components/global/List/ListItemAvatar';

const Examples = () => (
  <div className='animate_text_focus_in'>
    <h3>
      Unboxed Ideas
      <p>based on TRIZ method</p>
    </h3>

    <ul className='mdl-list'>
      <ListItem >
        <ListItemContent useBodyClass >
          <ListItemAvatar component={ <GoLink /> } className='mdl-list__item-avatar--transparent' />
            To find a solution to your problem go to <b>Contradictions </b>
        </ListItemContent >
      </ListItem>
      <ListItem >
        <ListItemContent useBodyClass >
          <ListItemAvatar component={ <IoCheckmarkRound /> } className='mdl-list__item-avatar--transparent' />
           Pick which feature you want to improve ({<MdHealing />})
        and which has to be left unchanged ({<FaAnchor />})
        </ListItemContent >
      </ListItem>
      <ListItem >
        <ListItemContent useBodyClass >
          <ListItemAvatar component={ <IoAndroidBulb /> } className='mdl-list__item-avatar--transparent' />
        Check section named <b>Solutions </b>
        to find what you can change in your project, invention, team... or anything with which you have a problem.
        </ListItemContent >
      </ListItem>
      <ListItem >
        <ListItemContent useBodyClass >
          <ListItemAvatar component={ <IoHelpCircled /> } className='mdl-list__item-avatar--transparent' />
          Every solution has a set of examples, which you can find in section <b>Examples</b>
        </ListItemContent >
      </ListItem>
    </ul>
  </div>
);


export default Examples;
