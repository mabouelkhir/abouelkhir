import ProjectsGrid from '../components/projects/ParaGrid';
import { ProjectsProvider } from '../context/ParaContext';

const Para = () => {
	const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.location.reload();
    });
    return () => {
      unlisten();
    };
  }, [history]);

	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Para;
