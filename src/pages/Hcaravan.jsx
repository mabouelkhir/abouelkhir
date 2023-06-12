import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/hc0.jpg'
import Image2 from '../images/hc1.jpg';
import Image3 from '../images/hc2.jpg';
import { FiClock, FiTag } from 'react-icons/fi';
import Map from './Map';
import CustomMarker from './CustomMarker';



const Hcaravan = () => {
    const position = {
        lat: 33.2811324,
        lng: -8.3422906
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
        Humanitarian caravan        </p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Feb 18, 2023                </span>
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
                        <div>  <div>  <Map markerPosition={position}>
                        </Map>
                        </div>

                        </div>

				

				
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					Description				</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					This event took place at the Nakhla School in the city of Azemmour. It involved collecting clothes and shoes to donate to underprivileged children, particularly during the harsh winter season when they experience extreme cold and have limited financial resources. The event was organized with the assistance of all the members of the Ship Club.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					During the event, the collected clothes were distributed to the children in need. Additionally, mural drawings were created on the walls of the institution. Furthermore, multiple workshops were set up for the children, including cutting workshops, coloring workshops, and general knowledge question workshops.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					It is worth mentioning that this event coincided with the International Road Safety Day. As part of the event, plays and performances were organized by the students of the institution to raise awareness and promote road safety.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					This event demonstrates the collective effort of the Ship Club members to make a positive impact in the lives of underprivileged children. By providing them with clothes, engaging them in artistic activities, and promoting road safety awareness, the event aims to create a safe and nurturing environment for the children.</p>
				<p
					className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
				>
					Overall, this event at the Nakhla School in Azemmour highlights the club's commitment to social responsibility and community engagement. It exemplifies their dedication to improving the well-being of disadvantaged children, fostering creativity and knowledge, and promoting road safety for a better future.</p>

			</div>
		</div>

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default Hcaravan;
