import { Selector, t } from 'testcafe';

class ExamplePage {
    constructor () {
        this.nameInput = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }

    async typingName(name) {
        await t
            .typeText(this.nameInput, name);

    }

    async clickSubmit(name) {
        await t
            .click(this.submitButton);
    }
}

export default new ExamplePage();