import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginContainer from 'containers/LoginContainer';
import DashboardContainer from 'containers/DashboardContainer';
import ForgotPasswordContainer from 'containers/ForgotPasswordContainer';
import RegisterContainer from 'containers/RegisterContainer';
import ProjectContainer from 'containers/ProjectContainer';
import FodaContainer from 'containers/FODA/FodaContainer';
import FodaContainerResults from 'containers/FODA/FodaContainerResults';
import PestelContainer from 'containers/PESTEL/PestelContainer';
import PestelContainerResults from 'containers/PESTEL/PestelContainerResults';
import CreateToolContainer from 'containers/CreateToolContainer';
import McKinseyContainer from 'containers/MCKINSEY/McKinseyContainer';
import McKinseyContainerResults from 'containers/MCKINSEY/McKinseyContainerResults';
import AnsoffContainer from 'containers/ANSOFF/AnsoffContainer';
import AnsoffContainerResults from 'containers/ANSOFF/AnsoffContainerResults';
import PorterContainerResults from 'containers/PORTER/PorterContainerResults';
import PorterContainer from 'containers/PORTER/PorterContainer';
import OKRContainer from 'containers/OKRs/OKRContainer';
import BalancedContainer from 'containers/Balanced Scorecard/BalancedContainer';
import QuestionnarieContainer from 'containers/Questionnarie/QuestionnarieContainer';
import QuestionnarieQuestionsContainer from 'containers/Questionnarie/QuestionnarieQuestionsContainer';
import QuestionnarieResultsContainer from 'containers/Questionnarie/QuestionnarieResultsContainer';
import MejoraContinuaContainer from 'containers/MEJORA-CONTINUA/MejoraContinuaContainer';
import ConsultoriaContainer from 'containers/AdminConsultoria/AdminConsultoriaContainer';
import UserProfileContainer from 'containers/UserProfileContainer';
import DashboardRouteContainer from 'containers/DashboardRouteContainer';

export const NavigationContainer = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/forgot-password" element={<ForgotPasswordContainer />} />
      <Route path="/dashboard" element={<DashboardRouteContainer />}>
        <Route path="" element={<DashboardContainer />} />
      </Route>
      <Route path="/consultoria" element={<ConsultoriaContainer />} />
      <Route path="/profile" element={<UserProfileContainer />} />
      <Route path="/projects">
        <Route
          path=":id/foda/:fodaId/results"
          element={<FodaContainerResults />}
        />
        <Route path=":id/foda/:fodaId" element={<FodaContainer />} />
        <Route
          path=":id/pestel/:pestelId/results"
          element={<PestelContainerResults />}
        />
        <Route path=":id/pestel/:pestelId" element={<PestelContainer />} />
        <Route
          path=":id/mckinsey/:matrizId/results"
          element={<McKinseyContainerResults />}
        />
        <Route path=":id/ansoff/:ansoffId" element={<AnsoffContainer />} />{' '}
        <Route
          path=":id/ansoff/:ansoffId/results"
          element={<AnsoffContainerResults />}
        />
        <Route path=":id/mckinsey/:matrizId" element={<McKinseyContainer />} />
        <Route
          path=":id/porter/:porterId/results"
          element={<PorterContainerResults />}
        />
        <Route path=":id/porter/:porterId" element={<PorterContainer />} />
        <Route path=":id/okr/:okrToolId" element={<OKRContainer />} />
        <Route
          path=":id/balanceScorecard/:balancedId"
          element={<BalancedContainer />}
        />
        <Route
          path=":id/questionnaire/:questionnaireId"
          element={<QuestionnarieContainer />}
        />
        <Route
          path=":id/questionnaire/:questionnaireId/questions"
          element={<QuestionnarieQuestionsContainer />}
        />
        <Route
          path=":id/questionnaire/:questionnaireId/results"
          element={<QuestionnarieResultsContainer />}
        />
        <Route
          path=":id/mejora-continua"
          element={<MejoraContinuaContainer />}
        />
        <Route path=":id/createTool/*" element={<CreateToolContainer />} />
        <Route path=":id" element={<ProjectContainer />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
