import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import PendingTable from './Pages/PendingTable';
import ViewDetails from './Pages/ViewDetails';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/AddCandidate' element={<AddCandidate />} />
                <Route path='/PendingTable' element={<PendingTable />} />
                <Route path='/ViewDetails/:id' element={<ViewDetails />} />
            </Routes>
        </Layout>
    );
}

export default App;