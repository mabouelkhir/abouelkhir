import { useContext } from 'react';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import Image1 from '../images/userList.jpg'
import Image2 from '../images/ajouterDossier.png';
import Image3 from '../images/predict.jpg';
import Map from './Map';
import CustomMarker from './CustomMarker';




import { FiClock, FiTag } from 'react-icons/fi';
import { Marker } from '@react-google-maps/api';

const ShipCharityShop = () => {
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
                    Ship Charity Shop        </p>
                    <div className="flex">
                        <div className="flex items-center mr-10">
                            <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                                Mai 15, 2023                </span>
                        </div>
                        <div className="flex items-center">
                            <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
                            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                                Web Developpement
                            </span>
                        </div>
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
                        >
                            The purpose of this event is to raise funds for the club, as it should be noted that the club does not have any external funding and all activities are financed by the members and donations from benefactors. In this event, meals are prepared by the members with the intention of selling them. Additionally, various games and the sale of stickers within the institution are organized to raise funds.</p>
                        <p
                            className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                        >
                            There has been a wide response from engineering students who eagerly participate in these activities, as they genuinely enjoy doing good deeds and recognize that the club's objectives are humanitarian rather than commercial. The club's focus is solely on using the funds for humanitarian and charitable endeavors.</p>
                        <p
                            className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                        >
                           This event serves as a means to replenish the club's finances and ensure its sustainability in carrying out further humanitarian and charitable projects. It highlights the selflessness and dedication of the club members in utilizing their resources and skills to contribute to the betterment of society.</p>
                        <p
                            className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                        >
                            Overall, the event's main goal is not only to raise funds but also to emphasize the humanitarian nature of the club and its commitment to conducting acts of kindness and charity. The widespread participation of engineering students demonstrates their support for these endeavors and their belief in the club's noble objectives.</p>

                    </div>
                </div>

            </SingleProjectProvider>
        </motion.div>

    );
};

export default ShipCharityShop;
