import { test } from '../fixtures/fixtures';
import {
  ESPRESSO_PRICE,
  MOCHA_PRICE,
  CAPPUCCINO_PRICE,
  AMERICANO_PRICE,
} from '../../src/ui/constants/coffeePricesConstants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(ESPRESSO_PRICE)
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr(MOCHA_PRICE)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(CAPPUCCINO_PRICE)
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatStr(AMERICANO_PRICE)
  );
  });

