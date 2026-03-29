import { device } from 'detox';
import profilePage from '../pages/profile-page';
import loginPage from '../pages/login-page';
import secureAreaPage from '../pages/secure-area-page';
import credentials from '../data/credentials.json';
import BasePage from '../pages/base-page';

describe('Profile Flow: ', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
    await loginPage.waitToLoad();
  });

  afterAll(async () => {
    BasePage.outputAllTestResults();
    await device.terminateApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    BasePage.clearTestLogs();

    //Login to access profile screen
    await secureAreaPage.verifyLoggedInSuccessfully();
    await profilePage.tapProfileTab();
  });

  afterEach(async () => {
    BasePage.collectTestResult();
  });

  it('Verify Heading, Username Label and Username Text', async () => {
    await profilePage.waitToLoad();
    await profilePage.verifyHeading();
    await profilePage.verifyUsernameLabelText();
    await profilePage.verifyUsernameValue();
  });

});