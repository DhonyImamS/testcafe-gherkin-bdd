import { Given, When, Then } from '@cucumber/cucumber';
import ThankYouPage from '../../page/page_thank_you';

Then(/^User will see page ThankYou with their name$/, async (t) => {
    const resultText = await ThankYouPage.getThankYouText();

    await t.expect(resultText).eql(`Thank you, ${t.ctx.userName}!`);
});