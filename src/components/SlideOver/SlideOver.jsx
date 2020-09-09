import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Transition from '../Transition/Transition';
import SingleSelectMenu from '../SingleSelectMenu';
//import { Test } from './SlideOver.styles';

const SlideOver = (props) => {

  const [ show, setShow ] = useState(props.show);

  function useOutsideAlerter(ref) {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && props.show) {
        props.close();
      }
    }
  
    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  useEffect(() => {
    let timeoutId = null;
    const closeSlideOver = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => {
        setShow(false);
      }, 700);
    };
    
    if (!props.show) {
      closeSlideOver();
    } else {
      setShow(true);
    }
    
  }, [props.show]);
  
  return (
    <div className={"fixed inset-0 overflow-hidden " + (show ? "" : "hidden")}>
      <div className="absolute inset-0 overflow-hidden">
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <Transition
            show={props.show}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div ref={wrapperRef} className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <header className="space-y-1 py-6 px-4 bg-blue-700 sm:px-6">
                  <div className="flex items-center justify-between space-x-3">
                    <h2 className="text-lg leading-7 font-medium text-white">
                      Options
                    </h2>
                    <div className="h-7 flex items-center">
                      <button onClick={() => props.close()} aria-label="Close panel" className="text-blue-200 hover:text-white transition ease-in-out duration-150">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm leading-5 text-blue-300">
                      Change the configuration of the dashboard
                    </p>
                  </div>
                </header>
                <div className="relative flex-1 py-6 px-4 sm:px-6">
                  <div className="absolute inset-0 py-6 px-4 sm:px-6">
                    <SingleSelectMenu
                      label={"View Area Type"}
                      value={props.vizParams['Embed Area Type']}
                      options={props.areaTypes}
                      width={250}
                      onSelect={(value) => props.setParam('Embed Area Type', value)}/>  
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </section>
      </div>
    </div>
  )
};

SlideOver.propTypes = {
  // bla: PropTypes.string,
};

SlideOver.defaultProps = {
  // bla: 'test',
};

export default SlideOver;
