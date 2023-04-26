import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { ViewModePage } from "@pages/view-mode-page";
import { SettingsPage } from "@pages/settings-page";
import { NotFoundPage } from "@pages/not-found-page";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<ViewModePage />} />
      <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
