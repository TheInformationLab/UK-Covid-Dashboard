import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import TableauEmbed from '../TableauEmbed';
import SingleSelectMenu from '../SingleSelectMenu/SingleSelectMenu';
import TextWithBubblesSVG from '../../images/TIL Text with Bubbles Inline.svg';
import BubblesSVG from '../../images/Bubbles Colour.svg';
import SlideOver from '../SlideOver/SlideOver';
// import PropTypes from 'prop-types';
//import { Test } from './Dashboard.styles';

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

const getHeight = () => window.innerHeight 
|| document.documentElement.clientHeight 
|| document.body.clientWidth;

const Dashboard = (props) => {
  const [ cookies, setCookie ] = useCookies(['vizParams']);
  const [ sideBar, setSideBar ] = useState(false);
  const [ width, setWidth ] = useState(getWidth());
  const [ height, setHeight ] = useState(getHeight());
  const [ mobile, setMobile ] = useState(width <= 1050);

  const defaultParams = cookies.vizParams ? cookies.vizParams : {
    'Embed Area Type' : 'utla',
    'Embed Measure': 'cases'
  };

  const [ vizParams, setVizParams ] = useState(defaultParams);
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
    setCookie('vizParams', JSON.stringify(params), { path: '/' });
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

  const measures = [
    {
      label: "Cases",
      value: "cases"
    },
    {
      label: "Cases per 100,000 population",
      value: "pop"
    }
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
          <div className="hidden md:flex"> 
            <SingleSelectMenu
              label={"Select Measure"}
              value={vizParams['Embed Measure']}
              options={measures}
              width={250}
              onSelect={(value) => setParam('Embed Measure', value)}/>  
            <SingleSelectMenu
              label={"View Area Type"}
              value={vizParams['Embed Area Type']}
              options={areaTypes}
              width={250}
              onSelect={(value) => setParam('Embed Area Type', value)}/>  
          </div>
          <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button type="button" onMouseDown={() => setSideBar(true)} className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" aria-label="Open sidebar">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>     
      </div>
    </div>
  </nav>

  <div className="py-2">
    <main>
      <div className="max-w-7xl mx-auto">
        <div className="">
          <TableauEmbed
            url="https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/UKCovid-19CaseAnalysis/UKCasesOverview"
            parameters={vizParams}
            options={vizOptions}
          />
        </div>
      </div>
    </main>
  </div>
  <SlideOver close={() => setSideBar(false)} show={sideBar} vizParams={vizParams} areaTypes={areaTypes} measures={measures} setParam={(name, value) => setParam(name, value)}/>
</div>

)};

// Dashboard.propTypes = {
//   // bla: PropTypes.string,
// };

// Dashboard.defaultProps = {
//   // bla: 'test',
// };

export default Dashboard;
