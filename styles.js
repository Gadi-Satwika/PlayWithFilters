var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var place;
function uploading()
{
  var img = document.getElementById("image");
  img1 = new SimpleImage(img);
  img2 = new SimpleImage(img);
  img3 = new SimpleImage(img);
  img4 = new SimpleImage(img);
  img5 = new SimpleImage(img);
  img6 = new SimpleImage(img);
  img7 = new SimpleImage(img);
  img8 = new SimpleImage(img);
  img9 = new SimpleImage(img);
  img10 = new SimpleImage(img);
  img11 = new SimpleImage(img);
  img12 = new SimpleImage(img);
  img13 = new SimpleImage(img);
  img14 = new SimpleImage(img);
  img15 = new SimpleImage(img);
  place = document.getElementById("poster");
  img1.drawTo(place);
}

function newFilter_1()
{
  if(img2==null || !img2.complete())
    {
      alert("Image not loaded");
    }
  for(var px of img2.values())
    {
      px.setRed(100);
    }
  img2.drawTo(place);
}
function newFilter_2()
{
  if(img3==null || !img3.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img3.values())
    {
      px.setBlue(100);
    }
  img3.drawTo(place);
}
function newFilter_3()
{
  if(img4==null || !img4.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img4.values())
    {
      px.setGreen(20);
      px.setBlue(50);
    }
  img4.drawTo(place);
}
function newFilter_4()
{
  if(img5==null || !img5.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img5.values())
    {
      px.setRed(120);
      px.setBlue(120);
    }
  img5.drawTo(place);
}
function makeRed()
{
  if(img6 == null || !img6.complete())
    {
      alert("Image not Found");
    }
  clearCanvas();
   for(var px of img6.values())
   {
      if(px.getRed()<200)
      {
          px.setRed(255);
       }
    }
      img6.drawTo(place);
}
function makeBlue()
{
  if(img7==null || !img7.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img7.values())
   {
       if(px.getBlue()<200)
          {
            px.setBlue(255);
          }
   }
      img7.drawTo(place);
}

function blurr()
{
  if(img8==null || !img8.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img8.values())
    {
      var width=img8.width;
      var height=img8.height;
      var rand=Math.random();
      var x=px.getX();
      var y=px.getY();
      var nearPixelX=            x+Math.floor((Math.random()-0.5)*21);
      var nearPixelY=  y+Math.floor((Math.random()-0.5)*21);
      if(nearPixelX>width-1)
        {
          nearPixelX=width-1;
        }
      else if(nearPixelX<0)
        {
          nearPixelX=0;
        }
      if(nearPixelY>height-1)
        {
          nearPixelY=height-1;
        }
      else if(nearPixelY<0)
        {
          nearPixelY=0;
        }
      if(rand<0.5)
        {
          var nearPixel=img8.getPixel(nearPixelX,nearPixelY);         img8.setPixel(x,y,nearPixel)
        }      
    }
   img8.drawTo(place);
}
function color_3()
{
  if(img9==null || !img9.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img9.values())
    {
     var w=img9.getWidth();
     var h=img9.getHeight();
      if(px.getX()<w/3)
      {
          px.setRed(170);
      }
      if(px.getX()>w/3 && px.getX()         <2*w/3)
      {
          px.setGreen(170)
      }
      if(px.getX()>2*w/3)
      {
          px.setBlue(170)
      }
  }
  img9.drawTo(place);
}
function gray_1()
{
  if(img10==null || !img10.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img10.values())
    {
      var w = img10.getWidth();
      var h = img10.getHeight();
      if(px.getX()>px.getY())
        {
          var avg =(px.getRed()
          +px.getGreen()+
          px.getBlue())/3;
        px.setRed(avg);
        px.setBlue(avg);
        px.setGreen(avg);
        }
      if(px.getX()==px.getY())
        {
          px.setRed(0);
          px.setGreen(0);
          px.setBlue(0);
        }
    }
  img10.drawTo(place);
}
function gray_2()
{
  if(img11==null || !img11.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img11.values())
    {
      var h= img11.getHeight();
      if(px.getY()>=h/2)
        {
          var avg =(px.getRed()
          +px.getGreen()+
          px.getBlue())/3;
        px.setRed(avg);
        px.setBlue(avg);
        px.setGreen(avg);
        }
       if(px.getY()==h/2)
        {
          px.setRed(0);
          px.setGreen(0);
          px.setBlue(0);
        }
    }
  img11.drawTo(place);
}
function gray_3()
{
  if(img12==null || !img12.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img12.values())
    {
      var h= img12.getHeight();
      if(px.getY()<h/2)
        {
          var avg =(px.getRed()
          +px.getGreen()+
          px.getBlue())/3;
        px.setRed(avg);
        px.setBlue(avg);
        px.setGreen(avg);
        }
      if(px.getY()==h/2)
        {
          px.setRed(0);
          px.setGreen(0);
          px.setBlue(0);
        }
    }
  img12.drawTo(place);
}
function gray_4()
{
  if(img13==null || !img13.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img13.values())
    {
      var w = img13.getWidth();
      var h = img13.getHeight();
      if(px.getX()>=(w/2))
        {
          var avg =(px.getRed()
          +px.getGreen()+
          px.getBlue())/3;
        px.setRed(avg);
        px.setBlue(avg);
        px.setGreen(avg);
        }
      if(px.getX()==w/2)
        {
          px.setRed(0);
          px.setGreen(0);
          px.setBlue(0);
        }
    }
  img13.drawTo(place);
}
function gray_5()
{
  if(img14==null || !img14.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img14.values())
    {
      var w = img14.getWidth();
      var h = img14.getHeight();
      if(px.getX()<=(w/2))
        {
          var avg =(px.getRed()
          +px.getGreen()+
          px.getBlue())/3;
        px.setRed(avg);
        px.setBlue(avg);
        px.setGreen(avg);
        }
      if(px.getX()==w/2)
        {
          px.setRed(0);
          px.setGreen(0);
          px.setBlue(0);
        }
    }
  img14.drawTo(place);
}
function makegray()
{
  if(img15==null || !img15.complete())
    {
      alert("Image not loaded");
    }
  clearCanvas();
  for(var px of img15.values())
    {
      var avg = (px.getRed()+px.getGreen()+px.getBlue())/3;
      px.setRed(avg);
      px.setGreen(avg);
      px.setBlue(avg);
    }
  img15.drawTo(place);
}
function reset()
{
  img1.drawTo(place);
}

function clearCanvas(){
  var context=place.getContext("2d"); 
  context.clearRect(0,0,place.width,place.height);
}