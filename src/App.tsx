import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/templates/Layout';
import Encrypt from './components/pages/Encrypt/Encrypt';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Encrypt />} />
					<Route path='/' element={<>home</>} />
					<Route path='*' element={<Encrypt />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

