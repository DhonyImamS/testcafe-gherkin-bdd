import { Given, When, Then } from 'cucumber';
import page from '../../page/page_thank_you';

Then(/^User will see page ThankYou with their name$/, async (t) => {
    const resultText = await page.getThankYouText();

    await t.expect(resultText).eql(`Thank you, ${t.ctx.userName}!`);
});