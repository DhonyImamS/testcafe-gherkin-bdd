import { Before } from 'cucumber';

Before(async (t) => {
    await t.navigateTo(`https://bukalapak.com`);
});