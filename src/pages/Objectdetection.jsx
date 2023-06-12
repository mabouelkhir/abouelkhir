import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/userList.jpg'
import Image2 from '../images/ajouterDossier.png';
import Image3 from '../images/predict.jpg';

import { FiClock, FiTag } from 'react-icons/fi';


const Objectdtection = () => {

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
        Object Detection With Haar Cascade        </p>
        <div className="flex">
            <div className="flex items-center mr-10">
                <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Jan 15, 2022                </span>
            </div>
            <div className="flex items-center">
                <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
                <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                Desktop Application
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
                    The objective of the object detection desktop application is to accurately detect roads, green spaces, lights, and buildings in images or video frames using Haar Cascade training. It aims to provide real-time performance, adaptability to different environments, and a user-friendly interface. Scalability, flexibility, and thorough evaluation are key considerations to ensure reliable and efficient detection, enabling seamless integration and enhancing the overall user experience.					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Tools & Technologies					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						Python, Haar Cascade Training, Yolo v3
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
					The challenges for this application implemented using Haar Cascade training to detect roads, green spaces, lights, and buildings can include the following:
<ul>
<li>1. Training Data Availability: Acquiring a diverse and representative dataset for training the Haar Cascade classifier can be challenging. Collecting a sufficient number of annotated images specifically for roads, green spaces, lights, and buildings may require significant effort and resources. Ensuring the dataset covers a wide range of variations in lighting conditions, angles, weather conditions, and environmental factors is crucial for robust detection.</li>

<li>2. Classifier Performance and Accuracy: The performance and accuracy of the Haar Cascade classifier depend on the quality of the training data and the effectiveness of feature extraction. Achieving high precision and recall rates for detecting roads, green spaces, lights, and buildings can be challenging, especially in complex and cluttered scenes. Fine-tuning the classifier parameters and optimizing the feature selection process become critical for accurate and reliable detection.</li>

<li>3. Variation in Object Appearance: Roads, green spaces, lights, and buildings can exhibit significant variations in appearance, scale, and orientation. Challenges can arise when dealing with occlusions, partial visibility, or different types of lighting conditions. Designing a robust classifier that can handle these variations and accurately detect the objects of interest becomes essential.</li>

<li>4. Real-Time Performance: Depending on the complexity of the detection task and the computational resources available, achieving real-time performance can be a challenge. Object detection in real-time requires efficient algorithms and optimized implementations to ensure timely processing of video frames or live camera feeds. Balancing accuracy and speed becomes crucial to provide a responsive user experience.</li>

<li>5. Generalization to Different Environments: The trained Haar Cascade classifier may not generalize well to different environments or datasets that differ significantly from the training data. Adapting the classifier to handle variations in lighting, weather conditions, and architectural styles becomes necessary for robust detection across different settings. Regular updates and retraining of the classifier with new data can help improve generalization.</li>

<li>6. False Positives and False Negatives: False positives (incorrectly detecting objects that are not present) and false negatives (failing to detect objects that are present) are common challenges in object detection. Striking the right balance to minimize both types of errors is crucial for accurate and reliable detection. Fine-tuning the classifier, adjusting detection thresholds, and implementing post-processing techniques can help mitigate these challenges.</li>

Addressing these challenges requires a combination of robust dataset collection, careful training, parameter tuning, feature optimization, and performance optimization techniques. Iterative refinement and continuous evaluation of the object detection system can lead to improved accuracy and reliability in detecting roads, green spaces, lights, and buildings in a desktop application.</ul></p>

			</div>
		</div>

        </SingleProjectProvider>
        </motion.div>
    
	);
};

export default Objectdtection;
