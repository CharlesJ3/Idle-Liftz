import React from 'react';
import FightArea from '../FightArea/FightArea';
import MainInformation from '../MainInformation/MainInformation';
import Options from '..//Options/Options';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      biceps: {
        name: `Biceps`,
        level: 1,
        exp: 0,
        nextExp: 10,
        active: true,
        calculateLevel() {

        },
      },

      triceps: {
        name: `Triceps`,
        level: 1,
        exp: 0,
        nextExp: 10,
        active: true,
        calculateLevel() {

        },
      },

      chest: {
        name: `Chest`,
        level: 1,
        exp: 0,
        nextExp: 10,
        active: true,
        calculateLevel() {

        },
      },

      back: {
        name: `Back`,
        level: 1,
        exp: 0,
        nextExp: 10,
        active: true,
        calculateLevel() {

        },
      },
      abs: {
        name: `Abs`,
        level: 1,
        exp: 0,
        nextExp: 10,
        active: true,
        calculateLevel() {

        },
      },
      legs: {
        name: `Legs`,
        level: 1,
        exp: 0,
        nextExp: 10,
        active: false,
        calculateLevel() {

        },
      },
    }
  }

  render() {
    return(
      <div className="wrapper">
        <FightArea
          triceps={this.state.triceps}
          chest={this.state.chest}
          biceps={this.state.biceps}
          back={this.state.back}
          abs={this.state.abs}
          legs={this.state.legs}
        >

        </FightArea>
        <MainInformation
         triceps={this.state.triceps}
         chest={this.state.chest}
         biceps={this.state.biceps}
         back={this.state.back}
         abs={this.state.abs}
         legs={this.state.legs}
        >

        </MainInformation>
        <Options>

        </Options>
      </div>
    );
  }
}