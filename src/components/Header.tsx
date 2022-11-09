
import React from "react";
import './header.css';

export function Header() {
    return (
        <div id='header' >
             <div className='symbol-shadow'>
                <div className='symbol'></div>
            </div>                       
            <div id='logo'><b><big>CryptoCurrency</big></b> <i>by Logvinov Alexander</i></div>

            <div className='socbtns'>
                <ul>
                    <li><a href="https://www.linkedin.com/in/tuda-syuda" title="Linkedin" rel="nofollow" className="fa  " target="_blank">Linkedin</a></li>
                    <li><a href="https://github.com/alexlogvinmal" title="GitHub" rel="nofollow" className="fa  " target="_blank">GitHub</a></li>
                </ul>
            </div>

        </div>
    )
}

