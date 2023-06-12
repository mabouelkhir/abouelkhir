// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'PredictSDH',
		publishDate: 'Mai 15, 2023',
		tags: 'web developpement',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			"L'objectif du projet est de fournir un outil de prévention et de gestion des risques d'avoir le diabète, l'hypertension ou l'AVC pour les individus, en particulier ceux qui présentent un risque élevé de développer ces maladies.\nEn utilisant des algorithmes de machine Learning, la plateforme web peut analyser les données médicales et les antécédents familiaux des utilisateurs pour prédire leur risque de développer ces maladies. Les médecins peuvent saisir des informations des patients sur leur	mode de vie, leur alimentation et leur activité physique pour offrir des conseils personnalisés sur la prévention de ces maladies.",
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'ReactJS',
					'Bootstrap',
					'HTML',
					'CSS',
					'JavaScript',
					'Spring Boot',
					'Python',
					'Sickit-learn',
					
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
				"No one can deny that chronic diseases such as diabetes, high blood pressure, and strokes are common health problems worldwide. Patients suffering from these conditions require continuous monitoring and follow-up of their treatment to avoid complications. In this context, information and communication technologies can play a significant role in the management and prediction of chronic diseases to prevent severe consequences that can profoundly impact the lives of millions of families. That is why we have developed a web platform for the prediction of these diseases as well as the monitoring and management of patients' treatment.\n\nThis platform will enable doctors to enter their patients' personal data, such as weight, body mass index, age, dietary habits, and current symptoms, to obtain an assessment of their risk of developing these diseases. Additionally, the platform will also allow doctors to track patients' treatment in real-time, visualize the progression of disease risks, and provide personalized advice for effective disease management.\n\nIn this work, our goal is to offer and ensure a better service characterized by its security, reliability, and flexibility, addressing the shortcomings found in other existing solutions like the Aviitam platform. We aim to provide features and functionalities that are more satisfactory for certain patients and specific diseases.",
			},
			
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
