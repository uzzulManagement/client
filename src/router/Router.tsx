import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Aside from '../components/aside';
import Dashboard from '../pages/dashboard';
import Layout from '../components/Layout';
import LandingPage from '../pages/Landing/LandingPage';
import AddAsset from '../pages/addasset';
import ModifyAsset from '../pages/modifyasset';
import ConfirmPage from '../pages/Signup/ConfirmPage';
import SignupPage from '../pages/Signup/SignupPage';
import EnterInfoPage from './../pages/Signup/EnterInfoPage';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/enter" element={<EnterInfoPage />} />

        <Route element={<Layout />}>
          <Route element={<Aside />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addasset" element={<AddAsset />} />
            <Route path="/modifyasset" element={<ModifyAsset />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
export default Router;
