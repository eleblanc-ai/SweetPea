import React from 'react';
import './AboutView.css';

import ModalImage from "react-modal-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
function AboutView(props) {

    return(
        <div className='demo-view'>
            <h1>Create web applications with SweetPea
            </h1>


            <FontAwesomeIcon icon={faGithub}/> <a href="https://github.com/eleblanc-ai/SweetPea.git">Visit the GitHub repository</a>
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
            Figure 1 shows an architecture overview of the SweetPea web development kit. Visit the <a href="docs/glossary.md">Glossary</a> for term definitions.</p>

            <div align="center">
                <br/>
                {/*<img className="app-fig" src="./architecture-overview.png"*/}
                {/*     alt="An architecture diagram showing how the website and server communicate using HTTP."/>*/}
                <ModalImage className="app-fig"
                    small="./architecture-overview-small.png"
                    large="./architecture-overview.png"
                    alt="Figure 1. A diagram showing how the SweetPea website and server communicate using HTTP."
                />
            </div>
            <p align="center">Figure 1. A diagram showing how the SweetPea website and server communicate using HTTP.</p>

            <div>Check out the <a href="docs/getting-started.md">Get started with SweetPea</a> tutorial to start developing your own app.</div>



            <br/>
            <hr/>
            <div>
                <p>MIT License</p>

                <p>Copyright (c) 2022 Emily LeBlanc</p>

                <p>Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:</p>

                <p>The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.</p>

                <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.</p>

            </div>
        </div>
    )

}

export default AboutView;
