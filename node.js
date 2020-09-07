const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const navigationPromise = page.waitForNavigation();

  await page.goto("https://www.coopertirespromos.com/");

  await page.setViewport({ width: 3440, height: 1297 });

  await page.waitForSelector(
    ".section > .container > .row > .col-md-4 > .btn-home-start-claim"
  );
  await page.click(
    ".section > .container > .row > .col-md-4 > .btn-home-start-claim"
  );

  await navigationPromise;

  await page.waitForSelector(
    "#main > #form-new-claim > .section > .container > .btn-next"
  );
  await page.click(
    "#main > #form-new-claim > .section > .container > .btn-next"
  );

  await page.waitForSelector("input[type=file]");
  await page.waitFor(1000);

  // get the ElementHandle of the selector above
  const inputUploadHandle = await page.$("input[type=file]");

  // prepare file to upload, I'm using test_to_upload.jpg file on same directory as this script
  let fileToUpload = "test_to_upload.jpg";

  // Sets the value of the file input to fileToUpload
  inputUploadHandle.uploadFile(fileToUpload);

  await page.waitForSelector(
    ".component-document-upload > .document-upload-area > .document-upload-area-main > .document-upload-list > .document-upload-button"
  );
  await page.click(
    ".component-document-upload > .document-upload-area > .document-upload-area-main > .document-upload-list > .document-upload-button"
  );

  await page.waitFor(3000);

  await page.waitForSelector(
    "#main > #form-new-claim > .invoice > .container > .btn-next"
  );
  await page.click(
    "#main > #form-new-claim > .invoice > .container > .btn-next"
  );

  await page.waitForSelector(".component-typeahead #dealer");
  await page.click(".component-typeahead #dealer");

  await page.type(".component-typeahead #dealer", "20832");

  await page.waitForSelector(
    ".ta-suggestion-list-results > .ta-suggestion > div > .ta-suggestion-dealer-name > span"
  );
  await page.click(
    ".ta-suggestion-list-results > .ta-suggestion > div > .ta-suggestion-dealer-name > span"
  );

  await page.waitForSelector(".SingleDatePicker #dateOfPurchase");
  await page.click(".SingleDatePicker #dateOfPurchase");

  const send = await page.evaluate(() =>
    document.querySelectorAll('[class="CalendarDay__button"]')[5].click()
  );
  await page.type('[name="invoiceNumber"]', "18561283719");

  await page.waitForSelector(".component-invoice-number #invoiceNumber");
  await page.click(".component-invoice-number #invoiceNumber");

  await page.waitForSelector(
    ".automotive-vehicle-selection-dropdown #automotiveMake"
  );
  await page.click(".automotive-vehicle-selection-dropdown #automotiveMake");

  await page.select(
    ".automotive-vehicle-selection-dropdown #automotiveMake",
    "alfa-romeo"
  );

  await page.waitForSelector(
    ".automotive-vehicle-selection-dropdown #automotiveMake"
  );
  await page.click(".automotive-vehicle-selection-dropdown #automotiveMake");

  await page.waitForSelector(
    ".automotive-vehicle-selection-dropdown #automotiveModel"
  );
  await page.click(".automotive-vehicle-selection-dropdown #automotiveModel");

  await page.select(
    ".automotive-vehicle-selection-dropdown #automotiveModel",
    "155"
  );

  await page.waitForSelector(
    ".automotive-vehicle-selection-dropdown #automotiveModel"
  );
  await page.click(".automotive-vehicle-selection-dropdown #automotiveModel");

  await page.waitForSelector(
    ".automotive-vehicle-selection-dropdown #automotiveYear"
  );
  await page.click(".automotive-vehicle-selection-dropdown #automotiveYear");

  await page.select(
    ".automotive-vehicle-selection-dropdown #automotiveYear",
    "1997"
  );

  await page.waitForSelector(
    ".automotive-vehicle-selection-dropdown #automotiveYear"
  );
  await page.click(".automotive-vehicle-selection-dropdown #automotiveYear");

  await page.type('[label="Select Tire Model"]', "Discoverer");

  await page.type('[label="Total Price for ALL Four (4) Tires"]', "120");

  await page.waitForSelector(".component-typeahead #modelNumber-1");
  await page.click(".component-typeahead #modelNumber-1");

  await page.waitForSelector(
    ".ta-suggestion-list > .ta-suggestion-list-results > .ta-group > .ta-suggestion:nth-child(3) > span"
  );
  await page.click(
    ".ta-suggestion-list > .ta-suggestion-list-results > .ta-group > .ta-suggestion:nth-child(3) > span"
  );

  await page.waitForSelector(
    ".component-automotive-tire-size #automotiveTireSize"
  );
  await page.click(".component-automotive-tire-size #automotiveTireSize");

  await page.type(
    ".component-automotive-tire-size #automotiveTireSize",
    "225/55R17"
  );

  await page.waitForSelector(
    ".component-automotive-tire-size #automotiveTireSize"
  );
  await page.click(".component-automotive-tire-size #automotiveTireSize");

  await page.waitForSelector(".component-purchase-price #purchasePrice");
  await page.click(".component-purchase-price #purchasePrice");

  await page.type(".component-purchase-price #purchasePrice", "240.00");

  await page.waitForSelector(
    "body > #main > #form-new-claim > .section > .btn-next"
  );
  await page.click("body > #main > #form-new-claim > .section > .btn-next");

  await page.waitForSelector(
    "#main > #form-new-claim > .program-selection > .container > .btn-next"
  );
  await page.click(
    "#main > #form-new-claim > .program-selection > .container > .btn-next"
  );

  await page.waitForSelector(
    '[class="btn-select btn btn-default btn-block btn-sm"]'
  );
  await page.waitFor(3000);

  const send3 = await page.evaluate(() =>
    document.querySelectorAll('[role="button"]')[1].click()
  );

  await page.waitForSelector(
    "#main > #form-new-claim > .program-selection > .container > .btn-next"
  );
  await page.click(
    "#main > #form-new-claim > .program-selection > .container > .btn-next"
  );

  await page.waitForSelector('[label="First Name"]');

  await page.type('[label="First Name"]', "Neil");
  await page.type('[label="Last Name"]', "Chode");
  await page.type('[name="email"]', "Neil@niggermail.com");
  await page.type('[label="Verify Email"]', "Neil@niggermail.com");
  await page.type('[label="Phone Number"]', "2402348284");
  await page.type('[name="address1"]', "Neil");
  await page.type('[id="address2"]', "Neil");
  await page.type('[placeholder="City"]', "Neil");

  await page.waitForSelector(".col-md-6 #province");
  await page.click(".col-md-6 #province");

  await page.select(".col-md-6 #province", "IL");

  await page.waitForSelector(".col-md-6 #province");
  await page.click(".col-md-6 #province");

  await page.waitForSelector('[class="ta-suggestion"]');
  await page.click('[class="ta-suggestion"]');

  await page.waitFor(4000);
  await page.waitForSelector(
    "#form-new-claim > .personal-info > .container > .btn-next > .svg-inline--fa"
  );
  await page.click(
    "#form-new-claim > .personal-info > .container > .btn-next > .svg-inline--fa"
  );
  await page.waitFor(3000);

  await page.waitForSelector(
    "#main > #form-new-claim > .fulfillment > .container > .btn-next"
  );
  await page.click(
    "#main > #form-new-claim > .fulfillment > .container > .btn-next"
  );

  await page.waitForSelector(
    ".survey-question-0-questions-0-answers:nth-child(2) > div > .form-check > .form-check-label > span"
  );
  await page.click(
    ".survey-question-0-questions-0-answers:nth-child(2) > div > .form-check > .form-check-label > span"
  );

  await page.waitForSelector(
    ".survey-question-1-questions-1-answers:nth-child(3) > div > .form-check > .form-check-label > span"
  );
  await page.click(
    ".survey-question-1-questions-1-answers:nth-child(3) > div > .form-check > .form-check-label > span"
  );

  await page.waitForSelector(
    ".survey-question-2-questions-2-answers:nth-child(3) > div > .form-check > .form-check-label > span"
  );
  await page.click(
    ".survey-question-2-questions-2-answers:nth-child(3) > div > .form-check > .form-check-label > span"
  );

  await page.waitForSelector("div #questions.3.answers");
  await page.click("div #questions.3.answers");

  await page.waitForSelector("div #questions.3.answers");
  await page.click("div #questions.3.answers");

  await page.waitForSelector("div #questions.4.answers");
  await page.click("div #questions.4.answers");

  await page.waitForSelector("div #questions.4.answers");
  await page.click("div #questions.4.answers");
  await page.waitFor(3000);

  await page.waitForSelector(
    "#main > #form-new-claim > .survey > .container > .btn-next"
  );
  await page.click(
    "#main > #form-new-claim > .survey > .container > .btn-next"
  );

  await page.waitForSelector(
    ".row > .col-md-8 > .component-custom-checkbox:nth-child(2) > .checkbox-inline > .cc-wrapper"
  );
  await page.click(
    ".row > .col-md-8 > .component-custom-checkbox:nth-child(2) > .checkbox-inline > .cc-wrapper"
  );

  await page.waitForSelector(
    ".row > .col-md-8 > .component-custom-checkbox:nth-child(4) > .checkbox-inline > .cc-wrapper"
  );
  await page.click(
    ".row > .col-md-8 > .component-custom-checkbox:nth-child(4) > .checkbox-inline > .cc-wrapper"
  );

  await page.waitFor(2000000);
  await page.close();
})();
