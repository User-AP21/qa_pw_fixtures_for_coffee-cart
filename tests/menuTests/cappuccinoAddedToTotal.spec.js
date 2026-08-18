import { test } from '../fixtures/fixtures';
import {
  CAPPUCCINO_PRICE,
} from '../../src/ui/constants/coffeePricesConstants';
import { totalPriceFormatStr } from '../../src/common/helper/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
 menuPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(CAPPUCCINO_PRICE, 1)
  );
});
