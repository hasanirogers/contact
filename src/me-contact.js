import { LitElement, html, css } from 'lit-element';
import { 
  svgArrow, 
  svgGitHub, 
  svgCodeHub, 
  svgNPM, 
  svgLinkedIn, 
  svgStackBlitz, 
  svgTwitter 
} from './svg';

import '@material/mwc-textarea';
import '@material/mwc-textfield';
import '@material/mwc-button';


export class MeContact extends LitElement {
  static get properties() {
    return {

    }
  }

  static styles = [
    css`
      a {
        color: var(--white);
        text-decoration: none;
        transition: color 300ms ease;
      }

      a:hover {
        color: var(--link-color);
      }

      h1 {
        font-size: 2.5rem;
        margin: 0;
        line-height: 1.2;
      }

      @media screen and (min-width: 768px) {
        h1 {
          font-size: 4rem;
        }
      }

      img {
        width: 80%;
        height: auto;
        max-width: 460px;
        display: block;
        margin: 2rem auto;
        border-radius: 50%;
      }

      form {
        max-width: 1024px;
        margin: 1rem 2rem;
        padding: 2rem;
        box-sizing: border-box;
        display: grid;
        gap: 2rem;
        border-radius: 1rem;
        border: 3px solid rgba(255,255,255,0.5);
      }

      @media screen and (min-width: 768px) {
        form {
          margin: 1rem auto;
          grid-template-columns: 1fr 2fr;
        }
      }

      aside {
        font-size: 1.5rem;
        color: var(--secondary-color);
      }

      header {
        padding: 1rem;
        text-align: center;
        box-sizing: border-box;
      }

      header span {
        opacity: 0.7;
        margin: 1rem auto;
        display: inline-block;
      }

      mwc-textarea,
      mwc-textfield {
        height: 100%;
        width: 100%;
      }

      mwc-textfield {
        margin-bottom: 1rem;
      }

      button {
        color: var(--white);
        font-size: 1.5rem;
        font-weight: bold;
        width: calc(100% - 4rem);
        max-width: 1024px;
        padding: 2rem;
        margin: 2rem;
        border: none;
        border-radius: 1rem;
        box-sizing: border-box;
        background: var(--secondary-color);
        transition: background-color 300ms ease;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
      }

      button:hover {
        background: var(--link-color);
      }

      footer {
        color: var(--white);
        text-align: left;
        width: 100%;
        min-height: 100px;
        margin: 4rem auto 0 auto;
        padding: 1rem 2rem;
        box-sizing: border-box;
        background: var(--tertiary-color);
      }

      footer p {
        opacity: 0.7;
        margin: 1rem auto;
      }

      footer ul {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0 auto;
        font-size: 1.25rem;
      }

      footer li {
        display: flex;
        align-items: center;
      }

      footer svg {
        width: 24px;
        height: 24px;
        fill: var(--white);
        margin-right: 0.5rem;
      }

      footer ul,
      footer p {
        max-width: 1024px;
      }

      .arrow {
        text-align: center;
      }

      .arrow svg {
        fill: var(--white);
        opacity: 0.7;
        transform: rotate(180deg);
        animation: arrowslide 1000ms ease;
      }

      @keyframes arrowslide {
        0% {
          opacity: 0;
          transform: translateY(-10rem) rotate(180deg);
        }
        100% {
          opacity: 0.7;
          transform: translateY(0) rotate(180deg);
        }
      }
    `
  ];

  render() {
    return html`
      <main>
        <header>
          <img src="/images/avatar.jpeg" />
          <span>get in contact with...</span>
          <h1>
            Hasani Rogers
            <aside>Front End Developer</aside>
          </h1>
        </header>
        <div class="arrow">${svgArrow}</div>
        <form id="contact" action="contact" method="POST">
          <div>
            <div>
              <mwc-textfield
                required
                autoValidate
                pattern="[ a-zA-z]"
                label="Your Name" 
                icon="account_box"
                validationMessage="Please enter your name.">
              </mwc-textfield>
            </div>
            <div>
              <mwc-textfield
                type="tel"
                autoValidate
                pattern="[-.0-9]"
                label="Your Phone" 
                icon="phonelink_ring"
                validationMessage="Enter a valid phone number.">
              </mwc-textfield>
            </div>
            <div>
              <mwc-textfield
                required
                autoValidate
                label="Your Email" 
                icon="email"
                validationMessage="Enter a valid email address.">
              </mwc-textfield>
            </div>
          </div>
          <div>
            <mwc-textarea label="Message me maybe?" rows="8" icon="message"></mwc-textarea>
          </div>
        </form>
        <button @click=${this.handleFormSubmit}>
          Send me your questions.
        </button>
        <footer>
          <p>Find me on the web.</p>
          <ul>
            <li>
              ${svgGitHub}
              <a href="https://github.com/hasanirogers" target="_blank">GitHub</a>
            </li>
            <li>
              ${svgCodeHub}
              <a href="https://codepen.io/hasanirogers" target="_blank">CodePen</a>
            </li>
            <li>
              ${svgNPM}
              <a href="https://www.npmjs.com/~hasanirogers" target="_blank">NPM</a>
            </li>
            <li>
              ${svgLinkedIn}
              <a href="https://www.linkedin.com/in/hasani-rogers-85523829" target="_blank">LinkedIn</a>
            </li>
            <li>
              ${svgStackBlitz}
              <a href="https://stackblitz.com/@hasanirogers" target="_blank">StackBlitz</a>
            </li>
            <li>
              ${svgTwitter}
              <a href="https://twitter.com/hasanirogers" target="_blank">Twitter</a>
            </li>
          </ul>
        </footer>
      </main>
    `;
  }

  handleFormSubmit() {
    console.log(this);
  }
}

window.customElements.define('me-contact', MeContact);

