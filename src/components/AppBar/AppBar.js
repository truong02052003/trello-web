import React from "react";
import './AppBar.css';

const AppBar = () => {
    return (
        <div className="navbar-app">
            <div className="navbar-left">
                <div className="logo-title">
                    <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z" fill="currentColor"></path></svg>
                    Trello
                </div>
                <div className="work-spaces">
                    <span className="kpv7OitsgQTIxo">Workspaces</span>
                    <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor"></path></svg>
                </div>
                <div className="recent">
                    <span className="kpv7OitsgQTIxo">Recent</span>
                    <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor"></path></svg>
                </div>
                <div className="starred">
                    <span className="kpv7OitsgQTIxo">Starred</span>
                    <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor"></path></svg>
                </div>
                <div className="templates">
                    <span className="kpv7OitsgQTIxo">Templates</span>
                    <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 16.7071L4.22185 9.63606C3.83132 9.24554 3.83132 8.61237 4.22185 8.22185C4.61237 7.83133 5.24554 7.83133 5.63606 8.22185L12 14.5858L18.364 8.22185C18.7545 7.83132 19.3877 7.83132 19.7782 8.22185C20.1687 8.61237 20.1687 9.24554 19.7782 9.63606L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071Z" fill="currentColor"></path></svg>
                </div>
                <div className="create">
                    <div className="bt-button-1">Button Shiny</div>
                </div>
            </div>
            <div className="navbar-right">
                <div className="days-free">
                    <button className="bt-button-1"><svg width="16" height="16" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M9.276 4.382 7.357 9.247l-4.863 1.917a.78.78 0 0 0 0 1.45l4.863 1.918 1.919 4.863a.78.78 0 0 0 1.45 0h-.001l1.918-4.863 4.864-1.919a.781.781 0 0 0 0-1.45l-4.864-1.916-1.918-4.865a.78.78 0 0 0-.44-.438.78.78 0 0 0-1.01.438m8.297-2.03-.743 1.886-1.884.743a.56.56 0 0 0 0 1.038l1.884.743.743 1.886a.558.558 0 0 0 1.038 0l.745-1.886 1.883-.743a.557.557 0 0 0 0-1.038l-1.883-.743-.745-1.885a.55.55 0 0 0-.314-.314.56.56 0 0 0-.724.314m-.704 13.003-.744 1.883-1.883.744a.55.55 0 0 0-.316.314.56.56 0 0 0 .316.724l1.883.743.744 1.884c.057.144.17.258.314.315a.56.56 0 0 0 .724-.315l.744-1.884 1.883-.743a.557.557 0 0 0 0-1.038l-1.883-.744-.744-1.883a.55.55 0 0 0-.315-.316.56.56 0 0 0-.723.316"></path></svg>
                        23 days left</button>
                </div>
                <div class="fui-input-with-icon">
                    <input  class="input" type="text" placeholder="Search..." />
                    <span class="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.906 16.32a8 8 0 111.414-1.414l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387zM16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </div>

                <div className="icons">
                    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M6.59 17.83a2 2 0 0 0 2.83 0L6.59 15a2 2 0 0 0 0 2.83m4.79-12.35A5.04 5.04 0 0 1 14.95 4c.97 0 1.95.28 2.79.84q.03-.04.07-.07a1.01 1.01 0 1 1 1.35 1.49 5.05 5.05 0 0 1-.64 6.36l-.72.73c-.78.78-1.81 2.21-2.31 3.21l-1.51 3.02c-.25.5-.77.58-1.17.19l-8.56-8.55c-.4-.4-.31-.92.19-1.17l3.02-1.51c.99-.49 2.42-1.53 3.21-2.31zm2.74 9.63c.52-.97 1.57-2.4 2.35-3.18l.73-.73a3.05 3.05 0 0 0 .39-3.83c-.19-.29-.72-.77-.86-.86A3.04 3.04 0 0 0 15.05 6c-.8 0-1.57.31-2.16.89l-.95.95c-.78.79-2.22 1.82-3.2 2.31L7 11.02l6.07 6.07z"></path></svg>
                    <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12C22 17.5233 17.5233 22 12 22C6.47667 22 2 17.5233 2 12ZM4 12C4 16.4188 7.58124 20 12 20C16.4188 20 20 16.4188 20 12C20 7.58124 16.4188 4 12 4C7.58124 4 4 7.58124 4 12ZM8 10C7.99999 7.48383 10.3214 5.51108 12.9389 6.10713C14.3829 6.43513 15.5569 7.60513 15.8899 9.04813C16.3809 11.1771 15.1719 13.0911 13.3589 13.7471C13.1549 13.8201 13.0099 14.0021 13.0099 14.2191V14.0001C13.0099 14.5521 12.5629 15.0001 12.0099 15.0001C11.4579 15.0001 11.0099 14.5521 11.0099 14.0001V12.9871C11.0179 12.4411 11.4599 12.0001 11.9999 12.0001C13.1029 12.0001 13.9999 11.1021 13.9999 10.0001C13.9999 8.89713 13.1029 8.00013 11.9999 8.00013C10.8959 8.00013 9.99935 8.92313 10.0004 10.0271C9.98522 10.5666 9.54291 11 9 11C8.47773 11 8.04856 10.599 8.00385 10.0882C8.00385 10.0882 8 10.0297 8 10ZM12 18C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16C12.552 16 13 16.448 13 17C13 17.552 12.552 18 12 18Z" fill="currentColor"></path></svg>
                    <span>
                        <img src="https://trello-members.s3.amazonaws.com/67dbce2f12004b5669fc1db4/b2bdfb46915f1dc20709a7f706aaaa1a/50.png"
                        />
                    </span>

                </div>
            </div>
        </div >
    )
}
export default AppBar;