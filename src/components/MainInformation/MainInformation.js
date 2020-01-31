import React from 'react';
import '../MainInformation/MainInformation.css';

const MainInformation = (props) => {
  return (
    <div className="mainInformation">
          {/* {body.map((e,index) => {
            return e.type === 'apps' && props.currentMenu === 3 ?
            <p className="projectsItem" key={e.name + index}>
              <a href={e.link} rel="noopener noreferrer" target="_blank">{e.name} <br /><br />
                <img
                  className="imageHolderProjects"
                  src={e.img}
                  width={'75%'}
                  alt={e.name + '' + index}
                  title={e.name}
                >
                </img>
              </a>
            </p> : false;
          })} */}
    </div>
  )
}

export default MainInformation;