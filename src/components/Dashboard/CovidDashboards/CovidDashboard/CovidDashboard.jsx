import React, { useState } from 'react';
import TableauEmbed from '../../../TableauEmbed';
import SectionMenu from './SectionMenu/SectionMenu';
import SingleSelectMenu from '../../../SingleSelectMenu';
//import { Test } from './CovidDashboard.styles';

const CovidDashboard = (props) => {

  const [ showAreaSelector, setShowAreaSelector ] = useState(false);

  const vizUrl = "https://public.tableau.com/views/Covid-19CaseAnalysis_15959477106790"
  // const vizUrl = "https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/UKCovid-19CaseAnalysis"

  if (props.area === 'overview') {
    return (
      <div className="mb-2">
        <TableauEmbed
          url={`${vizUrl}/UKCasesOverview`}
          parameters={props.vizParams}
          options={props.vizOptions}
        />
      </div>
    )
  } else if (props.area === '') {
    return (
      <div className="grid grid-cols-12 sticky z-10 top-0 min-w-full" style={{background: '#f4f6f5'}}>
        <div className="col-span-12 2xl:col-start-2 2xl:col-span-10">
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
      <div>
        <div className="grid grid-cols-12 sticky z-10 top-0 min-w-full" style={{background: '#f4f6f5'}}>
          <div className="col-span-12 2xl:col-start-2 2xl:col-span-10">
            <div className="bg-white py-4 px-2 shadow-sm flex flex-inline mx-auto">
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
        </div>
        <div className="mt-2">
          <TableauEmbed
            url={`${vizUrl}/LocalCases`}
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
      </div>
    )
  } else {
    return (
      <div>
        <div className="grid grid-cols-12 sticky z-10 top-0 min-w-full" style={{background: '#f4f6f5'}}>
          <div className="col-span-12 2xl:col-start-2 2xl:col-span-10">
            <div className="bg-white py-4 px-2 shadow-sm flex flex-inline mx-auto">
              <SectionMenu removeArea={() => props.removeArea()} toggleAreaSelector={() => setShowAreaSelector(!showAreaSelector)} insertArea={() => props.insertArea()}/>
              <div className="flex text-xl md:text-2xl  pl-4">{props.name} Coronavirus Dashboard</div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <TableauEmbed
            url={`${vizUrl}/LocalCases`}
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
      </div>
    )
  }
};

export default CovidDashboard;
