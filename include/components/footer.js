const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
   <style>

      *{
         padding:0;
         margin:0;
      }
      
      html{
         background-color: #eaf0f2;
      }
      
      body{
         font:16px/1.6 Arial,  sans-serif;
      }
      
      header{
         text-align: center;
         padding-top: 100px;
         margin-bottom:190px;
      }
      
      header h1{
         font: normal 32px/1.5 'Open Sans', sans-serif;
         color: #3F71AE;
         padding-bottom: 16px;
      }
      
      header h2{
         color: #F05283;
      }
      
      header span{
         color: #3F71EA;
      }
      
      
      /* The footer is fixed to the bottom of the page */
      
      footer{
         position: static;
         bottom: 0;
      }
      
      @media (max-height:800px){
         header { padding-top:40px; }
      }
      
      
      .footer-distributed{
         background-color: #2c292f;
         box-sizing: border-box;
         width: 100%;
         text-align: left;
         font: bold 16px sans-serif;
         padding: 50px 50px 60px 50px;
         margin-top: 80px;
      }
      
      .footer-distributed .footer-left,
      .footer-distributed .footer-center,
      .footer-distributed .footer-right{
         display: inline-block;
         vertical-align: top;
      }
      
      /* Footer left */
      
      .footer-distributed .footer-left{
         width: 30%;
      }
      
      .footer-distributed h3{
         color:  #ffffff;
         font: normal 36px 'Cookie', cursive;
         margin: 0;
      }
      
      /* The company logo */
      
      .footer-distributed .footer-left img{
         width: 30%;
      }
      
      .footer-distributed h3 span{
         color:  #e0ac1c;
      }
      
      /* Footer links */
      
      .footer-distributed .footer-links{
         color:  #ffffff;
         margin: 20px 0 12px;
      }
      
      .footer-distributed .footer-links a{
         display:inline-block;
         line-height: 1.8;
         text-decoration: none;
         color:  inherit;
      }
      
      .footer-distributed .footer-company-name{
         color:  #8f9296;
         font-size: 14px;
         font-weight: normal;
         margin: 0;
      }
      
      /* Footer Center */
      
      .footer-distributed .footer-center{
         width: 35%;
      }
      
      
      .footer-distributed .footer-center i{
         background-color:  #33383b;
         color: #ffffff;
         font-size: 25px;
         width: 38px;
         height: 38px;
         border-radius: 50%;
         text-align: center;
         line-height: 42px;
         margin: 10px 15px;
         vertical-align: middle;
      }
      
      .footer-distributed .footer-center i.fa-envelope{
         font-size: 17px;
         line-height: 38px;
      }
      
      .footer-distributed .footer-center p{
         display: inline-block;
         color: #ffffff;
         vertical-align: middle;
         margin:0;
      }
      
      .footer-distributed .footer-center p span{
         display:block;
         font-weight: normal;
         font-size:14px;
         line-height:2;
      }
      
      .footer-distributed .footer-center p a{
         color:  #e0ac1c;
         text-decoration: none;;
      }
      
      
      /* Footer Right */
      
      .footer-distributed .footer-right{
         width: 30%;
      }
      
      .footer-distributed .footer-company-about{
         line-height: 20px;
         color:  #92999f;
         font-size: 13px;
         font-weight: normal;
         margin: 0;
      }
      
      .footer-distributed .footer-company-about span{
         display: block;
         color:  #ffffff;
         font-size: 18px;
         font-weight: bold;
         margin-bottom: 20px;
      }
      
      .footer-distributed .footer-icons{
         margin-top: 25px;
      }
      
      .footer-distributed .footer-icons a{
         display: inline-block;
         width: 35px;
         height: 35px;
         cursor: pointer;
         background-color:  #33383b;
         border-radius: 2px;
      
         font-size: 20px;
         color: #ffffff;
         text-align: center;
         line-height: 35px;
      
         margin-right: 3px;
         margin-bottom: 5px;
      }
      
      /* Here is the code for Responsive Footer */
      /* You can remove below code if you don't want Footer to be responsive */
      
      
      @media (max-width: 880px) {
      
         .footer-distributed .footer-left,
         .footer-distributed .footer-center,
         .footer-distributed .footer-right{
            display: block;
            width: 100%;
            margin-bottom: 40px;
            text-align: center;
         }
      
         .footer-distributed .footer-center i{
            margin-left: 0;
         }
      
      }
   </style>

   <footer class="footer-distributed">
         <div class="footer-left">
            <img src="https://www.blogger.com/img/blogger-logotype-color-black-1x.png">
            <h3>About<span>PushTheme</span></h3>

            <p class="footer-links">
               <a href="#">Home</a>
               |
               <a href="#">Blog</a>
               |
               <a href="#">About</a>
               |
               <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">© 2021 PushTheme Learning Solutions Pvt. Ltd.</p>
         </div>

         <div class="footer-center">
            <div>
               <i class="bi bi-map-marker"></i>
                  <p><span>309 - Rupa Solitaire,
                     Bldg. No. A - 1, Sector - 1</span>
                  Mahape, Navi Mumbai - 400710</p>
            </div>

            <div>
               <i class="bi bi-phone"></i>
               <p>+91 22-27782183</p>
            </div>
            <div>
               <i class="bi bi-envelope"></i>
               <p><a href="https://www.samuelpasaribu.com">support@samuelpasaribu.com</a></p>
            </div>
         </div>
         <div class="footer-right">
            <p class="footer-company-about">
               <span>About the company</span>
               We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
            <div class="footer-icons">
               <a href="#"><i class="bi bi-facebook"></i></a>
               <a href="#"><i class="bi bi-twitter"></i></a>
               <a href="#"><i class="bi bi-instagram"></i></a>
               <a href="#"><i class="bi bi-linkedin"></i></a>
               <a href="#"><i class="bi bi-youtube"></i></a>
            </div>
         </div>
      </footer>
   `;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const bootstrapIcon = document.querySelector('link[href*="bootstrap-icons@1.8.1"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (bootstrapIcon) {
      shadowRoot.appendChild(bootstrapIcon.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);