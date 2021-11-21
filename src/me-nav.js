import { LitElement, html, css } from "lit-element";
import './me-hamburger';

export class MeNav extends LitElement {
  static get styles() {
    return [
      css`
        nav {
          position: fixed;
          right: 0;
          z-index: 1;
          margin: 0;
          padding: 0;
          width: 110px;
          height: 110px;
          background-color: var(--white);
          border-bottom-left-radius: 100%;
          box-shadow: 0 2px 5px rgba(0,0,0,0.26);
        }

        nav li {
            display: none;
        }

        nav a,
        nav button {
          cursor: pointer;
          color: var(--primary-color);
          line-height: 2;
          font-size: 1.5rem;
          text-decoration: none;
          border: 0;
          background: transparent;
        }

        nav ul {
          text-align: right;
          margin: 64px;
          padding: 0;
        }

        :host([opened]) nav {
          animation: open-menu 1s ease both;
        }

        :host([opened]) nav li {
          display: block;
          transition: all 300ms ease;
        }

        :host([opened]) nav li:hover {
          transform: translateX(1rem);
        }

        me-hamburger {
          position: absolute;
          top: 28px;
          right: 28px;
        }

        @keyframes open-menu {
          50% {
            width: 3000px;
            height: 3000px;
          }
          100% {
            width: 100%;
            height: 100%;
            border-radius: 0;
          }
        }
      `
    ]
  }

  static get properties() {
    return {
      menuOpened: {
        type: Boolean,
        reflect: true,
        attribute: 'opened'
      }
    }
  }

  constructor() {
    super();

    this.menuOpened = false;
  }

  firstUpdated() {
    this.hamburger = this.shadowRoot.querySelector('me-hamburger');
  }

  render() {
    return html`
      <nav>
        <me-hamburger @click=${this.handleHamburger}></me-hamburger>
        <ul>
          <li><a href="http://hasanirogers.me">Home</a></li>
          <li><a href="http://hasanirogers.me/education">Education</a></li>
          <li><a href="http://hasanirogers.me/history">Work History</a></li>
          <li><a href="http://hasanirogers.me/skills">Skills</a></li>
          <li><a href="http://hasanirogers.me/websites">Websites</a></li>
          <li><a href="http://hasanirogers.me/accomplishments">Accomplishments</a></li>
          <li><a href="http://blog.hasanirogers.me">My Blog</a></li>
        </ul>
      </nav>
    `
  }

  handleHamburger() {
    this.hamburger.transformIcon();
    this.menuOpened = !this.menuOpened;
  }
}

window.customElements.define('me-nav', MeNav);
