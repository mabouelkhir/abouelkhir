import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Objective
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						The objective of the project is to provide a tool for prevention and risk management of having diabetes, hypertension, or strokes for individuals, especially those who are at high risk of developing these diseases. Using machine learning algorithms, the web platform can analyze users' medical data and family history to predict their risk of developing these diseases. Doctors can input patients' information about their lifestyle, diet, and physical activity to offer personalized advice on preventing these diseases.
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Tools & Technologies					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						ReactJS, Bootstrap, HTML, CSS, JavaScript, Spring Boot, Python, Sickit-learn
					</p>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Share this
					</p>
					<div className="flex items-center gap-3 mt-5">
						{singleProjectData.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					Challenge				</p>

				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					No one can deny that chronic diseases such as diabetes, high blood pressure, and strokes are common health problems worldwide. Patients suffering from these conditions require continuous monitoring and follow-up of their treatment to avoid complications. In this context, information and communication technologies can play a significant role in the management and prediction of chronic diseases to prevent severe consequences that can profoundly impact the lives of millions of families. That is why we have developed a web platform for the prediction of these diseases as well as the monitoring and management of patients' treatment.<br />This platform will enable doctors to enter their patients' personal data, such as weight, body mass index, age, dietary habits, and current symptoms, to obtain an assessment of their risk of developing these diseases. Additionally, the platform will also allow doctors to track patients' treatment in real-time, visualize the progression of disease risks, and provide personalized advice for effective disease management.<br />
					In this work, our goal is to offer and ensure a better service characterized by its security, reliability, and flexibility, addressing the shortcomings found in other existing solutions like the Aviitam platform. We aim to provide features and functionalities that are more satisfactory for certain patients and specific diseases.
				</p>

			</div>
		</div>
	);
};

export default ProjectInfo;


