### CSS Colors

[Lesson: CSS Colors](https://www.w3schools.com/css/css_colors.asp)


### CSS Backgrounds

The CSS background properties are used to define the background effects for elements.

CSS background properties:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position

With Hexadecimal we specify the colour using a hash symbol ( \# ) followed by 6 hexadecimal digits ( 0-9a-f ). The first 2 hexadecimal digits specify the amount of red, the second 2 the amount of green and the third 2 the amount of blue.
\#000000 is no red, no green, no blue, which is black.
\#ffffff is full red, full green, full blue, which is white.
\#00ff00 is no red, full green, no blue, which is green.
If you make the values for each of red, green and blue equal then it will be a shade of grey.

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
