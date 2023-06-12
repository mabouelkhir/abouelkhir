import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/tasshilat1.jpg'
import Image2 from '../images/tasshilat2.jpg';
import Image3 from '../images/tasshilat0.jpg';

import { FiClock, FiTag } from 'react-icons/fi';


const Epay = () => {

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
        E-pay, Online Bill Payement        </p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Jan 05, 2023                </span>
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
                    The main objective of the project is to streamline and simplify various payment services by consolidating them into a single web application. The application aims to provide a convenient and efficient solution that can complete payment tasks within minutes.

The key features of the application include payment of electricity and water bills, insurance premiums, university bills, and Wi-Fi bill/phone balance reload. Users can easily view and pay their pending monthly bills, make insurance payments, settle university bills, and pay Wi-Fi bills or recharge phone balances directly through the application.

By offering these services, the project aims to provide users with a seamless and time-saving experience for various payment transactions, eliminating the need for physical visits or waiting in lines.
                    </p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Tools & Technologies					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						ReactJS, Bootstrap, HTML, CSS, JavaScript, Spring Boot 
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
                    Developing a web application for consolidating payment services presents several challenges that need to be addressed. Integration with multiple payment service providers is a primary challenge, as each provider may have different APIs, protocols, and security requirements. Ensuring seamless transactions and compatibility across various payment systems requires careful consideration and implementation.

Managing diverse billing systems poses another obstacle. Different payment services and utility providers often have their own unique billing systems and formats. Developing a flexible and adaptable system capable of handling these variations requires meticulous planning and implementation.

Compliance with regulatory requirements is vital for any payment application. Adhering to data protection laws, financial regulations, and other industry standards can be complex, especially when operating in multiple jurisdictions. Meeting these compliance obligations requires thorough understanding and meticulous implementation.

User interface and experience design play a significant role in the success of a payment application. Striking the right balance between functionality, simplicity, and responsiveness requires thoughtful design and iterative refinement.

Scalability and performance are crucial considerations as the application grows and handles an increasing number of users and transactions. Optimizing database queries, implementing caching mechanisms, and ensuring a robust server infrastructure are key challenges in maintaining performance under high loads.

Thorough testing and quality assurance are paramount for a reliable payment application. Developing comprehensive test cases, conducting rigorous functional testing, and addressing potential vulnerabilities are critical steps in delivering a secure and high-quality payment solution.

While the specific challenges may vary based on project requirements, these considerations provide a broad overview of the potential obstacles that developers may encounter when developing a consolidated payment services application.
					</p>

			</div>
		</div>

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default Epay;
