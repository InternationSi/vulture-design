/*
 * @Author: sfy
 * @Date: 2022-12-04 22:20:36
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-04 22:27:01
 * @FilePath: /advance/packages/vulture/src/button/index.ts
 * @Description: update here
 */
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
