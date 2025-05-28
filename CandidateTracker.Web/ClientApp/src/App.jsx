import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import PendingTable from './Pages/PendingTable';
import ViewDetails from './Pages/ViewDetails';
import ConfirmTable from './Pages/ConfirmTable';
import DeniedTable from './Pages/DeniedTable';
import CandidateCountContextComponent from './GetCount';
const App = () => {
    return (
        <CandidateCountContextComponent>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/AddCandidate' element={<AddCandidate />} />
                <Route path='/PendingTable' element={<PendingTable />} />
                <Route path='/ViewDetails/:id' element={<ViewDetails />} />
                <Route path='/ViewDetails/:id' element={<ViewDetails />} />
                <Route path='/ConfirmTable' element={<ConfirmTable />} />
                <Route path='/DeniedTable' element={<DeniedTable />} />
            </Routes>
            </Layout>
        </CandidateCountContextComponent>
    );
}

export default App;