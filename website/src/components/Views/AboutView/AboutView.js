import React from 'react';
import './AboutView.css';


function AboutView(props) {


    return(
        <div className='demo-view'>
            <h1>Create web applications with SweetPea
            </h1>

            <p>
                SweetPea is a tiny web development kit. It provides a client-server framework that any developer can use to build a dynamic web application. SweetPea is intended for prototyping, learning, and having fun with web applications.
            </p>

            <div>The kit includes:
                <ul>
                    <li>A website for your user interface</li>
                    <li>A server for your back-end functionality</li>
                </ul>
            </div>
            <div>
            All you need to do is:
            <ol>
                <li>
                    Build a user interface for the website.
                    <ul>
                        <li><a href="https://reactjs.org">ReactJS</a>, <a href="https://www.w3schools.com/html/">HTML</a>, and <a href="https://www.w3schools.com/css/">CSS</a>.
                        </li>
                    </ul>
                </li>
                <li>
                    Develop software resources and create an Application Programming Interface (API) for the server.
                    <ul>
                        <li>
                            <a href="https://flask.palletsprojects.com/en/2.2.x/">Flask</a> and <a href="https://www.python.org/">Python</a>
                        </li>
                    </ul>
                </li>
                <li>
                    Call your API from the user interface.
                    <ul>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview">HTTP</a>
                        </li>
                    </ul>
                </li>
            </ol>
            </div>

            <p>
            Figure 1 gives an architecture overview of the SweetPea web development kit. Visit the <a href="docs/glossary.md">Glossary</a> for term definitions.</p>

            <p align="center">
                <br/>
                <img className="app-fig" src="./architecture-overview.png"
                     alt="An architecture diagram showing how the website and server communicate using HTTP."/>
            </p>
            <p align="center">Figure 1. SweetPea architecture overview.</p>
        </div>
    )

}

export default AboutView;
