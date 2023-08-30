import React, {Component} from 'react';
import Slide from 'react-awesome-reveal'
class Resume extends Component{
    render(){
        if (!this.props.data) return null;

        const skillmessage = this.props.data.skillmessage;
        const education = this.props.data.education.map((education) => {
       return ( <div key={education.school}>
            <h3>{education.school}</h3>
            <p className='info'>
                {education.degree} <span>&bull;</span>
                <em className='data'> {education.graduated}</em>
            </p>
            <p>{education.description}</p>
        </div>
        )
        })


        const work = this.props.data.work.map(work => (
            <div key={work.Company}>
                <h3>{work.Company}</h3>
                <p className='info'>
                    {work.title}
                    <span>&bull;</span> <em className='date'>{work.Time}</em>
                </p>
                <p>{work.description}</p>
            </div>
            ))
        
        const skills = this.props.data.skills.map(skill => (
            <li key={skill.name}>
                <em>{skill.name}</em>
                <a href={skill.url}>Show Certificate</a>
            </li>
            ))
        

        return (
            <section id='resume'>
                <Slide left duration={1300}>
                    <div className='row education'>
                        <div className='threee columns header-col'>
                            <h1>
                                <span>Education</span>
                            </h1>
                        </div>

                        <div className='nine columns main-col'>
                            <div className='row item'>
                                <div className='twelve columns'> {education}</div>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide left duration={1300}>
                    <div className='row work'>
                        <div className='three columns header-col'>
                            <h1>
                                <span>Work</span>
                            </h1>
                        </div>

                        <div className='nine columns main-col'>
                            <div className='row itme'>
                                <div className='twelve columns'>
                                    {work}
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>

                <Slide right duration={2000}>
                    <div className='row skill'>
                        <div className='three columns header-col'>
                            <h1>
                                <span>Skills</span>
                            </h1>
                        </div>

                        <div className='nine columns main-col'>
                            <p>{skillmessage}</p>
                            <div className='bars'>
                                <ul className='skills'>{skills}</ul>
                            </div>
                        </div>
                    </div>
                </Slide>
            </section>
            )
    }
}
export default Resume;