// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Untitled', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Untitled', async function() {
    // Test name: Untitled
    // Step # | name | target | value | comment
    // 1 | open | / |  | 
    await driver.get("https://www.google.com/")
    // 2 | setWindowSize | 994x701 |  | 
    await driver.setRect(994, 701)
    // 3 | type | name=q | facebook | 
    await driver.findElement(By.name("q")).sendKeys("facebook")
    // 4 | sendKeys | name=q | ${KEY_ENTER} | 
    await driver.findElement(By.name("q")).sendKeys(Key.ENTER)
    // 5 | click | css=.dmenKe > td:nth-child(1) .l |  | 
    await driver.findElement(By.css(".dmenKe > td:nth-child(1) .l")).click()
    // 6 | click | id=email |  | 
    await driver.findElement(By.id("email")).click()
    // 7 | click | id=email |  | 
    await driver.findElement(By.id("email")).click()
    // 8 | click | id=pass |  | 
    await driver.findElement(By.id("pass")).click()
    // 9 | type | id=pass | dinhtuan293 | 
    await driver.findElement(By.id("pass")).sendKeys("dinhtuan293")
    // 10 | click | id=loginbutton |  | 
    await driver.findElement(By.id("loginbutton")).click()
    // 11 | mouseOver | css=#navItem_2392950137 .linkWrap |  | 
    {
      const element = await driver.findElement(By.css("#navItem_2392950137 .linkWrap"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
  })
})
