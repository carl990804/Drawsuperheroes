const string=`
html,body {
    background: #203141;
  }
  
  #container {
    margin:auto;
    width: 300px;
    position: relative;
  }
  
  .circle {
    position: absolute;
    width: 75px;
    height: 60px;
    left: 74px;
    top: 18px;
    background: #256697;
    border-top-left-radius: 55px;
    border-top-right-radius: 55px;
  }
  
  .body {
    position: absolute;
    width: 0;
    height: 0;
    top: 105px;
    left: 40px;
    border-top: 100px solid #256697;
    border-left: 70px solid transparent; 
    border-right: 70px solid transparent; 
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    z-index: 3;
  }
  
  .capeleft {
    position: absolute;
    left: 33px;
    top: 121px;
    height: 0;
    width: 0;
    border-right: 50px solid #CC1414;
    border-bottom: 70px solid #CC1414;
    border-left: 20px solid transparent;

  }
  
  .caperight {
    position: absolute;
    left: 107px;
    top: 121px;
    height: 0;
    width: 0;
    border-right: 20px solid transparent;
    border-bottom: 70px solid #CC1414;
    border-left: 60px solid #CC1414;
  
  }
  .logo {
    position: absolute;
    top: 110px;
    left: 80px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #6E96BB;
    border: 5px solid #fff;
    overflow: hidden;
    z-index: 3;
    transition: box-shadow 0.4s ease;
  }
  @keyframes wave{
      0%{
        transform: rotateY(0);
      }
      33%{
        transform: rotateY(180deg); 
      }
      66%{
        transform: rotateY(-180deg);
      }
      100%{
        transform: rotateY(0);
      }
  }
  .logo:hover{
      animation: wave 3s infinite linear;
  }
  .logo span {
    position: absolute;
    left: 0px;
    top: 27px;
    font-family: Simonetta;
    font-size: 66px;
    line-height: 0;
    text-indent: -3px;
  }
  .logo a {
    color: #CC1414;
    text-decoration: none;
    display: block;
  }
  .shadow {
    position: absolute;
    top: 220px;
    left: 66px;
    height: 15px;
    width: 90px;
    background: #000;
    opacity: 0.2;
      border-radius: 90px / 15px;
  }
  
  .chin {
    width: 25px;
    position: absolute;
    top: 78px;
    left: 74px;
    height: 0;
    border-top: 25px solid #FFD8AD;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }
  
  .lefteye {
    position: absolute;
    height: 5px;
    width: 15px;
    top: 59px;
    left: 82px;
    background: white;
    transform: skew(60deg);
  }
  
  .righteye {
    position: absolute;
    height: 5px;
    width: 15px;
    top: 59px;
    left: 119px;
    background: white;
    transform: skew(-60deg);
  }
  
  .logo:before {
     content: "";
     width: 200%;
     height: 200%;
     position: absolute;
     top: -200%;
     left: -225%;
     z-index:4;
  }
  .symbolleft {
    position: absolute;
    height: 70px;
    width: 15px;
    background: #CC1414;
  }
  
  .symbolright {
    position: absolute;
    right: 0;
    height: 70px;
    width: 15px;
    background: #CC1414;
  }
  
  .symbolmiddle {
    position: absolute;
    height: 10px;
    width: 50px;
    top: 50%;
    background: #CC1414;
  }
`
export default string;