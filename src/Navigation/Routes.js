import React from 'react';
import {useSelector} from 'react-redux';
import OnboardingNavigation from './OnboardingNavigation';
import Dashboardnavigation from './DashboardNavigation';

export default () => {
  let onboardCompleted = false;
  const {user} = useSelector((state) => ({
    ...state.auth.user,
  }));
  if (user !== undefined) {
    onboardCompleted = true;
  }
  return (
    <>{onboardCompleted ? <Dashboardnavigation /> : <OnboardingNavigation />}</>
  );
};
