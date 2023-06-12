import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import Map from '../../pages/Map';

const ContactForm = () => {
	const position = {
        lat: 33.54920463717511,
        lng: -7.598614416931543
      };
	return (
		<div className="w-full lg:w-1/2">
			<Map markerPosition={position}>
                        </Map>
		</div>
	);
};

export default ContactForm;
