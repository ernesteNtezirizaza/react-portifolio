import React from "react";
import "./FormPage.css";

const FormPage = () => (
	<div class="container">
		<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input
						type="text"
						required
						class="rounded w-full py-6 px-7"
					/>
					<label>Name</label>
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input
						type="text"
						required
						class="rounded w-full py-6 px-7"
					/>
					<label>Email</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea
						required
						class="rounded w-full py-6 px-7"
						type="text"
					></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn">Send Message</div>
			</div>
		</div>
	</div>
);

export default FormPage;
