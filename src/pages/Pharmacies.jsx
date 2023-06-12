import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/img1.png'
import Image2 from '../images/img3.png';
import Image3 from '../images/pharmacie2.jpg';

import { FiClock, FiTag } from 'react-icons/fi';


const Pharmacies = () => {

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
        Managing and geolocating pharmacies        </p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Jan 07, 2023                </span>
            </div>
            <div className="flex items-center">
                <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Web Developpement || Mobile Developpment
                </span>
            </div>
        </div>
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div className="mb-10 sm:mb-0" >
						<img
							src={Image1}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							
							
						/>
						</div>
						<div className="md-10 sm:mb-0" >
						<img
							src={Image2}
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
                    The objective is to create an application that allows pharmacists to easily register their pharmacies and provide accurate location details. This information will be utilized to build a comprehensive database of pharmacies. On the other hand, regular users should be able to access this database and easily find nearby pharmacies using their current location. They should be able to view the pharmacies on a map and obtain relevant details such as operating hours, availability of emergency services, and contact information.					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Tools & Technologies					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						ReactJS, Bootstrap, HTML, CSS, JavaScript, Spring Boot, Android Studio, Java
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
					The development of a web and mobile application for pharmacists to submit requests and add their pharmacies, as well as for users to locate nearby pharmacies and access their operational status, presents several key challenges. These challenges include implementing a secure user authentication and authorization system, designing an intuitive interface for pharmacists to enter accurate pharmacy details, integrating geolocation services and mapping APIs for displaying nearby pharmacies on a map, providing real-time status updates for pharmacies, developing robust search and filtering capabilities, ensuring a user-friendly interface and experience across platforms, and implementing a scalable data management system to handle increasing users and data. By addressing these challenges, the application aims to enhance accessibility and improve the healthcare experience for users.
                    </p>

			</div>
		</div>
        </div>

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default Pharmacies;
