import Xeon from "/xeon";
import Header from '/utils/header.js';
import Footer, { loadFunc } from '/utils/footer.js';

export default class extends Xeon {
      constructor(params) {
            super(params);
            this.setTitle("Code With Arif");
            this.setIcon("/assets/logo/logo.jpg");
      }
      async getHtml() {
            return (`
                  ${Header({ page: 'home' })}
                  <style>
                        .blink{
                              animation: blink .75s step-end infinite;
                        }
                        @keyframes blink {
                              from, to { 
                                    background-color: transparent 
                              }
                              50% { 
                                    background-color: #fff; 
                              }
                        }
                        .shadow {
                              text-shadow: 9px 12px 8px #000;
                        }
                        .hr-seperater {
                              height: 2px;
                              background-color: #FB2056;
                              margin: 0 auto;
                        }
                  </style>
                  <div class="wrapper" id="home" style="height:calc(100% - 50px);overflow-y: auto;">
                        <div style="width: 100%;height: 70vh;">
                              <div style="width: 100%;height: 100%;background: url('/assets/images/home-thumbnil.jpg') no-repeat center center fixed;background-size: cover;">
                                    <div style="height: 100%;width: 100%;background: #0402198c;display: flex;justify-content: center;align-items: center;">
                                          <div style="width: 100%;max-width: 300px;text-align: center;">
                                                <h2 id="CursorRenderText" style="display: inline-block;"></h2>
                                                <span id="CursorRender" style="background: #fff;width: 2px;height: 30px;margin-bottom: -5px;display: inline-block;"></span>
                                                <br /><br /><div class="hr-seperater" style="width: 100px;"></div><br />
                                                <h1 class="shadow" style="font-family: 'Merienda One', sans-serif;font-size: 29px;">Let's Code Together !</h1>
                                                <p style="text-decoration: underline;font-size: 16px;line-height: 25px;">-By Arif Sardar.</p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div style="height: 20px">
                              
                        </div>

                        ${Footer()}
                  </div>
            `);
      }
      async onLoad(e) {
            loadFunc();
            /* Type-Writer Effect */
            var _CONTENT = [
                  "Welcome To My Website !",
                  "Stack Web Developer",
                  "Single Page Applications",
                  "Python, Flask, Django...",
                  "Node, Express, React...",
                  "Creating Frameworks...",
                  "XeonJS, Xeon-V2, Xeon-cli",
                  "Shearing My Experience",
            ];
            var _PART = 0;
            var _PART_INDEX = 0;
            var _INTERVAL_VAL;
            var _ELEMENT = document.querySelector("#CursorRenderText");
            var _CURSOR = document.querySelector("#CursorRender");
            function Type() {
                  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
                  _ELEMENT.innerHTML = text;
                  _PART_INDEX++;
                  if (text === _CONTENT[_PART]) {
                        _CURSOR.classList.add('blink');
                        clearInterval(_INTERVAL_VAL);
                        setTimeout(function () {
                              _INTERVAL_VAL = setInterval(Delete, 50);
                        }, 1000);
                  }
            }
            function Delete() {
                  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
                  _ELEMENT.innerHTML = text;
                  _PART_INDEX--;
                  if (text === '') {
                        clearInterval(_INTERVAL_VAL);
                        if (_PART == (_CONTENT.length - 1))
                              _PART = 0;
                        else
                              _PART++;
                        _PART_INDEX = 0;
                        setTimeout(function () {
                              _CURSOR.classList.remove('blink');
                              _INTERVAL_VAL = setInterval(Type, 100);
                        }, 200);
                  } else _CURSOR.classList.remove('blink');
            }
            _INTERVAL_VAL = setInterval(Type, 100);
            /* Type-Writer Effect */
      }
}