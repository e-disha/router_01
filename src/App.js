import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './About';
import ChoiceDetails, { choiceDetailsLoader } from './ChoiceDetails';
import ChoiceError from './ChoiceError';
import Choices, { choicesLoader } from './Choices';
import ChoicesLayout from './ChoicesLayout';
import Contact, { contactAction } from './Contact';
import Faq from './Faq';
import Help from './Help';
import Home from './Home';
import LostPage from './LostPage';
import RootElement from './RootElement';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootElement />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='help' element={<Help />}>
              <Route path='faq' element={<Faq />} />
              <Route path='contact' element={<Contact />} action={contactAction}/>
            </Route>

            <Route path='choices' element={<ChoicesLayout />} errorElement={<ChoiceError />}>
                <Route index element={<Choices />} loader={choicesLoader}/>
                <Route path=':id' element={<ChoiceDetails />} loader={choiceDetailsLoader}/>
            </Route>

            <Route path='*' element={<LostPage />} />
        </Route>
    )
)

const App = () => {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}
 
export default App;