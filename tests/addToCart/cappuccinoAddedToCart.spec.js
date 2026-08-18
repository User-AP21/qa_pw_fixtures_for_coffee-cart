import { test } from '../fixtures/fixtures';
import {
  CAPPUCCINO_PRICE,
} from '../../src/ui/constants/coffeePricesConstants';
import { unitPriceFormatStr, priceFormatStr, } from '../../src/common/helper/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(CAPPUCCINO_PRICE, 1)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(CAPPUCCINO_PRICE)
  );
});
