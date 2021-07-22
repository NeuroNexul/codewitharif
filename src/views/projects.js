import Xeon from "/xeon";
import Header from '/utils/header.js';
import Footer,{ loadFunc } from '/utils/footer.js';

export default class extends Xeon {
      constructor(params){
            super(params);
            this.setTitle("Projects By Arif");
            this.setIcon("/assets/logo/logo.jpg");
      }
      async getHtml(){
            return(`
                  ${Header({ page: 'projects' })}
                  <style>
                        .projects_List_Holder {
                              display: flex;
                              width: 100%;
                              flex-wrap: wrap;
                        }
                        .projects_ListItem_overlay {
                              position: absolute;
                              top: 0;
                              left: 0;
                              height: 100%;
                              width: 100%;
                              cursor: pointer;
                        }
                        .projects_ListItem{
                              width: 50%;
                              /*border: 1px solid #fff;*/
                        }
                        .projects_ListItem_div {
                              position: relative;
                              margin-bottom: 10px;
                              width: 100%;
                              height: 100%;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                        }
                        .projects_ListItem_div_div {
                              width: 70%;
                              cursor: pointer;
                        }
                        .projects_ListItem_Image {
                              width: 100%;
                              height: 200px;
                              border-radius: 10px;
                              background-size: cover;
                              box-shadow: 10px 10px 0 1px #ffffff10;
                              margin: 10px 0 20px 0;
                        }
                        .projects_ListItem_Heading {
                              font-family: 'Merienda One', sans-serif;
                        }
                        .projects_ListItem_Desc span {
                              color: #ff4949;
                              text-decoration: underline;
                        }
                        @media screen and (max-width:550px){
                              .projects_List_Holder {
                                    display: block;
                              }
                              .projects_ListItem {
                                    width: 100%;
                                    display: inline-block;
                              }
                        }
                        .select-category {
                              -webkit-appearance: none;
                              -moz-appearance: none;
                              -ms-appearance: none;
                              appearance: none;
                              outline: 0;
                              box-shadow: none;
                              border: 0 !important;
                              background: #2c3e50;
                              background-image: none;
                        }
                        .select-category::-ms-expand {
                              display: none;
                        }
                        .select-category {
                              flex: 1;
                              padding: 0 .5em;
                              color: #fff;
                              cursor: pointer;
                        }
                        .custom-select {
                              position: fixed;
                              top: 60px;
                              right: 20px;
                              display: flex;
                              width: 200px;
                              height: 35px;
                              line-height: 3;
                              background: #2c3e50;
                              overflow: hidden;
                              border-radius: .25em;
                              z-index: 50;
                        }
                        .custom-select::after {
                              content: '\u25BC';
                              position: absolute;
                              top: -5px;
                              right: 0;
                              padding: 0 5px;
                              background: #34495e;
                              cursor: pointer;
                              pointer-events: none;
                              -webkit-transition: .25s all ease;
                              -o-transition: .25s all ease;
                              transition: .25s all ease;
                        }
                        /* Transition */
                        .custom-select:hover::after {
                              color: #f39c12;
                        }
                  </style>
                  <div class="wrapper" style="height:calc(100% - 50px);overflow-y: auto;">
                        
                        <div class="custom-select">
                              <select class="select-category">
                                    <option selected disabled>Choose A Category</option>
                                    <option value="All">All</option>
                                    <option value="Regular">Regular</option>
                              </select>
                        </div>
                        
                        <div style="width: 100%;height: 30vh;">
                              <div style="width: 100%;height: 100%;background: url('/assets/images/services-bg.jpg') no-repeat center center fixed;background-size: cover;">
                                    <div style="height: 100%;width: 100%;background: #0402198c;display: flex;justify-content: center;align-items: center;">
                                          <div style="width: 100%;max-width: 300px;text-align: center;">
                                                <h1 class="shadow" style="font-family: 'Merienda One', sans-serif;font-size: 29px;">My Latest Projects.</h1>
                                                <p style="text-decoration: underline;font-size: 16px;line-height: 25px;">-By Arif Sardar.</p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div style="margin-bottom: 20px">
                              <section class="projects_List_Holder">

                                    <div class="projects_ListItem">
                                          <div class="projects_ListItem_div">
                                                <div class="projects_ListItem_div_div">
                                                      <div class="projects_ListItem_Image" style="background: url('/assets/images/services-bg.jpg') no-repeat center center;background-size: cover;"></div>
                                                      <h2 class="projects_ListItem_Heading">Hello World</h2>
                                                      <p class="projects_ListItem_Desc">Republic of programmers <span>Read More</span></p>
                                                </div>
                                                <div class="projects_ListItem_overlay" href="/" data-link></div>
                                          </div>
                                    </div>
                                    
                                    <div class="projects_ListItem">
                                          <div class="projects_ListItem_div">
                                                <div class="projects_ListItem_div_div">
                                                      <div class="projects_ListItem_Image" style="background: url('/assets/images/services-bg.jpg') no-repeat center center;background-size: cover;"></div>
                                                      <h2 class="projects_ListItem_Heading">Heading ...</h2>
                                                      <p class="projects_ListItem_Desc">Description <span>Read More</span></p>
                                                </div>
                                                <div class="projects_ListItem_overlay" href="/" data-link></div>
                                          </div>
                                    </div>
                                    
                                    <div class="projects_ListItem">
                                          <div class="projects_ListItem_div">
                                                <div class="projects_ListItem_div_div">
                                                      <div class="projects_ListItem_Image" style="background: url('/assets/images/services-bg.jpg') no-repeat center center;background-size: cover;"></div>
                                                      <h2 class="projects_ListItem_Heading">Heading ...</h2>
                                                      <p class="projects_ListItem_Desc">Description <span>Read More</span></p>
                                                </div>
                                                <div class="projects_ListItem_overlay" href="/" data-link></div>
                                          </div>
                                    </div>
                                    
                                    <div class="projects_ListItem">
                                          <div class="projects_ListItem_div">
                                                <div class="projects_ListItem_div_div">
                                                      <div class="projects_ListItem_Image" style="background: url('/assets/images/services-bg.jpg') no-repeat center center;background-size: cover;"></div>
                                                      <h2 class="projects_ListItem_Heading">Heading ...</h2>
                                                      <p class="projects_ListItem_Desc">Description <span>Read More</span></p>
                                                </div>
                                                <div class="projects_ListItem_overlay" href="/" data-link></div>
                                          </div>
                                    </div>
                                    
                              </section>
                        </div>      

                        ${Footer()}
                  </div>
            `);
      }
      async onLoad(e){
            loadFunc();
      }
}