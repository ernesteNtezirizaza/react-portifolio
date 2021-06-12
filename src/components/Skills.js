import React from 'react'

const Skills = () => {
    return (
        <div id="skillsSection">
        <div className="skills">
            <h1 className="mainHeaderSkills">My Skills</h1>
            <div className="border"></div>
            <p className="p-text1">HTML</p>
            <div class="container">
                <div class="skills html">95%</div>
            </div>

            <p className="p-text2">CSS</p>
            <div class="container">
                <div class="skills css">90%</div>
            </div>

            <p className="p-text3">React</p>
            <div class="container">
                <div class="skills react">85%</div>
            </div>

            <p className="p-text4">Vue</p>
            <div class="container">
                <div class="skills vue">80%</div>
            </div>
        </div>
        </div>
    )
}

export default Skills
