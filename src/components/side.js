import React, { useState, useEffect } from 'react';
import './styles/side.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUser, faChartBar, faSearch, faTag, faEdit, faBars } from '@fortawesome/free-solid-svg-icons';

function Side() {
    const [selectedOption, setSelectedOption] = useState('');
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isZoomedIn, setZoomedIn] = useState(false); // Add state to track zoomed in state

    useEffect(() => {
        handleResize()

        // Add an event listener to window's resize event
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    const handleResize = () => {
        // Check if the current viewport width is less than or equal to 768px
        if (window.innerWidth <= 760) {
            setZoomedIn(true); // Set isZoomedIn to true
            setSidebarOpen(false); // Set isSidebarOpen to false when zoomed in
        } else {
            setZoomedIn(false); // Set isZoomedIn to false
            setSidebarOpen(true); // Set isSidebarOpen to true when zoomed out
        }
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen); // Toggle the value of isSidebarOpen
    };

    return (
        <>
            {isZoomedIn && ( // Render "Show Sidebar" button only when viewport is zoomed in
                <button className="btn btn-secondary" onClick={handleSidebarToggle}><FontAwesomeIcon icon={faBars} /></button>
            )}
            {isSidebarOpen && ( // Render sidebar only if isSidebarOpen is true
                <div className="sidebar">
                    <div className={isSidebarOpen ? "split left bg-white open" : "split left bg-white"}>
                        <div className="centered">
                            <nav>
                                <ul className="nav sidebar-nav">
                                    <div className="sidebar-header">
                                        <div className="sidebar-brand">
                                            <h2>ADMIN</h2>
                                        </div>
                                    </div>
                                    <li>
                                        <Link
                                            className={selectedOption === 'users' ? 'lis selected' : 'lis'}
                                            to="/users"
                                            onClick={() => handleOptionClick('users')}
                                        >
                                            <FontAwesomeIcon icon={faUser} /> Users
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={selectedOption === 'database' ? 'lis selected' : 'lis'}
                                            to="/database"
                                            onClick={() => { handleOptionClick('database') }}
                                        >
                                            <FontAwesomeIcon icon={faChartBar} /> View Transactions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={selectedOption === 'confirm' ? 'lis selected' : 'lis'}
                                            to="/confirm"
                                            onClick={() => { handleOptionClick('confirm') }}
                                        >
                                            <FontAwesomeIcon icon={faSpinner} /> Waiting Transactions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={selectedOption === 'citzen' ? 'lis selected' : 'lis'}
                                            to="/citzen"
                                            onClick={() => { handleOptionClick('citzen') }}
                                        >
                                            <FontAwesomeIcon icon={faSearch} /> Citizen by National ID
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={selectedOption === 'logs' ? 'lis selected' : 'lis'}
                                            to="/logs"
                                            onClick={() => { handleOptionClick('logs') }}
                                        >
                                            <FontAwesomeIcon icon={faTag} /> View Logs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={selectedOption === 'resetpass' ? 'lis selected' : 'lis'}
                                            to="/resetpass"
                                            onClick={() => { handleOptionClick('resetpass') }}
                                        >
                                            <FontAwesomeIcon icon={faEdit} /> Reset Password
                                        </Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Side;
