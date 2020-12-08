import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Transition } from '@headlessui/react'
//import { Test } from './SectionMenu.styles';

const SectionMenu = (props) => {
  
  const [ isOpen, setIsOpen ] = useState(false);

  function useOutsideAlerter(ref) {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && isOpen) {
        setIsOpen(false);
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
  <div className="SectionMenuWrapper flex">
    <div className="relative inline-block text-left">
      <div>
        <button onClick={() => setIsOpen(!isOpen)} className="flex pt-2 pl-2 items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="Options" id="options-menu" aria-haspopup="true" aria-expanded="true">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref}>
            <div ref={wrapperRef} className="origin-top-left absolute left-0 ml-6 mt-4 w-56 shadow-lg">
              <div className="rounded-md bg-white shadow-xs">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div onClick={() => props.toggleAreaSelector()} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer" role="menuitem">Change Area</div>
                  <div onClick={() => {
                    props.insertArea();
                    }} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer" role="menuitem">Insert Area Above</div>
                  <div onClick={() => {
                    props.removeArea();
                    setIsOpen(false);
                  }} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer" role="menuitem">Remove</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  </div>
)};

SectionMenu.propTypes = {
  // bla: PropTypes.string,
};

SectionMenu.defaultProps = {
  // bla: 'test',
};

export default SectionMenu;
