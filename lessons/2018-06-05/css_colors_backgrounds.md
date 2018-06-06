### CSS Colors
There are 4 main ways in which we may specify colour in CSS. They are:
- Hexadecimal - eg #48d3c2.
- RGB - eg rgb(127, 89, 28).
- HSL - eg. hsl(130, 80%, 24%).
- Named - eg. Crimson or DarkBlue.

RGB and HSL also have a mode where we specify an alpha level to indicate opacity.

**Hexadecimal**

With Hexadecimal we specify the colour using a hash symbol ( \# ) followed by 6 hexadecimal digits ( 0-9a-f ). 
The first 2 hexadecimal digits specify the amount of red, the second 2 the amount of green and the third 2 the amount of blue.

\#000000 is no red, no green, no blue, which is black.

\#ffffff is full red, full green, full blue, which is white.

\#00ff00 is no red, full green, no blue, which is green.

If you make the values for each of red, green and blue equal then it will be a shade of grey.

**RGB** (Red Green Blue) is similar to Hexadecimal except that we use decimal values instead of hexadecimal. In the outline below, the first number represents the amount of red, the second, the amount of green and the third, the amount of blue.

rgba(102, 78, 210, 0.3)

The alpha level is between 0 ( fully transparent ) and 1 ( solid ).

**HSL Colours**

The Hue specifies the base colour as a degree on a colour wheel. Red is at 0°, green at 120°, blue at 240° and finally red again at 360°.

Next we specify the Saturation which is how vibrant the colour is. It has a value between 100 which is full vibrancy and 0 which is dull or grey.

Finally we specify the Luminance or lightness. It has a value between 0 which is tending towards black and 100 which is tending towards white.

Similar to RGB we may introduce a fourth value for the Alpha level. Similar to RGBA it is a value between 0 and 1.

hsla(215, 29%, 62%, 0.8)

**Linear Gradients** (goes down/up/left/right/diagonally)

  background: linear-gradient(green, yellow);

**Radial Gradients** (defined by their center)

  background: radial-gradient(red, yellow, green);


[Lesson: CSS Colors](https://www.w3schools.com/css/css_colors.asp)


### CSS Backgrounds

The CSS background properties are used to define the background effects for elements.

CSS background properties:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position

[Lesson: CSS Backgrounds](https://www.w3schools.com/css/css_background.asp)

### CSS background-size Property

The background-size property specifies the size of the background images.

There are four different syntaxes you can use with this property: the keyword syntax ("auto", "cover" and "contain"), the one-value syntax (sets the width of the image (height becomes "auto"), the two-value syntax (first value: width of the image, second value: height), and the multiple background syntax (separated with comma).

##### Property Values

Value | Description
--- | ---
auto | Default value. The background image is displayed in its original size
length | Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto".
percentage| Sets the width and height of the background image in percent of the parent element. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto"	
cover	| Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges	
contain	| Resize the background image to make sure the image is fully visible	
initial	| Sets this property to its default value.	
inherit	| Inherits this property from its parent element.

[CSS background-size Property - Definition and Usage](https://www.w3schools.com/cssref/css3_pr_background-size.asp)
