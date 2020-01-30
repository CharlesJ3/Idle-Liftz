import React from 'react';
import FightArea from '../FightArea/FightArea';
import MainInformation from '../MainInformation/MainInformation';
import Options from '..//Options/Options';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <div className="wrapper">
        <FightArea>

        </FightArea>
        <MainInformation>

        </MainInformation>
        <Options>

        </Options>
      </div>
    );
  }
}