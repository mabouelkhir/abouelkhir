import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';

import Image1 from '../images/rnv (2).webp';
import Image2 from '../images/rnv (7).webp';
import Image3 from '../images/rnv (3).webp';

import { FiClock, FiTag } from 'react-icons/fi';
import Map from './Map';
import CustomMarker from './CustomMarker';



const Renovation = () => {
    const position = {
        lat: 33.1971212,
        lng: -8.4231566
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
                        Renovation        </p>
                    <div className="flex">
                        <div className="flex items-center mr-10">
                            <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                                Nov 19-20, 2022                </span>
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
                        <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
                            The Ship Club, of which I am the general advisor, organized a major school renovation initiative at Lkhadra School, which took place over a period of two days. The main objective of this event was to improve the school environment and create a conducive space for learning, in order to encourage students to study under favorable conditions.

                            </p><p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                            >On the first day of the event, our dynamic team embarked on repainting the entire school, from walls to ceilings, including doors and windows. We also dedicated time to freshening up the classroom tables, providing a more pleasant and welcoming environment for the students.

                                </p><p
                                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                                >The work continued on the morning of the second day, where we redoubled our efforts to finalize the last details of the renovation. Additionally, to make this event even more special, we organized a series of exciting workshops for the students. These diverse workshops included artistic activities such as drawing, creative cutting sessions, as well as general knowledge quizzes. They allowed the students to have fun while discovering and nurturing their personal talents.

                                </p><p
                                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                                >At the end of this enriching experience, we wanted to express our gratitude to the dedicated members of the Ship Club who actively participated in this renovation event. We presented them with certificates in recognition of their commitment and contribution. Furthermore, we also granted certificates of appreciation to the teachers of Lkhadra School, who warmly welcomed us and provided valuable support throughout these two days of the event.

                                </p><p
                                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                                >In summary, the renovation of Lkhadra School orchestrated by the Ship Club was a remarkable success. Not only did we provide a renovated and improved learning space, but we also created a positive and stimulating atmosphere for the students. We hope that this initiative will have a lasting impact on their educational journey, encouraging them to pursue their studies in favorable and conducive conditions for their personal growth.
                            </p>

                    </div>
                </div>

            </SingleProjectProvider>
        </motion.div>

    );
};

export default Renovation;
