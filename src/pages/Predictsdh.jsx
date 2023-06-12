import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/userList.jpg'
import Image2 from '../images/ajouterDossier.png';
import Image3 from '../images/predict.jpg';


import { FiClock, FiTag } from 'react-icons/fi';


const Predictsdh = () => {

	return (
        <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>

        <SingleProjectProvider>
		
		<div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        Predict Diabetes, Hypertension and Stroke        </p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Mai 15, 2023                </span>
            </div>
            <div className="flex items-center">
                <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Web Developpement 
                </span>
            </div>
        </div>
		</div>
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div className="mb-10 sm:mb-0" >
						<img
							src={Image2}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							 height="400"
						/>
						</div>
						<div className="mb-10 sm:mb-0" >
						<img
							src={Image1}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt="{project.title}"
							width="400" height="400"
						/>
						</div>
						<div className="mb-10 sm:mb-0" >
						<img
							src={Image3}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt="{project.title}"
							width="400" height="400"	
						/>
						</div>
					</div>
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

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default Predictsdh;
