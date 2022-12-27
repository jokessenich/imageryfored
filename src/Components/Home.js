import React from 'react'
import './Home.css'
import '../App.css';
import NavBar from './NavBar.js'
import {Link} from 'react-router-dom'
//import Context from '../../Context'

export default class Home extends React.Component {

    render(){
        return(
            <div>
                <div className="top-half">
                <h3 className="breathe">breathe</h3>
                <NavBar></NavBar>
                <Link to='/' className="entryheader">Imagery for ED</Link>
                <a className="scheduleLinkHome" href="https://calendly.com/innermythology/intro-session">Book a Free Session!</a>

                {//<p className='p-subheader'> Relax | Explore | Thank</p>
    }
                </div>

                <div className="bottom-half">
                    <p className="p-introduction">ED is a condition that is sometimes due to an issue in the relationship between the conscious and subconscious minds.
                    Everyone has a subconscious and a conscious mind. The subconscious mind is what keeps us alive, beats our heart, breaths air without us knowing, digests our food, and arouses us sexually. The conscious mind is the internal dialogue that we are aware of inside of our minds. 
                    {<br />}{<br />}A simplistic example of how this works with psychogenic ED is that the conscious mind wants to have a sexual arousal, but the subconscious mind refuses. This refusal could be due to fear, anger, feelings of neglect, among many other things. These feelings grow because of the incongruence and frustration in the subconscious and conscious minds. We have now entered a negative reinforcement cycle (which feels like a negative spiral) between the conscious mind and subconscious mind.
                    {<br />}{<br />}
Interactive Guided Imagery is a technique that allows participants to dialogue with their subconscious mind and learn to work together with their subconscious. We use a technique called Inner Exploration and see what the subconscious wants and needs and how to heal. We bring it gifts and gratitude and start restoring the love in the relationship of subconscious and conscious. This technique is non-invasive and virtually no-risk. The introductory session is free. I welcome you to give it a try.

                    {<br />}{<br />}

                    {<br />}{<br />}
                    {/* <Link to="about" className="page-link">More</Link> */}
                    </p>
                </div>
                
            </div>
        )
    }
}