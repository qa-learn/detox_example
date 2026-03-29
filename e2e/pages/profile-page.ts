import { element, by, waitFor } from 'detox';
import BasePage from './base-page';
import LoginPage from './login-page';
import { TEN_SECONDS } from '../constants';
import credentials from '../data/credentials.json';
import messages from '../data/messages.json';

class ProfilePage extends BasePage {
  private readonly heading = by.id('profile-heading');
  private readonly usernameLabel = by.id('username-label');
  private readonly usernameValue = by.id('username-value');
  private readonly profileTab = by.id('tab-profile');

  private static readonly headingText = messages.profilePage.heading;
  private static readonly nameLabel = messages.profilePage.usernameLabel;
  private static readonly tabName = messages.profilePage.tabName;
  private static readonly nameValue = credentials.validUser.userName;

  async waitToLoad() {
    this.log('\nProfilePage: Verifying Page is Loaded');
    await waitFor(element(this.heading)).toBeVisible().withTimeout(TEN_SECONDS);
  }

  async verifyHeading() {
      this.log(` * Verifying Heading: '${ProfilePage.headingText}'`);
      await this.verifyElementHasText(this.heading, ProfilePage.headingText);
  }

  async verifyUsernameLabelText() {
    this.log(' * Verifying Username Label Text is visible');
    await expect(element(this.usernameLabel)).toBeVisible();
    this.log(` * Expected Text: ${ProfilePage.nameLabel}`);
    await this.verifyElementHasText(this.usernameLabel, ProfilePage.nameLabel);
  }

  async verifyUsernameValue() {
    this.log(' * Verifying Username Value is visible');
    await expect(element(this.usernameValue)).toBeVisible();
    this.log(` * Expected Value: ${credentials.validUser.userName}`);
    await this.verifyElementHasText(this.usernameValue, ProfilePage.nameValue);
  }

  async tapProfileTab() {
    this.log(` * Tapping Profile Tab`);
    await element(this.profileTab).tap();
  }

  async verifyTabColour() {
    this.log(' * ')
  }

}

export default new ProfilePage();