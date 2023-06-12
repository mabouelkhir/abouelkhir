import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/ift0.jpg'
import Image2 from '../images/ift1.png';
import Image3 from '../images/ift3.jpg';
import CirclePage from './CirclePage';


import { FiClock, FiTag } from 'react-icons/fi';


const ShipIftar = () => {
    const position = {
        lat: 33.2363889,
        lng: -8.518085
      };
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
        Ship Iftar        </p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Apr 13, 2023                </span>
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

				{/* Single project location */}
                <div className="mb-7">
                            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                                Location
                            </p>
                        </div>
                        <div>  <CirclePage />
                        </div>
	
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					Description				</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					This event shares a similar concept to the No Hunger Today event, where members prepare iftar meals during Ramadan for those in need. These meals consist of complete and nutritious dishes that serve as the foundation for a healthy breakfast. The members distribute the meals to individuals in need, covering as many areas as possible.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					After the distribution, the members come together to break their fast in a warm and familial atmosphere, filled with emotions that reflect the camaraderie and brotherhood among club members. This shared iftar experience strengthens the bond between members and creates a sense of unity and solidarity.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					The No Hunger Today event during Ramadan or Ship Iftar serves as a meaningful initiative to provide nourishment to those who may otherwise go without a proper meal. By extending support during this holy month, the members demonstrate their commitment to helping those in need and promoting a spirit of compassion and togetherness.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					This event not only addresses the immediate physical needs of individuals but also fosters a sense of community and shared responsibility. It creates an opportunity for club members to come together, support one another, and contribute positively to the well-being of society.</p>

			</div>
		</div>

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default ShipIftar;
