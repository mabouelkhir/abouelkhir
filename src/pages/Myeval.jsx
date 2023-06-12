import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/myeval2.jpg'
import Image2 from '../images/myeval0.png';
import Image3 from '../images/myeval3.jpg';

import { FiClock, FiTag } from 'react-icons/fi';


const Myeval = () => {

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
        MyEval, Online Assessment and Project Management</p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Mai 21, 2022                </span>
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
							src={Image1}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							 height="400"
						/>
						</div>
						<div className="mb-10 sm:mb-0" >
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
                    The objective of the web platform is to provide teachers with a secure and user-friendly tool for conducting project-based evaluations. The platform aims to streamline assessment creation, project management, and evaluation point tracking. Its focus is on data security through authentication and authorization. By achieving these objectives, the platform enhances teachers' ability to evaluate student performance, track progress, and identify areas for improvement, ultimately improving the teaching and learning experience.					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Tools & Technologies					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						Bootstrap, HTML, CSS, JavaScript, PHP , Laravel, voyager laravel
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
					Developing a web platform exclusively for teachers poses several challenges. First, the platform needs to prioritize designing an intuitive and efficient user interface that allows teachers to navigate seamlessly and manage projects, courses, chapters, sections, and evaluation points effortlessly. Customizability is crucial to meet diverse evaluation needs, ensuring teachers can create assessments tailored to their teaching styles and subjects. Additionally, the platform must prioritize data security by implementing robust authentication and authorization mechanisms. By ensuring that only authorized users can access and manipulate the data, the platform can protect sensitive information and maintain confidentiality. Furthermore, the platform must ensure reliability and stability to handle concurrent users and high data volumes without performance issues or downtime. Integrating data analytics capabilities will enable teachers to gain valuable insights into student performance and track progress over time. By addressing these challenges, the platform can empower teachers to conduct project-based evaluations effectively while providing a seamless user experience.</p>

			</div>
		</div>

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default Myeval;
