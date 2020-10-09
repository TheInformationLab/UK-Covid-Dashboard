import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SingleSelectMenu.styles';

const SingleSelectMenu = (props) => {
  const [ open, setOpen ] = useState(false);
  const [ hover, setHover ] = useState(-1);
  const [ currentLabel, setCurrentLabel ] = useState("");

  useEffect(() => {
    const valueIdx = props.options.findIndex((option) => {
      return option.value === props.value;
    });
    if (props.options && props.options[valueIdx]) {
      setCurrentLabel(props.options[valueIdx].label);
    }
  }, [props.options, props.value]);

  function useOutsideAlerter(ref) {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && open) {
        setOpen(false);
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
  
  return (
    <div className="space-y-1 pt-1" style={{width: props.mobile ? props.mobileWidth : props.width}}>
      <label id="listbox-label" className="block text-xs leading-5 font-medium text-gray-700">
        {props.label}
      </label>
      <div className="relative">
        <span className="inline-block w-full rounded-md shadow-sm">
          <button type="button" onMouseDown={() => setOpen(true)} onFocus={() => setOpen(true)} aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-2 pr-10 py-1 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            <span className="text-sm block truncate">
              {currentLabel}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </span>

        <div ref={wrapperRef} style={{maxHeight: 'calc(100vh - 200px)'}} className={"absolute z-50 overflow-y-auto overflow-x-hidden mt-1 w-full rounded-md bg-white shadow-lg " + (!open ? 'hidden' : '')}>
          <ul tabIndex={1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">
            {props.options.map((option, idx) => {
              return (
                <li id={"listbox-item-" + idx}
                  key={idx}
                  onClick={() => {
                    if (props.onSelect) {
                      props.onSelect(option.value);
                    } else {
                      props.returnObj(option);
                    }
                    setOpen(false);
                  }}
                  onMouseEnter={() => setHover(idx)}
                  onMouseLeave={() => setHover(-1)}
                  role="option"
                  className={"cursor-default select-none relative px-2 py-2 pl-8 pr-4 " + (hover === idx ? 'text-white bg-blue-600' : 'text-gray-900')}
                >
                  <span className={"text-sm font-normal block truncate " + (option.value === props.value ? 'font-semibold' : '')}>
                    {option.label}
                  </span>
                  <span className={"absolute inset-y-0 left-0 flex items-center ml-2 pl-1.5 " + (option.value !== props.value ? 'hidden ' : '') + (hover === idx ? 'text-white' : 'text-blue-600')}>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
    )
};

SingleSelectMenu.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  width: PropTypes.number
};

SingleSelectMenu.defaultProps = {
  label: 'Filter',
  value: '',
  options: [],
  width: 200
};

export default SingleSelectMenu;
