import { getGuideDirectory, simpleLink } from './../helpers';

const integrations = () => {
  return {
    link: '/automate',
    // better name for this section needed
    title: 'Automate and Integrate',
    children: [
      simpleLink('/integrations'),
      getGuideDirectory('guides/pagerduty', 'PagerDuty'),
      getGuideDirectory('guides/accessibility'),
      simpleLink('/deploybot', 'DeployBot'),
      simpleLink('/email', 'Email', [
        simpleLink('/sendgrid', 'SendGrid'),
        simpleLink('/rerouting-outbound-email', "Rerouting outbound email during development"),
      ]),
      simpleLink('/pivotal-tracker', 'Pivotal Tracker'),
      simpleLink('/lockr', 'Lockr'),
      simpleLink('/pingdom-uptime-check', 'Pingdom Uptime Check'),
      simpleLink('/visual-studio-code', "Visual Studio Code"),
      // This page might belong in a different section.
      simpleLink('/content-staging', "Content Staging"),
      // There's a separate continuous integration page, should these pages be within that section?
      simpleLink('/jenkins', 'Jenkins'),
      simpleLink('/behat', "Behat Testing"),
    ],
  }
};

export default integrations;
