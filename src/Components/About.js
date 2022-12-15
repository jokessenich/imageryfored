import React from 'react';
import './About.css'
import NavBar from './NavBar'
import PodcastLinks from './PodcastLinks';

export default class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contact:false,
            innerMythology: false,
            sessions: false,
            whoAreYou: false,
            reasons: false
        }
    }


    render() {
        return (
            <div className="podcast-background">
                <h3 className="breathe">breathe</h3>
                <NavBar></NavBar>

                <h1 className="page-header">About </h1>

                <div className="faq-parent-section">
                    <p className="hidden-label" onClick={() => this.setState({ innerMythology: !this.state.innerMythology })}>What is Interactive Guided Imagery?</p>
                    {this.state.innerMythology ?
                        <div className='faq-bg'>
                            <p className='faq-section'>
                            {<br />}
                                . . .
                                {<br />}
                                {<br />}

                                Interactive Guided Imagery℠ is an innovative process that includes all the features of guided imagery and adds the important element of interactivity to the mix. IGI℠ works directly with the images that arise from the individual's own imagination and inner wisdom. These images reflect the inner workings of one's own healing processes, and often permit access to critical information about the issue at hand. With IGI℠, the Interactive Imagery Guide℠ assists the client in learning to access and utilize the insights, resources, and solutions that arise from their own unconscious.
                                {<br />}
                                {<br />}
                                . . .
                                {<br />}
                                {<br />}
                            </p></div> : ""}
                    <p className="hidden-label" onClick={() => this.setState({ reasons: !this.state.reasons })}>What can these sessions help with?</p>
                    {this.state.reasons ?
                        <div className='faq-bg'>

                            <p className='faq-section'>
                                {<br />}
                                . . .
                                {<br />}
                                {<br />}

                                Our outer world and living reality are a reflection of our internal world. Any problem or issue we encounter in the outer world has the potential to be helped.
                                {<br />}
                                {<br />}
                                . . .
                                {<br />}
                                {<br />}
                            </p> </div> : ""}
                    <p className="hidden-label" onClick={() => this.setState({ sessions: !this.state.sessions })}>What are Inner Exploration sessions like?</p>
                    {this.state.sessions ?
                        <div className='faq-bg'>
                            <p className='faq-section'>
                            {<br />}
                                . . .
                                {<br />}
                                {<br />}
                                The sessions have a dream-like quality to the work and it often feels to clients that they are in a different world. Initially we do a short explanation of the session clarification of intent, and permission to proceed. We then use Interactive Guided Imagery to go into a safe place in your unconscious mind and proceed to explore, communicate and clarify. When we have explored to an appropriate extent, or when time has run out, we give thanks, and then come back to the present place and debrief.
                                {<br />}
                                {<br />}
                                . . .
                                {<br />}
                                {<br />}
                            </p> </div> : ""}
                    <p className="hidden-label" onClick={() => this.setState({ whoAreYou: !this.state.whoAreYou })}>Who does this work?</p>
                    {this.state.whoAreYou ? <div className='faq-bg'>
                        <p className='faq-section'>
                        {<br />}
                            . . .
                            {<br />}
                            {<br />}
                            My name is John Kessenich. I have been working with and exploring my own subconscious for 15 years and have been guiding other people with their subconscious for 10 years. I have been practicing body work for 15 years and am certified in Interactive Guided Imagery, Reiki, and Chi Nei Tsang.
                            {<br />}
                            {<br />}
                            My work is to create a safe space and allow a framework for people to connect and explore their own inner worlds. You can see my other imagery work at <a href="https://www.innermythology.com" target="_blank">innerythology.com.</a> And my other conscious, subconscious and superconscious mind work at <a href="https://www.embracingourinnerselves.com" target="_blank">embracingourinnerselves.com </a>
                            {<br />}
                            {<br></br>}
                            . . .
                            {<br />}
                            {<br />}

                        </p> </div> : ""}

                </div>
                <div className="contact-section">
        <h3 onClick = {()=>this.setState({contact:!this.state.contact})}> More questions?</h3>
        {this.state.contact?<div id = "contactInfo">
           <a className="emailLink bigger" href="mailto:innermythology@gmail.com">innermythology (at) gmail.com</a>
            </div>:""}
            </div>
            </div>
        )
    }
}