import React, { useState, useEffect } from 'react';
import TableauEmbed from '../TableauEmbed';
import SingleSelectMenu from '../SingleSelectMenu/SingleSelectMenu';
import TextWithBubblesSVG from '../../images/TIL Text with Bubbles Inline.svg';
import BubblesSVG from '../../images/Bubbles Colour.svg';
// import PropTypes from 'prop-types';
//import { Test } from './Dashboard.styles';

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

const getHeight = () => window.innerHeight 
|| document.documentElement.clientHeight 
|| document.body.clientWidth;

const Dashboard = (props) => {
  // const [ viz, setViz ] = useState();
  const [ width, setWidth ] = useState(getWidth());
  const [ height, setHeight ] = useState(getHeight());
  const [ mobile, setMobile ] = useState(width <= 1050);
  const [ vizParams, setVizParams ] = useState({
    'Embed Area Type' : 'utla'
  });
  const [ vizOptions, setVizOptions ] = useState({
    hideTabs: true,
    hideToolbar: true,
    device: width <= 1050 ? 'phone' : 'desktop',
    width: width + 'px',
    height: height + 'px'
  });

  function setOptions () {
    console.log('[Dashboard.js] setOptions');
    setWidth(getWidth());
    setHeight(getHeight());
    let vizWidth = getWidth();
    let vizHeight = getHeight();
    const showMobile = vizWidth <= 1050;
    setMobile(showMobile);
    if (showMobile) {
      vizHeight = 1600;
    }
    const options = {
      hideTabs: true,
      hideToolbar: true,
      device: showMobile ? 'phone' : 'desktop',
      width: vizWidth + 'px',
      height: vizHeight + 'px'
    }
    console.log('[Dashboard.js] options', options);
    setVizOptions(options);
  };

  function setParam (paramName, value) {
    console.log('[Dashboard.js] setParam', paramName, value);
    const params = {...vizParams};
    params[paramName] = value;
    setVizParams(params);
  }

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => {
        setOptions();
      }, 300);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);
    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
    
  }, []);

  const areaTypes = [
    {
      label: "Region",
      value: "region"
    },
    {
      label: "Upper Tier Local Authority",
      value: "utla"
    },
    {
      label: "Lower Tier Local Authority",
      value: "ltla"
    },
  ]
  
  return (
  <div className="min-h-screen bg-gray-100" style={{backgroundColor: '#F4F6F5'}}>
    <nav className="bg-white shadow-sm">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16">
        <div className="flex">
          <div className="flex items-center">
            <img className="block lg:hidden h-6 w-auto" src={BubblesSVG} alt="Workflow logo"/>
            <img className="hidden lg:block h-10 w-auto" src={TextWithBubblesSVG} alt="Workflow logo"/>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex">
            <div className="max-w-7xl px-4 my-auto sm:px-6 lg:px-8">
              <h1 className="text-2xl font-regular leading-tight text-gray-900">
                UK Coronavirus Dashboard
              </h1>
            </div>
          </div>
          <div className="flex"> 
          <SingleSelectMenu
            label={"View Area Type"}
            value={vizParams['Embed Area Type']}
            options={areaTypes}
            mobile={mobile}
            width={250}
            mobileWidth={200}
            onSelect={(value) => {
              setParam('Embed Area Type', value);
              }}/>  
        </div>
        </div>     
      </div>
    </div>
  </nav>

  <div className="py-2">
    <main>
      <div className="max-w-7xl mx-auto">
        <div className="">
          {/* <TableauEmbed
            url="https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/UKCovid-19CaseAnalysis/UKCasesOverview"
            parameters={vizParams}
            options={vizOptions}
          /> */}
        </div>
      </div>
    </main>
  </div>
</div>

)};

// Dashboard.propTypes = {
//   // bla: PropTypes.string,
// };

// Dashboard.defaultProps = {
//   // bla: 'test',
// };

export default Dashboard;
