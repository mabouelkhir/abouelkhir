import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/nht2.jpg'
import Image2 from '../images/nht1.jpg';
import Image3 from '../images/nht0.jpg';
import CirclePage from './CirclePage';
import { FiClock, FiTag } from 'react-icons/fi';


const Nht = () => {
    const position = {
        lat: 33.2510353,
        lng: -8.4366865
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
        No Hunger Today        </p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Dec 18, 2022                </span>
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
				>This event, organized by the members of the Ship Club, aims primarily to provide food to the needy and impoverished individuals in the city of El Jadida. First, snacks such as sandwiches, fruits, and water bottles are prepared by the members at home. Afterward, all the contributions brought by the members are collected into bags. The members are then dispersed in groups, each with its designated route, to distribute the meals.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>These distributions take place in various neighborhoods and areas where poverty is prevalent, with special attention given to homeless individuals and underprivileged families. The club members show compassion and empathy by offering these meals, thereby fostering a sense of solidarity with the most vulnerable members of the community.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>The main objective of this initiative is to address the basic needs of those in need by providing them with basic sustenance and alleviating their precarious situation, if only for a meal. This action has a significant impact on the lives of the beneficiaries, providing them with some comfort and hope in challenging times.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>The generosity and commitment of the Ship Club members in this initiative demonstrate their willingness to make a tangible difference in society. By working together to provide concrete support to disadvantaged individuals, they embody the values of solidarity and social responsibility.</p>

			</div>
		</div>

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default Nht;
