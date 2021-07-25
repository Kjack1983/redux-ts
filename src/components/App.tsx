import { Provider } from "react-redux";
import { store } from "../state";
import RepositoryList from './RepositoriesList';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search for a Package</h1>
				<RepositoryList />
            </div>
        </Provider>
    );
};

export default App;
