import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthLayout } from "./auth/_layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />

        
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </Router>
  );
}
