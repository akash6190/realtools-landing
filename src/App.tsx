import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";
import DashboardHomePage from "./pages/dashboard/HomePage";
import HomePage from "./pages/landing/HomePage";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<DashboardHomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route
        path="*"
        element={
          <PublicLayout>
            <NotFoundPage />
          </PublicLayout>
        }
      />
    </Routes>
  );
}

export default App;
