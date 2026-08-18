import { test } from '../fixtures/fixtures';
import {
  ESPRESSO_PRICE,
} from '../../src/ui/constants/coffeePricesConstants';
import { unitPriceFormatStr, priceFormatStr } from '../../src/common/helper/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(ESPRESSO_PRICE, 1)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(ESPRESSO_PRICE)
  );
});
