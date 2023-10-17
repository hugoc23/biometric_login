import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Registroexitoso = React.lazy(() => import("pages/Registroexitoso"));
const Registroderostro = React.lazy(() => import("pages/Registroderostro"));
const Registrodevoz = React.lazy(() => import("pages/Registrodevoz"));
const Register = React.lazy(() => import("pages/Register"));
const Loginexitoso = React.lazy(() => import("pages/Loginexitoso"));
const Loginrostro = React.lazy(() => import("pages/Loginrostro"));
const Loginvoz = React.lazy(() => import("pages/Loginvoz"));
const Login = React.lazy(() => import("pages/Login"));
const Inicio = React.lazy(() => import("pages/Inicio"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginvoz" element={<Loginvoz />} />
          <Route path="/loginrostro" element={<Loginrostro />} />
          <Route path="/loginexitoso" element={<Loginexitoso />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registrodevoz" element={<Registrodevoz />} />
          <Route path="/registroderostro" element={<Registroderostro />} />
          <Route path="/registroexitoso" element={<Registroexitoso />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
