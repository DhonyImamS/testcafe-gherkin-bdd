import { Given, When, Then } from '@cucumber/cucumber';
import ExamplePage from '../../page/page_example';

Given(/^User has navigated into Web Testcafe$/, async (t) => {
    await t.navigateTo(`https://devexpress.github.io/testcafe/example/`);
});

When(/^User fill "([^"]*)" on field YourName$/, async (t, [UserName]) => {
    await ExamplePage.typingName(UserName);
    t.ctx.userName = UserName;
});

When(/^User click button submit$/, async (t) => {
    await ExamplePage.clickSubmit();
});