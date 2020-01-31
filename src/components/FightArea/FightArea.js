import React from 'react';
import '../FightArea/FightArea.css';

const FightArea = (props) => {
  return (
    <div className="fightArea">
      <img alt={'mainBody'} className={"fightImage"} src={"../images/bodymain.png"}></img>
      <div>
        <div className={"fightPart"} id={"part1"}>
          <p className={"fightPartTitle"}>{props.biceps.name}</p>
        </div>
        <div className={"fightPart"} id={"part2"}>
          <p className={"fightPartTitle"}>{props.chest.name}</p>
        </div>
        <div className={"fightPart"} id={"part3"}>
          <p className={"fightPartTitle"}>{props.triceps.name}</p>
        </div>
        <div className={"fightPart"} id={"part4"}>
          <p className={"fightPartTitle"}>{props.back.name}</p>
        </div>
        <div className={"fightPart"} id={"part5"}>
          <p className={"fightPartTitle"}>{props.abs.name}</p>
        </div>
        <div className={"fightPart"} id={"part6"}>
          <p className={"fightPartTitle"}>{props.legs.name}</p>
        </div>
      </div>
    </div>
  )
}

export default FightArea;