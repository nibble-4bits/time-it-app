import React from "react";
import Sidebar from "../components/Sidebar.jsx";

export default function About() {
    function directToTwitterAccount(e) {
        window.TimeElectronAPI.openWebPage("https://twitter.com/timeit_");
    }

    function directToWebsite(e) {
        window.TimeElectronAPI.openWebPage("https://time-it.co/");
    }

    function directToGitHub(e) {
        window.TimeElectronAPI.openWebPage(
            "https://github.com/itsmais/time-it-app"
        );
    }

    return (
        <div className="Flex-wide-container">
            <Sidebar/>
            <div className="About">
                <div className="SettingsHeader">
                    <h2>About</h2>
                </div>
                <div className="AboutContent">
                    <p>
                        Time It v1.0.0 (beta) is an open source project to help you time
                        track your work tasks. <br/>
                        It is free and privacy friendly.
                    </p>
                    <p>
                        You can access the source code on Github from
                        <a onClick={directToGitHub}> here</a>.
                    </p>
                    <p>
                        For inquiries, tweet or DM at
                        <a onClick={directToTwitterAccount}> Twitter</a>.
                    </p>
                    <p>
                        For regular updates, follow the application's page on
                        <a onClick={directToTwitterAccount}> Twitter</a> or visit the
                        <a onClick={directToWebsite}> website</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}