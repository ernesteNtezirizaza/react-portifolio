import React from "react";

const Skills = () => {
	return (
		<div id="skillsSection">
			<div className="skills">
				<h1 className="mainHeaderSkills">My Skills</h1>
				<div className="commonBorder"></div>
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

				<p className="p-text5">Nodejs</p>
				<div class="container">
					<div class="skills node">90%</div>
				</div>

				<p className="p-text6">MongoDB</p>
				<div class="container">
					<div class="skills mongo">90%</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
