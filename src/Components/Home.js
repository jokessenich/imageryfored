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
                {//<p className='p-subheader'> Relax | Explore | Thank</p>
    }
                </div>

                <div className="bottom-half">
                    <p className="p-introduction">
                    Everyone has a subconscious and a conscious mind. The subconscious mind is what keeps us alive, beats our heart, breaths air without us knowing, digests our food, and arouses us sexually. The conscious mind is the internal dialogue that we are aware of inside of our minds. 
                    {<br />}{<br />}ED is a condition that is sometimes caused by an incongruence in the subconscious and conscious minds. Other times, ED can be caused by a negative reinforcement cycle (which feels like a negative spiral) between the conscious mind and subconscious mind.
                    {<br />}{<br />}
Interactive Guided Imagery is a technique that allows participants to dialogue with their subconscious mind and learn to work together with their subconscious. This technique is non-invasive and virtually no-risk. The introductory session is free. I welcome you to give it a try.

                    {<br />}{<br />}

                    {<br />}{<br />}
                    {/* <Link to="about" className="page-link">More</Link> */}
                    </p>
                </div>
                
            </div>
        )
    }
}