import React, { Component } from 'react';
import './About.css';
import imgSaloy from '../../pics/img-saloy.png';
import imgRafu from '../../pics/img-rafu.png';
import imgTeenie from '../../pics/img-teenie.png';
import imgZeus from '../../pics/img-z3us.png';
import imgKOJI from '../../pics/img-koji.png';
import imgSpidey from '../../pics/img-spidey.png';
import imgPegasus from '../../pics/img-pegasus.png';
import imgJsn from '../../pics/img-jsn.png';

class About extends Component {
    render() {
        return (
            <div className="aboutPage">
                <h1>About The Team</h1>
                <div className="aboutSaloy staffMember">
                    <h3>Christopher "Saloy" Shabalabadingdong</h3>
                    <img className="imageSaloy" src={imgSaloy} />
                    <p className="textSaloy staffText">Hello! In case you want to get to know me, my name is Christopher Atkinson, also known as Saloy. I am a 21 year old Filipino and Thai gamer, who does what he can to constantly chase his dreams! I go by the pronouns He/Him. I am the Founder of Team Fidelity, I wanted to create a safe haven, a sanctuary to all gamers who want to get their foot through the door into the competitive scene. This was one of my biggest dreams although, everyone here in Fidelity now shares that dream along with me. Not only did I compete in Valorant, I also coach Valorant! Some things people don't know about me is that, I suffer from Chronic Depression and i've been battling depression for 9+ years now- BUT DONT FRET! I am happily winning that battle thanks to everyone here in Fidelity! I also play basketball I was a Point Guard for Team Mistic in a Catholic FIBA league. Don't ask to 1v1 me I am terrible now. Lastly, I love to sing! I may not be the best, or have a voice of an angel, but it is something I enjoy doing so much!</p>                    
                </div>

                <div className="aboutRafu staffMember">
                    <h3>Justin "Rafu" Chan</h3>
                    <img className="imageRafu" src={imgRafu} />
                    <p className="textRafu staffText">Hello, my name is Justin (he), aka Rafu, I'm a 26 year old living in the Greater Toronto Area in Canada. I'm basically a boomer in the world of e-sports, so my role in Team Fidelity other than being a Co-Founder is essentially planning, document drafting and reviewing, and just general organizing of the aspects of the team. I'm a massive firearms enthusiast and am also very interested in JDMs, TCGs, and drawing anime tiddies. Other than that, if you strike up a conversation about a topic I know a thing or two in, be warned now that I will never stop talking about it and randomly send you memes or cool pictures about them. Somehow I've managed to stay in Immortal despite my boomer reaction times, so now I can tell kids to git gud.</p>                    
                </div>

                <div className="aboutTeenie staffMember">
                    <h3>Kathleen "Teenie" Xiong</h3>
                    <img className="imageTeenie" src={imgTeenie} />
                    <p className="textTeenie staffText">Hello, my name is Kat aka teenie! I am 20 years old living in Portland Oregon. I am the Co-founder of team fidelity. Been here for almost 2 years. I stared my career off with Team Fidelity on the major's roster. Everyone in here had an impact on my career and I greatly appreciate it! I enjoy having fun with friends and families so positive vibes only in my world! My role in Fidelity is the Human Resources, whenever you need to talk or get out of that mental of "I'm down bad... I suck... I'm bad at the game etc etc..." or if you want to talk about something random, talk to me! Don't be shy I won't bite! I believe everyone has potential in life! You just haven't found your groove yet!</p>                    
                </div>

                <div className="aboutZeus staffMember">
                    <h3>Jesus "Z3US" Camacho</h3>
                    <img className="imageZeus" src={imgZeus} />
                    <p className="textZeus">How's it going, my name is Jesus Camacho aka Z3US. I'm Puerto Rican on lvl 22 in my life rn. I was a huge Overwatch nerd then fell in to this love/hate relationship I currently have with Valorant. Im the guy who loves to listen and am super open minded. I'm looking forward to growing with this amazing family we have here in Team Fidelity. I'm a family oriented person. I am the oldest out of 5 so I'm used to having to lead by example, and taking responsibility over a lot. My dream was always to become apart of a gaming organization and to see what it feels like to be apart of a team and compete in tournaments. Now I just strive with the little free time I have to be the best player I can be! My role in Fidelity is the Promoter I help with in house events and getting people to participate in the various activities we have here in Fidelity. If u have any other questions feel free to ask.</p>
                </div>

                <div className="aboutKOJI staffMember">
                    <h3>Avi "KOJI" Placeholder</h3>
                    <img className="imageKOJI" src={imgKOJI} />
                    <p className="textKOJI">Sup~ I go by Avi or Koji, I'm 20 years old and I was born in Florida. My role in Team Fidelity is to develop/manage content and help establish Fidelity's online presence. I used to work for Verizon as a Cybersecurity Analyst up until about a year ago, I decided that it wasn't for me. Now I travel the world as a Travel Journalist & also do freelance Photography/Videography both of which I absolutely love. As far as gaming goes I used to play Overwatch... a lot.. I peaked top 500 as a Genji main (my biggest flex) oh also 2x google pacman 2006 sprockets champion(second biggest flex) and I'm a ROBLOX demon. Uhh I really like snickerdoodle cookies & cheesecake. I play piano, I'm addicted to tea & white chocolate Reese's. I have a cat named Slate, my hair is white, oh and my nephew is the most dripped out baby ever. Here is a picture of me out camping, that will be all</p>                    
                </div>

                <div className="aboutSpidey staffMember">
                    <h3>Bri "spidey" Placeholder</h3>
                    <img className="imageSpidey" src={imgSpidey} />
                    <p className="textSpidey">Hey Guys!! My name is spidey or Bri either one is fine! I’m 20 and I’m a full time college student and full time gamer 😈😤. My pronouns are she/her and I’m Colombian and Afghan. I live in Northern Cali right now, but eventually I want to move to the east coast! I’m really easy to talk to and I try to make people smile when I can. Sooo if anyone ever needs to talk about life (outside of fidelity) you can talk to me or Teenie ❤️! Some fun facts about me are that I have 2 dogs and a fishy.</p>                    
                </div>

                <div className="aboutPegasus staffMember">
                    <h3>Zach "Pegasus" Brandis</h3>
                    <img className="imagePegasus" src={imgPegasus} />
                    <p className="textPegasus">Hello! My name is Zach or you can call me Pegasus. I'm the tournament coordinator. I'm 19 years old and I'm currently majoring in Media Production, kind of a vast field however my main interests are film production and videography. I grew up in Illinois until preschool when I moved to Pennsylvania and have been here ever since, growing up I competed in numerous sports however stuck with wrestling and cross country, originally wanted to pursue either in an amateur pro level until later on I fell in love with film/movies and esports! Ideally, I would love to create my own films/scripts or help with esports organizations video production/content! My other interests consist of fishing, playing piano, and biking. I am a huge esports fan and love to keep up with up the esports titles, so if ever need anyone to talk about your favorite org or roster I’m down! Always here to help and keep you posted on tournaments that can help boost you as a player or fan to watch!</p>                    
                </div>
                
                <div className="aboutJsn staffMember">
                    <h3>Jason "jsn" Horne</h3>
                    <img className="imageJsn" src={imgJsn} />
                    <p className="textJsn">Hello! My name is Jason or jsn. I’m 20 years old, and my pronouns are He/Him. I’m here to help with esports, I’m always open to questions if anyone needs help with anything. I also used to play on Major’s alongside Saloy and others, and I’m always down to help anyone with any problems they may have.  I have plenty hobbies, my favorite being skating. I've been skating for around 5 years now and still kinda suck at it. I also really love music. Music has helped me through a lot, and I'm always listening to it. I have 2 cats and treat them like they're my children, please send me cat pictures. Thanks guys :D</p>
                </div>
                
            </div>
        )
    }
};

export default About;