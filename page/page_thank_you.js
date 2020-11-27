import { Selector, t } from 'testcafe';

class Page {
    constructor () {
        this.header = Selector('#article-header');
    }

    async getThankYouText() {
        return this.header.innerText;
    }
}

export default new Page();