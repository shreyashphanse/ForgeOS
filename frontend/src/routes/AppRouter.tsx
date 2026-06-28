import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import CommandCenter from "../pages/CommandCenter";
import Discovery from "../pages/Discovery";
import Outreach from "../pages/Outreach";
import Studio from "../pages/Studio";
import Projects from "../pages/Projects";
import Pipeline from "../pages/Pipeline";
import Settings from "../pages/Settings";
import Health from "../pages/Health";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/command-center" replace />} />

          <Route path="command-center" element={<CommandCenter />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="outreach" element={<Outreach />} />
          <Route path="studio" element={<Studio />} />
          <Route path="projects" element={<Projects />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/health" element={<Health />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
