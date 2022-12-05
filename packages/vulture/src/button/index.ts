/*
 * @Author: sfy
 * @Date: 2022-12-04 22:20:36
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-05 19:41:47
 * @FilePath: /vulture-design/packages/vulture/src/button/index.ts
 * @Description: update here
 */
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../index.css'
@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {

  static styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';



  render() {
    return html`
    <h1 class="mx-auto my-4 py-4 text-center shadow-lg text-xl w-1/2">
    Hug Group
    </h1>`;
  }
}
