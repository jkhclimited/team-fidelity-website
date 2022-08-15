import React, { Component } from 'react';
import './Competitive.css';

class Competitive extends Component {
    render() {
        return (
            <div className="competitivePage">
                <h1>Competitive</h1>
                <div className="competitiveExplanation">
                    Welcome to the Competitive overview of Team Fidelity. Currently we are focused on the popular first-person-shooter game Valorant, created by Riot Games
                    While our organization is focused more heavily on growing players who are new to the competitive scene, we still have a main player roster (Majors) as well as an academy roster (Academy).
                    These two rosters are intended to show players at both higher skill levels (Immortal and higher for Majors) and lower skill levels (Platinum to Diamond for Academy) how it feels to be a part of an organized semi-competitive team, and give them a taste of what it feels to be a part of an e-sports organization.
                    A lot of players trial for our rosters with the assumptions that it will be a walk in the park, and that all they must do is individually perform, but many are shocked by the organization, strict practices, and firm discipline required to stay a part of a team.
                    Ultimately, this translates into a higher turnover rate for the rosters, as some players quickly realize that they cannot keep up with their work or studies and be a part of an active roster with daily practice sessions at the same time.
                    At the end of the day, our goal is for people to join a roster, get a feel of how it works, and potentially be noticed by larger teams should they decide to continue. 
                    Some of our former roster members have even gone on to trial for well-known teams such as Team SoloMid.
                </div>
                <br />
                <div className="competitiveInterest">
                    If you are interested in joining one of the Team Fidelity competitive rosters, please head to the contact page and send us an email with your Discord name and tag, and one of the administration team will be in contact with you shortly!
                    Currently our minimum rank requirements for the Majors roster is Immortal or higher, and for the Academy roster it is Diamond or higher.
                    Even if you do not meet these rank requirements, feel free to apply anyways, as we will still give you a trial and help you achieve the minimum required rank should you fit into our rosters!
                </div>
                <br />
                <div className="rosters">
                    <h3 className="majorsHeader">Majors Roster</h3>
                    <div className="majorsRoster">
                        <p className="majorsRole">Coach:</p><p className="majorsPlayer">Christopher "Saloy" Atkinson</p><br />
                        <p className="majorsRole">Controller:</p><p className="majorsPlayer">Edward "Hobo" Rode</p><br />
                        <p className="majorsRole">Duelist:</p><p className="majorsPlayer">Justin "JDon" Donohue</p><br />
                        <p className="majorsRole">Initiator:</p><p className="majorsPlayer">Zachary "Klaruhtee" Ayala</p><br />
                        <p className="majorsRole">Sentinel:</p><p className="majorsPlayer">Lawson "lwsn" Simmons</p><br />
                        <p className="majorsRole">TBD:</p><p className="majorsPlayer">Human "Person" Being</p>
                    </div><br />
                    <h3>Academy Roster</h3>
                    <div className="academyRoster">
                        <p className="academyRole">Coach:</p><p className="academyPlayer">Bryan "StxrmZ" Placeholder</p><br />
                        <p className="academyText">The Academy roster is expected to change on a regular basis, thus we will not be disclosing the composition at this time.</p>
                    </div>
                </div>                
            </div>
        )
    }
};

export default Competitive;