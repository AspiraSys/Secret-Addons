import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/OverViewPage/Home";
import Recent from "../pages/Recent/Recent";
import Started from "../pages/Started/Started";
import Drafts from "../pages/Drafts/Draft";
import Tasks from "../pages/Tasks/Task";
import Spaces from "../pages/Spaces/Space";
import Detail from "../pages/Spaces/SpaceDetail/Detail";

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/started" element={<Started />} />
      <Route path="/drafts" element={<Drafts />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/spaces/:id" element={<Spaces />} />
      <Route path="/spaces/:id/:pageId" element={<Detail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default PageRoute;
