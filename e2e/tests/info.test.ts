import { device } from 'detox';
import infoPage from '../pages/info-page';
import loginPage from '../pages/login-page';
import secureAreaPage from '../pages/secure-area-page';
import credentials from '../data/credentials.json';
import BasePage from '../pages/base-page';

describe('Info Flow: ', () => {
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

    //Login to access information screen
    await secureAreaPage.verifyLoggedInSuccessfully();
    await infoPage.tapInfoTab();
  });

  afterEach(async () => {
    BasePage.collectTestResult();
  });

  it('Verify Heading and Information Text', async () => {
    await infoPage.waitToLoad();
    await infoPage.verifyHeading();
    await infoPage.tapShowButton();
    await infoPage.verifyInfoText();
  });

  it('Verify Button Text Changing After Tapping', async () => {
    await infoPage.waitToLoad();
    await infoPage.verifyShowButtonText();
    await infoPage.tapShowButton();
    await infoPage.verifyHideButtonText();
    await infoPage.tapShowButton();
    await infoPage.verifyShowButtonText();
  });

  it('Verify Information Text is Hidden After Hide Button Tapping', async () => {
    await infoPage.waitToLoad();
    await infoPage.tapShowButton();
    await infoPage.verifyInfoText();
    await infoPage.tapShowButton();
    await infoPage.verifyInfoTextIsHidden();
  });
});