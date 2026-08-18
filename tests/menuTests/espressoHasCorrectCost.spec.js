import { test } from '../fixtures/fixtures';
import { ESPRESSO_PRICE } from '../../src/ui/constants/coffeePricesConstants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(priceFormatStr(ESPRESSO_PRICE));
});
