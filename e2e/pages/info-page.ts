import { element, by, waitFor } from 'detox';
import BasePage from './base-page';
import { TEN_SECONDS } from '../constants';
import messages from '../data/messages.json';

class InfoPage extends BasePage {
  private readonly heading = by.text('Information');
  private readonly showInfoButton = by.id('show-info-button');
  private readonly showInfoButtonText = by.id('button-text');
  private readonly infoDetailsView = by.id('info-details-view');
  private readonly informationText = by.id('info-text');
  private readonly infoTab = by.id('tab-info');

  private static readonly tabName = messages.infoPage.tabName;
  private static readonly headingText = messages.infoPage.heading;
  private static readonly infoText = messages.infoPage.bodyText;
  private static readonly showButtonText = messages.infoPage.showButtonText;
  private static readonly hideButtonText = messages.infoPage.hideButtonText;

  async waitToLoad() {
    this.log('\nInfoPage: Verify Page is Loaded');
    await waitFor(element(this.heading)).toBeVisible().withTimeout(TEN_SECONDS);
  }

  async tapInfoTab() {
    this.log(` * Tapping Info Tab`);
    await element(this.infoTab).tap();
  }

  async verifyHeading() {
    this.log(` * Verifying Heading: ${InfoPage.headingText}`);
    await this.verifyElementHasText(this.heading, InfoPage.headingText);
  }

  async tapShowButton() {
      this.log(' * Tapping Show/Hide Button');
      await element(this.showInfoButton).tap();
  }

  async verifyShowButtonText() {
      this.log(' * Verifying Show Info Button Text');
      await expect(element(this.showInfoButton)).toBeVisible();
      this.log(` * Expected Button Text: ${InfoPage.showButtonText}`);
      await this.verifyElementHasText(this.showInfoButtonText, InfoPage.showButtonText);
  }

  async verifyHideButtonText() {
      this.log(' * Verifying Hide Info Button Text');
      await expect(element(this.showInfoButton)).toBeVisible();
      this.log(` * Expected Button Text: ${InfoPage.hideButtonText}`);
      await this.verifyElementHasText(this.showInfoButtonText, InfoPage.hideButtonText);
  }

  async verifyInfoText() {
    this.log(' * Verifying Information Text is visible');
    await expect(element(this.informationText)).toBeVisible();
    this.log(` * Expected Information Text: ${InfoPage.infoText}`);
    await this.verifyElementHasText(this.informationText, InfoPage.infoText);
  }

  async verifyInfoTextIsHidden() {
    this.log(' * Verifying Information Text is Hidden');
    await expect(element(this.informationText)).not.toBeVisible();
  }
}

export default new InfoPage();