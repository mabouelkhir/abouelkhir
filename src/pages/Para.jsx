import ProjectsGrid from '../components/projects/ParaGrid';
import { ProjectsProvider } from '../context/ParaContext';

const Para = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Para;
