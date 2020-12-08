import React from 'react';
import CovidDashboard from './CovidDashboard/CovidDashboard';
import { Element } from 'react-scroll';

const CovidDashboards = (props) => (
  <div className="CovidDashboardsWrapper">
    {props.showOverview && <CovidDashboard area={"overview"} vizOptions={props.vizOptions} vizParams={props.vizParams}/> }
    {props.areas.map((area, idx) => {
      return (
        <Element name={area.value} className="element">
          <CovidDashboard 
            key={idx}
            area={area.value}
            name={area.label}
            localAreas={props.localAreas}
            vizOptions={props.vizOptions}
            vizParams={props.vizParams}
            removeArea={() => props.removeArea(idx)}
            addLocalArea={(area) => props.addLocalArea(area)}
            replaceLocalArea={(area) => props.replaceLocalArea(idx, area)}
            insertArea={() => props.insertArea(idx)}
            />
        </Element>
      )
    })}
  </div>
);

export default CovidDashboards;
