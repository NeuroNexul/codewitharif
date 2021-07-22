

export default function Header(props){
      return(`
            <style>
                  .header {
                        background-color: #323232;
                        box-shadow: 0px 1px 16px 1px #000000;
                        position: relative;
                        width: 100%;
                        z-index: 3;
                        height: 50px;
                  }
                  .header ul {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        overflow: hidden;
                        background-color: #323232;
                  }
                  .header li a {
                        display: block;
                        padding: 5px 16px;
                        /* border-right: 1px solid #f4f4f4; */
                        text-decoration: none;
                        color: #ffffff;
                        text-decoration: none;
                        font-size: 18px;
                  }
                  .header li a:hover {
                        color: #ff0000;
                        transform: scale(1.2);
                        font-weight: 900;
                  }
                  .header .logo {
                        margin: 0 10px;
                        line-height: 50px;
                        display: block;
                        float: left;
                        font-size: 1.7em;
                        text-decoration: none;
                        cursor: pointer;
                        font-family: 'Carter One', cursive;
                  }
                  /* menu */
                  .header .menu {
                        clear: both;
                        max-height: 0;
                        transition: max-height .2s ease-out;
                  }
                  .header .menu .hr {
                        height: 1px;
                        width: 100%;
                        background-color: #ffffff;
                  }
                  /* menu icon */
                  .header .menu-icon {
                        cursor: pointer;
                        display: inline-block;
                        padding: 24px 20px;
                        position: absolute;
                        right: 0;
                        user-select: none;
                        height: 100%;
                  }
                  .header .menu-icon .navicon {
                        background: rgb(255, 255, 255);
                        display: block;
                        height: 2px;
                        position: relative;
                        transition: background .2s ease-out;
                        width: 18px;
                  }
                  .header .menu-icon .navicon:before,
                  .header .menu-icon .navicon:after {
                        background: rgb(255, 255, 255);
                        content: '';
                        display: block;
                        height: 100%;
                        position: absolute;
                        transition: all .2s ease-out;
                        width: 100%;
                  }
                  .header .menu-icon .navicon:before {
                        top: 5px;
                  }
                  .header .menu-icon .navicon:after {
                        top: -5px;
                  }
                  /* menu btn */
                  .header .menu-btn {
                        display: none;
                  }
                  .header .menu-btn:checked ~ .menu {
                        max-height: 240px;
                  }
                  .header .menu-btn:checked ~ .menu-icon .navicon {
                        background: transparent;
                  }
                  .header .menu-btn:checked ~ .menu-icon .navicon:before {
                        transform: rotate(-45deg);
                  }
                  .header .menu-btn:checked ~ .menu-icon .navicon:after {
                        transform: rotate(45deg);
                  }
                  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
                  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
                        top: 0;
                  }
                  /* 48em = 768px */
                  @media (min-width: 458px) {
                        .header li {
                              float: left;
                        }
                        .header li a {
                              line-height: 50px;
                              padding: 0px 5px;
                              font-size: 16px;
                        }
                        .header .menu {
                              clear: none;
                              float: right;
                              max-height: none;
                        }
                        .header .menu-icon {
                              display: none;
                        }
                        .header .menu .hr {
                              display: none;
                        }
                  }
            </style>
            <header class="header">
                  <span href="/" data-link class="logo">Code With Arif</span>
                  <input class="menu-btn" type="checkbox" id="menu-btn" />
                  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                  <ul class="menu" id="menu" >
                        <hr class="hr" />
                        <li><a href="/" data-link style="color: ${props.page==='home'?'#f00':''}" >Home</a></li>
                        <li><a href="/about" data-link style="color: ${props.page==='about'?'#f00':''}" >About</a></li>
                        <li><a href="/projects" data-link style="color: ${props.page==='projects'?'#f00':''}" >Projects</a></li>
                        <li><a href="/contact" data-link style="color: ${props.page==='contact'?'#f00':''}" >Contact</a></li>
                  </ul>
            </header>
      `);
}