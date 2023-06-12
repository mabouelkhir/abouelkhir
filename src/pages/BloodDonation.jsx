import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/bd3.jpg'
import Image2 from '../images/bd1.jpg';
import Image3 from '../images/bd2.png';
import { FiClock, FiTag } from 'react-icons/fi';
import Map from './Map';



const BloodDonation = () => {
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
        Blood Donation        </p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Oct 27, 2022                </span>
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
                        <div>  <Map markerPosition={position}>
                        </Map>
                        </div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					Description				</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>This significant event, held at the National School of Applied Sciences in collaboration with the El Jadida Blood Transfusion Center, aimed to raise awareness about the critical importance of blood donation. The event served as a platform to emphasize how blood donation saves countless lives worldwide. With the active involvement and support of the engineering students at the school, the event achieved remarkable success.
				</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>Over the course of the event, the El Jadida Blood Transfusion Center had the opportunity to collect an impressive number of donations. Through the joint efforts of the students and the center, more than 60 bags of blood were collected. This substantial contribution played a vital role in rejuvenating the center's blood supply, enabling it to meet the urgent needs of patients.
				</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>The event exemplified the remarkable collaborative spirit and unity of purpose among the engineering students at the National School of Applied Sciences. Their enthusiastic participation in organizing and actively engaging in the event's activities showcased their commitment to making a positive impact on society.
				</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>Furthermore, beyond the immediate benefits of the blood drive, the event served as a catalyst for raising awareness among the student body about the ongoing need for blood donations. By highlighting the life-saving potential of donating blood, the event encouraged students to become regular donors, fostering a culture of giving and altruism.
				</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>The collaboration between the National School of Applied Sciences and the El Jadida Blood Transfusion Center proved to be a powerful synergy, bringing together academic institutions and healthcare providers for a common cause. This partnership not only strengthened the bond between the school and the community but also underscored the importance of social responsibility and civic engagement.
				</p>

			</div>
		</div>

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default BloodDonation;
