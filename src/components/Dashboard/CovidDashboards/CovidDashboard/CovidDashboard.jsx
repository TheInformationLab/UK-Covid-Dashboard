import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableauEmbed from '../../../TableauEmbed';
import SectionMenu from './SectionMenu/SectionMenu';
import SingleSelectMenu from '../../../SingleSelectMenu';
//import { Test } from './CovidDashboard.styles';

const CovidDashboard = (props) => {

  const [ showAreaSelector, setShowAreaSelector ] = useState(false);

  if (props.area === 'overview') {
    return (
      <div className="mb-4">
          <TableauEmbed
            url="https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/UKCovid-19CaseAnalysis/UKCasesOverview"
            parameters={props.vizParams}
            options={props.vizOptions}
          />
        </div>
    )
  } else if (props.area === '') {
    return (
      <div className="mb-4">
          <div className="bg-white shadow-sm mb-2 p-2 mx-auto" style={{maxWidth: 1385}}>
          <div className="flex flex-inline mx-auto">
            <SingleSelectMenu
                label={"Select Local Area"}
                value={props.area}
                options={props.localAreas}
                width={250}
                returnObj={(area) => {
                  props.replaceLocalArea(area);
                  setShowAreaSelector(false);
                }}/>  
          </div>
        </div>
      </div>
    )
  } else if (showAreaSelector) {
    return (
      <div className="mb-4">
        <div className="bg-white shadow-sm mb-2 p-2 mx-auto" style={{maxWidth: 1385}}>
          <div className="flex flex-inline mx-auto">
            <SingleSelectMenu
                label={"Change Area"}
                value={props.area}
                options={props.localAreas}
                width={250}
                returnObj={(area) => {
                  props.replaceLocalArea(area);
                  setShowAreaSelector(false);
                }}/>  
          </div>
        </div>
        <TableauEmbed
          url="https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/UKCovid-19CaseAnalysis/LocalCases"
          options={{
            ...props.vizOptions,
            height : props.vizOptions.height === '1800px' ? '770px' : props.vizOptions.height
          }}
          parameters={{
            'Embed Measure' : props.vizParams['Embed Measure'],
            'Embed Neighbour Code' : props.area
          }}
        />
      </div>
    )
  } else {
    return (
      <div className="mb-4">
        <div className="bg-white shadow-sm mb-2 p-2 mx-auto" style={{maxWidth: 1385}}>
          <div className="flex flex-inline mx-auto">
            <SectionMenu removeArea={() => props.removeArea()} toggleAreaSelector={() => setShowAreaSelector(!showAreaSelector)} insertArea={() => props.insertArea()}/>
            <div className="flex text-2xl pl-4">{props.name} Coronavirus Dashboard</div>
          </div>
        </div>
        <TableauEmbed
          url="https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/UKCovid-19CaseAnalysis/LocalCases"
          options={{
            ...props.vizOptions,
            height : props.vizOptions.height === '1800px' ? '770px' : props.vizOptions.height
          }}
          parameters={{
            'Embed Measure' : props.vizParams['Embed Measure'],
            'Embed Neighbour Code' : props.area
          }}
        />
      </div>
    )
  }
};

CovidDashboard.propTypes = {
  // bla: PropTypes.string,
};

CovidDashboard.defaultProps = {
  // bla: 'test',
};

export default CovidDashboard;
