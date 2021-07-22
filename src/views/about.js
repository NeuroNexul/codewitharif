import Xeon from "/xeon";
import Header from '/utils/header.js';
import Footer from '/utils/footer.js';

export default class extends Xeon {
      constructor(params){
            super(params);
            this.setTitle("About Me");
            this.setIcon("/assets/logo/logo192.png");
      }
      async getHtml(){
            return(`
                  ${Header({ page: 'about' })}
                  <div class="wrapper" style="height:calc(100% - 50px);overflow-y: auto;">
                        <div style="min-height: 200px; max-width: 1000px;margin: 0 auto;">
                              <h2 style="font-family: 'Merienda One', sans-serif;margin: 20px 0 20px 20px;text-decoration: underline;">Let's Know About Me.</h2>
                              <img style="border-radius: 50%;margin: 10px;width: 100px;" src="/assets/logo/logo192.png" alt="Arif Sardar" />
                              <p style="margin: 10px;text-indent: 5em;">I am a student of class X, studing at Baruipur High School at Baruipur. This is the city where I grew up from my absolute childhood, infact I am still living here. I really keep interest in science, specially in Physics. And I started Programming recently, but for a year. And now I can’t leave😅😅.</p>
                        </div>

                        ${Footer()}
                  </div>
            `);
      }
}