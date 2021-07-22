import Email from '/utils/smtp.js';

export default function Footer(props) {
      return (`
            <style>
                  .footer_Each_section{
                        width: 50%;
                        display: inline-block;
                        vertical-align: top;
                  }
                  .footer_Each_section.contact {
                        width: 49%;
                  }
                  @media screen and (max-width:550px){
                        .footer_Each_section {
                              width: 100%;
                              display: block;
                        }
                        .footer_Each_section.contact {
                              width: 100%;
                        }
                  }
                  .social_icon {
                        width: 30px;
                        height: 30px;
                        border-radius: 5px;
                        transition: all .3s;
                        display: inline-block;
                        cursor: pointer;
                  }
                  .social_icon:hover {
                        transform: translateY(-10px);
                  }
                  .input {
                        width: 100%;
                        padding: 10px;
                        margin: 5px 0;
                        border: none;
                        outline: none;
                        border-radius: 5px;
                  }
                  textarea.input {
                        min-height: 150px;
                        resize: vertical;
                  }
                  button {
                        border: none;
                        outline: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 15px;
                        padding: 10px 20px;
                  }
            </style>
            <footer style="width: 100%;background-color: #000000;box-shadow: 0px -1px 16px 1px #000000;border-radius: 20px 20px 0 0;">
                  <div style="display: block;width: 100%;position: relative;">
                        <div class="footer_Each_section" style="padding: 20px;">
                              <h1 style="font-family: 'Carter One', sans-serif;text-shadow: 6px 6px 20px #9b9b9b;margin-bottom: 20px;text-decoration: underline;">Code With Arif :</h1>
                              <p style="margin-bottom: 10px;">Find Me On :</p>
                              <div style="width: 100%;">
                                    <a href="https://www.facebook.com/arif.sardar.397501/" target="_blank"><div class="social_icon" style="background-color: #3b5998;"><div style="height: 15px;width: 15px;margin: 7.5px;background: url('/assets/images/facebook.svg') center center;background-size: cover;"></div></div></a>
                                    <a href="mailto:codewitharif.official@gmail.com" target="_blank"><div class="social_icon" style="background-color: #ea4335;"><div style="height: 15px;width: 15px;margin: 7.5px;background: url('/assets/images/mail.svg') center center;background-size: cover;"></div></div></a>
                                    <a href="https://github.com/arif-2005" target="_blank"><div class="social_icon" style="background-color: #333;"><div style="height: 15px;width: 15px;margin: 7.5px;background: url('/assets/images/github.svg') center center;background-size: cover;"></div></div></a>
                                    <a href="https://stackoverflow.com/users/15016074/arif-sardar" target="_blank"><div class="social_icon" style="background-color: #ff6f00;"><div style="height: 15px;width: 15px;margin: 7.5px;background: url('/assets/images/stack-overflow.svg') center center;background-size: cover;"></div></div></a>
                              </div>
                              <p style="margin-top: 10px;">
                              Email : codewitharif.official@gmail.com <br />
                              Address : Baruipur, West Bengal, India, 743387
                              </p>
                        </div>
                        <div class="footer_Each_section contact" style="padding: 20px 10px 10px 20px;">
                              <h2 style="font-family: 'Carter One', sans-serif;text-shadow: 6px 6px 20px #9b9b9b;margin-bottom: 20px;">Contact Me :)</h2>
                              <form id="contact_form" style="max-width: 400px;margin-bottom: 20px;">
                                    <input id="contact_name" class="input" type="text" name="name" placeholder="Your Name" required />
                                    <input id="contact_email" class="input" type="email" name="email" placeholder="Email Address" required />
                                    <textarea id="contact_message" class="input" name="message" placeholder="Message ..." required ></textarea>
                                    <button id="contact_submit" type="submit" >Submit</button>
                              </form>
                        </div>
                  </div>
                  <div style="width: 100%;height: 40px;line-height: 40px;text-align: center;background-color: #111;">
                        <span>No Copyright |</span><span class="Year"></span>
                  </div>
            </footer>
      `);
}

export function loadFunc(e) {
      document.getElementById("contact_submit").addEventListener('click', e => {
            e.preventDefault();
            e.target.innerHTML = 'Submiting...'
            const name = document.getElementById("contact_name").value;
            const email = document.getElementById("contact_email").value;
            const body = document.getElementById("contact_message").value;
            // Email.send({
            //       SecureToken : "d2882577-a2dd-4c7e-aed6-a50ad3e006b4",
            //       Password: "05BF26D0E52C086248A61A66806BAEA97D7B",
            //       To: 'as2048282@gmail.com',
            //       From: email,
            //       Subject: `A new Contact Message From ${name} | Code With Arif`,
            //       Body: body
            // }).then(
            //       message => document.getElementById("contact_form").innerHTML = "<h3>Thanks For Contacting Me... I Will Reply You Soon...</h3>"
            // );
            Email.send({
                  Host: "smtp.gmail.com",
                  Username: "database.spilab@gmail.com",
                  Password: "$CosmuSury@202020",
                  To: 'as2048282@gmail.com',
                  From: "database.spilab@gmail.com",
                  Subject: `A new Contact Message From ${name} | Code With Arif`,
                  Body: body
            }).then(
                  message =>{
                        document.getElementById("contact_form").innerHTML = "<h3>Thanks For Contacting Me... I Will Reply You Soon...</h3>"
                        console.log(message);
                  }
            );
      });
      // Get Year
      const year = ` ${new Date().getFullYear()}-${new Date().getFullYear() + 1} `;
      document.getElementsByClassName("Year")[0].appendChild(document.createTextNode(year));
}