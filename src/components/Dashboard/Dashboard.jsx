import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import SingleSelectMenu from '../SingleSelectMenu/SingleSelectMenu';
import TextWithBubblesSVG from '../../images/TIL Text with Bubbles Inline.svg';
import BubblesSVG from '../../images/Bubbles Colour.svg';
import SlideOver from '../SlideOver/SlideOver';
import ReactGA from 'react-ga';
import areas from './areas';
import CovidDashboards from './CovidDashboards/CovidDashboards';
import * as Scroll from 'react-scroll';
const scroller = Scroll.scroller;
// import PropTypes from 'prop-types';
//import { Test } from './Dashboard.styles';

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

const getHeight = () => window.innerHeight 
|| document.documentElement.clientHeight 
|| document.body.clientWidth;

const Dashboard = (props) => {
  const [ cookies, setCookie ] = useCookies(['vizParams', 'localAreas']);
  const [ sideBar, setSideBar ] = useState(false);
  const [ width, setWidth ] = useState(getWidth());
  const [ height, setHeight ] = useState(900);

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
  const [ showOverview, setShowOverview ] = useState(true);
  const [ localAreas, setLocalAreas ] = useState(cookies.localAreas ? cookies.localAreas : []);

  function setOptions () {
    console.log('[Dashboard.js] setOptions');
    setWidth(getWidth());
    setHeight(getHeight());
    let vizWidth = getWidth();
    let vizHeight = 900;
    const showMobile = vizWidth <= 1050;
    console.log('[Dashboard.js] Mobile', showMobile);
    if (showMobile) {
      vizHeight = 1800;
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
    ReactGA.event({
      category: 'Options',
      action: 'Set ' + paramName,
      label: value
    });
    if (value === 'hide' || value === 'show') {
      setShowOverview(value === 'show');
    } else {
      const params = {...vizParams};
      params[paramName] = value;
      setVizParams(params);
      setCookie('vizParams', JSON.stringify(params), { path: '/', expires: new Date('2021-01-01') });
    }
  }

  function handleScrollTo(ref) {
    setTimeout(() => {
      scroller.scrollTo(ref, {
        duration: 1500,
        smooth: true
      });
    }, 500)
  }

  function addLocalArea(area) {
    const curAreas = [...localAreas];
    curAreas.push(area);
    setLocalAreas(curAreas);
    setCookie('localAreas', JSON.stringify(curAreas), { path: '/', expires: new Date('2021-01-01') });
    handleScrollTo(area.value);
    setSideBar(false);
  }

  function handleRemoveArea(idx) {
    const curAreas = [...localAreas];
    curAreas.splice(idx, 1);
    setLocalAreas(curAreas);
    setCookie('localAreas', JSON.stringify(curAreas), { path: '/', expires: new Date('2021-01-01') });
  }

  function handleReplaceArea(idx, area) {
    const curAreas = [...localAreas];
    curAreas.splice(idx, 1, area);
    setLocalAreas(curAreas);
    setCookie('localAreas', JSON.stringify(curAreas), { path: '/', expires: new Date('2021-01-01') });
  }

  function handleInsertArea(idx) {
    const curAreas = [...localAreas];
    curAreas.splice(idx, 0, {"value": '', "label": ""});
    setLocalAreas(curAreas);
  }

  useEffect(() => {
    ReactGA.pageview('/', null, 'Dashboard');
    setOptions();
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
      label: showOverview ? "Hide Overview" : "Show Overview",
      value: showOverview ? "hide" : "show"
    },
    {
      label: "Nation",
      value: "nation"
    },
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
  <div className="min-h-screen bg-gray-100" style={{backgroundColor: '#F4F6F5', marginBottom: -64}}>

  <nav className="sticky top-0 bg-white shadow-sm min-w-full">
      <div className="mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex h-14">
          <div className="flex">
            <div className="flex items-center">
              <img className="block lg:hidden h-6 w-auto" src={BubblesSVG} alt="Workflow logo"/>
              <img className="hidden lg:block h-10 w-auto" src={TextWithBubblesSVG} alt="Workflow logo"/>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex">
              <div className="max-w-7xl px-4 my-auto sm:px-6 lg:px-8">
                <h1 className="text-xl md:text-2xl font-regular leading-tight text-gray-900">
                  UK Coronavirus Dashboard
                </h1>
              </div>
            </div>
            <div className="pl-1 pt-1 sm:pl-3 sm:pt-3">
              <button type="button" onMouseDown={() => setSideBar(true)} className="-ml-0.5 -mt-0.5 h-10 w-10 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" aria-label="Open sidebar">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>     
        </div>
      </div>
    </nav>
  
  <div className="pb-2 pt-2">
    <main>
      <div className="mx-auto" >
        <CovidDashboards
          showOverview={showOverview}
          areas={localAreas}
          vizOptions={vizOptions}
          vizParams={vizParams}
          localAreas={areas}
          removeArea={(idx) => handleRemoveArea(idx)} 
          addLocalArea={(area) => addLocalArea(area)}
          replaceLocalArea={(idx, area) => handleReplaceArea(idx, area)}
          insertArea={(idx) => handleInsertArea(idx)}
        />
      </div>
    </main>
  </div>

  <SlideOver
      close={() => setSideBar(false)}
      show={sideBar}
      vizParams={vizParams}
      areaTypes={areaTypes}
      measures={measures}
      areas={areas}
      setParam={(name, value) => setParam(name, value)}
      addLocalArea={(area) => addLocalArea(area)}/>
</div>

)};

// Dashboard.propTypes = {
//   // bla: PropTypes.string,
// };

// Dashboard.defaultProps = {
//   // bla: 'test',
// };

export default Dashboard;
