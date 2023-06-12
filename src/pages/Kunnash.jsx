import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/userList.jpg'
import Image2 from '../images/ajouterDossier.png';
import Image3 from '../images/predict.jpg';

import { FiClock, FiTag } from 'react-icons/fi';


const Kunnash = () => {

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
        Kunnash, Digital Cash Book        </p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Dec 11, 2022                </span>
            </div>
            <div className="flex items-center">
                <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Mobile Developpment
                </span>
            </div>
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
						Android Studio, Java
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
				The problematic aspects of a mobile app for a digital cash book, where users can manage sales made by their clients, track payments and outstanding amounts, and manage the products they sell, can include the following:<br />
                <ul>

<li> 1) User Interface and Experience: Designing a user-friendly and intuitive interface is crucial for a mobile app. Complex navigation, cluttered screens, or confusing workflows can hinder the user experience, leading to frustration and potential errors in managing sales and financial data. Ensuring a smooth and efficient user interface design is essential for user satisfaction and effective usage of the app.</li>

<li> 2) Data Accuracy: Maintaining accurate data within the mobile app is crucial for reliable sales and financial management. Any inconsistencies or inaccuracies in recording sales, payments, or product details can lead to confusion, incorrect financial calculations, and potential loss of revenue. Implementing proper validation mechanisms and error handling processes becomes essential to ensure data accuracy.</li>

<li> 3) Security and Privacy: Although cash payments do not involve online transactions, security measures to protect user privacy and the app's access to personal information are still important. Implementing user authentication and access controls can help ensure that only authorized individuals can access and modify sales and financial data stored on the user's phone.</li>

<li> 4) Scalability and Performance: While there might be only one user and their phone involved in the app, scalability and performance still matter. As the amount of data within the app grows, such as the number of sales or product records, the app should be able to handle the increasing volume of data efficiently. Ensuring the app's performance remains optimal, even with larger datasets, is important for a smooth user experience.</li>

<li> 5) Support and Maintenance: Providing timely support and regular maintenance is crucial for addressing user concerns, fixing any bugs, and improving the app's functionality. A lack of prompt support or infrequent app updates can result in user dissatisfaction and hinder effective usage of the app for managing sales and financial data.</li>

Addressing these problematic areas requires a focus on user experience, data accuracy, security measures, scalability, and performance optimization. Regular support and maintenance should be provided to ensure the app functions smoothly, meeting user expectations for managing sales, payments, and product inventory effectively.
</ul>
	</p>

			</div>
		</div>

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default Kunnash;
