import WebElement from './webElement';

/**
 * Select element with button and ul
 */
export default class Dropdown extends WebElement {
  /**
   * Select by text
   * @param text
   */
  select(text: string) {
    this.expand();
    this.selectFromList(text);
  }

  /**
   * Click on expander button
   */
  private expand() {
    this.get().parent().find('button').click().wait(500);
  }

  /**
   * Click on <ul> element with the certain text
   * @param text
   */
  private selectFromList(text: string) {
    this.get().parent().find('ul').contains(text).click();
  }
}
