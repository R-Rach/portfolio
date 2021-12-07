import { ReactComponent as LoadingLogo } from '../../assets/images/loading-logo.svg';
import { ReactComponent as GmailLogo } from '../../assets/images/gmail-logo.svg';
import { ReactComponent as GithubLogo } from '../../assets/images/github-logo.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/images/linkedin-logo.svg';
import { ReactComponent as MediumLogo } from '../../assets/images/medium-logo.svg';

import ReactTooltip from "react-tooltip";

import './LandingPage.css'

const Loading = () => {
    return (
        <div className="loading-page">
            <LoadingLogo className="loading-logo"/>
            <p className="hello-name">Hello my name is &nbsp;<strong>Rachit Rathore</strong></p>
            <div class="scroll-down"></div>
            <div className="social-medias">
                <a data-tip data-for="gmailTip" href="mailto: rachitrathore77@gmail.com"><GmailLogo className="media-logo" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/R-Rach"><GithubLogo className="media-logo" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/r-rach"><LinkedinLogo className="media-logo" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@rachitrathore77"><MediumLogo className="media-logo" /></a>

                <ReactTooltip id="gmailTip" place="top" effect="solid" className="tooltip" offset={{top: 25}}>rachitrathore77@gmail.com</ReactTooltip>
            </div>
        </div>
    )
}

export default Loading
