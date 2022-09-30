import { useRef } from "react"

const Contact = () => {
	const formRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<section className="contact" id="contact">
			<div className="container">
				<h3 className="header">Contact me</h3>
				<div className="contact_section">
					<form className="form" ref={formRef} onSubmit={handleSubmit}>
						<div className="form-control">
							<label htmlFor="name">Name</label>
							<input type="text" placeholder="Name" name="user_name" />
						</div>
						<div className="form-control">
							<label htmlFor="email">Email</label>
							<input type="email" placeholder="Email" name="user_email" />
						</div>
						<div className="form-control">
							<label htmlFor="subject">Subject</label>
							<input type="text" placeholder="Subject" name="user_subject" />
						</div>
						<div className="form-control">
							<textarea
								cols="30"
								rows="0"
								placeholder="Message"
								name="message"
							></textarea>
						</div>
						<div className="form-control">
							<input type="submit" value="Send" />
						</div>
					</form>
					<div className="contact_info">
						<h3>Let's discuss your project</h3>
						<p>
							What's your story? Get in touch. Always available for freelancing
							if the right project comes along
						</p>
						<div className="add">
							<div className="get">
								<img src="./icons/phone.svg" alt="phone number" />
								<p>(+234) 08161601818</p>
							</div>
							<div className="get">
								<img src="./icons/mail.svg" alt="phone number" />
								<p>taiwooladosu1@gmail.com</p>
							</div>
							<div className="get">
								<img src="./icons/address.svg" alt="" />
								<p>No. 2 Ebira, Mando Kaduna. Nigeria</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
