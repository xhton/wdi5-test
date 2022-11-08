const { wdi5 } = require("wdio-ui5-service");

describe("Testing home of test project", () => {
  before(async () => {
    await wdi5.goTo("#");
  });

  it("should have title containing 'This is a test project for testing'", async () => {
    const title = await browser.getTitle();
    expect(title).toEqual("This is a test project for testing");
  });

  it("should have one button", async () => {
    const selector = {
      selector: {
        controlType: "sap.m.Button",
        viewName: "testingproject.view.App",
      },
    };
    const btn = await browser.allControls(selector);
    expect(btn.length).toEqual(1);
  });
  
  it("should get text of button", async () => {
    const selector = {
      selector: {
        controlType: "sap.m.Button",
        viewName: "testingproject.view.App",
      },
    };
    const btn = await browser.allControls(selector);
    const title = await btn[0].getText();
    expect(title).toEqual("Alle Bestellungen anzeigen");

  });
});
