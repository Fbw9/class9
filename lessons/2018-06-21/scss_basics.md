## SCSS Basics

- [Nested Rules](#nested-rules)
- [Referencing Parent Selectors: &](#referencing-parent)
- [Variables: $](#variables)
- [Mixin Directives](#mixin)
- [@import](#import)

More info:
- [Documentation - Sass (Syntactically Awesome StyleSheets)](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

---

<a name="nested-rules"></a>
### Nested Rules

Sass allows CSS rules to be nested within one another.
The inner rule then only applies within the outer rule's selector.
For example:

```
    #main p {
    color: #00ff00;
    width: 97%;

    .redbox {
        background-color: #ff0000;
        color: #000000;
    }
}
```
is compiled to
```
#main p {
    color: #00ff00;
    width: 97%;
}
#main p .redbox {
    background-color: #ff0000;
    color: #000000;
}
```
---

<a name="referencing-parent"></a>
### Referencing Parent Selectors: &

Sometimes it's useful to use a nested rule's parent selector in
other ways than the default. For instance, you might want to have
special styles for when that selector is hovered over or for when the
body element has a certain class. In these cases, you can explicitly
specify where the parent selector should be inserted using the & character.
 For example:
```
a {
    font-weight: bold;
    text-decoration: none;
    &:hover { text-decoration: underline; }
    body.firefox & { font-weight: normal; }
}
```
is compiled to:
```
a {
    font-weight: bold;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
body.firefox a {
    font-weight: normal;
}
```
& will be replaced with the parent selector as it appears in the CSS.
This means that if you have a deeply nested rule,
the parent selector will be fully resolved before the & is replaced.
For example:
```
#main {
    color: black;
    a {
        font-weight: bold;
        &:hover { color: red; }
    }
}
```
is compiled to:
```
#main {
    color: black;
}
#main a {
    font-weight: bold;
}
#main a:hover {
    color: red;
}
```
& must appear at the beginning of a compound selector, but it
can be followed by a suffix that will be added to the parent selector.
For example:
```
#main {
    color: black;
    &-sidebar { border: 1px solid; }
}
```
is compiled to:
```
#main {
    color: black;
}
#main-sidebar {
    border: 1px solid;
}
```

---

<a name="variables"></a>
### Variables: $

The most straightforward way to use SassScript is to use variables.
Variables begin with dollar signs, and are set like CSS properties:

```
$width: 5em;
```
You can then refer to them in properties:
```
#main {
    width: $width;
}
```
Variables are only available within the level of nested
selectors where they're defined. If they're defined outside of
any nested selectors, they're available everywhere.
They can also be defined with the !global flag (IMPORTANT: TRY TO AVOID SUCH USAGE),
in which case they're also available everywhere. For example:
```
#main {
    $width: 5em !global;
    width: $width;
}
#sidebar {
    width: $width;
}
```
is compiled to:
```
#main {
    width: 5em;
}
#sidebar {
    width: 5em;
}
```

For historical reasons, variable names (and all other Sass identifiers)
can use hyphens and underscores interchangeably. For example, if you
define a variable called $main-width, you can access it as $main_width,
and vice versa.

---

<a name="mixin"></a>
## Mixin Directives

Mixins allow you to define styles that can be re-used throughout the
stylesheet without needing to resort to non-semantic classes like
.float-left. Mixins can also contain full CSS rules, and anything
else allowed elsewhere in a Sass document. They can even take arguments
which allows you to produce a wide variety of styles with very few mixins.

### Defining a Mixin: @mixin

Mixins are defined with the @mixin directive.
It's followed by the name of the mixin and optionally the arguments,
and a block containing the contents of the mixin. For example,
the large-text mixin is defined as follows:

```
@mixin large-text {
    font-size: 20px;
    font-weight: bold;
    color: #ff0000;
}
```

For historical reasons, mixin names (and all other Sass identifiers)
scan use hyphens and underscores interchangeably. For example,
if you define a mixin called add-column, you can include it
as add_column, and vice versa.

### Including a Mixin: @include

Mixins are included in the document with the @include directive.
This takes the name of a mixin and optionally arguments to pass
to it, and includes the styles defined by that mixin into the
current rule. For example:
```
.page-title {
    @include large-text;
    padding: 4px;
    margin-top: 10px;
}
```
is compiled to:
```
.page-title {
    font-size: 20px;
    font-weight: bold;
    color: #ff0000;
    padding: 4px;
    margin-top: 10px;
}
```

Mixin definitions can also include other mixins. For example:
```
@mixin compound {
    @include highlighted-background;
    @include header-text;
}
```
Arguments

Mixins can take SassScript values as arguments, which are
given when the mixin is included and made available within the mixin
as variables.

When defining a mixin, the arguments are written as variable names
separated by commas, all in parentheses after the name. Then when
including the mixin, values can be passed in in the same manner.
For example:
```
@mixin sexy-border($color, $width) {
    border: {
        color: $color;
        width: $width;
        style: dashed;
    }
}

p { @include sexy-border(blue, 1px); }
```
is compiled to:
```
p {
    border-color: blue;
    border-width: 1px;
    border-style: dashed;
}
```
Mixins can also specify default values for their arguments using
the normal variable-setting syntax. Then when the mixin is
included, if it doesn't pass in that argument, the default
value will be used instead. For example:

```
@mixin sexy-border($color, $width: 1px) {
    border: {
        color: $color;
        width: $width;
        style: dashed;
    }
}
p { @include sexy-border(blue); }
h1 { @include sexy-border(blue, 2px); }
```
is compiled to:
```
p {
    border-color: blue;
    border-width: 1px;
    border-style: dashed;
}

h1 {
    border-color: blue;
    border-width: 2px;
    border-style: dashed;
}
```

---
<a name="@import"></a>

## @-Rules and Directives

Sass supports all CSS3 @-rules, as well as some additional
Sass-specific ones known as "directives." These have various
effects in Sass, detailed below. See also control directives and
mixin directives.

### @import

Sass extends the CSS @import rule to allow it to import SCSS
and Sass files. All imported SCSS and Sass files will be merged
together into a single CSS output file. In addition, any variables or
mixins defined in imported files can be used in the main file.

@import takes a filename to import. By default, it looks for
a Sass file to import directly, but there are a few circumstances
under which it will compile to a CSS @import rule:

- If the file's extension is .css.
- If the filename begins with http://.
- If the filename is a url().
- If the @import has any media queries.

If none of the above conditions are met and the extension is
.scss or .sass, then the named Sass or SCSS file will be imported.
If there is no extension, Sass will try to find a file with that
name and the .scss or .sass extension and import it.

For example,
```
@import "foo.scss";
```
or
```
@import "foo";
```
would both import the file foo.scss

It's also possible to import multiple files in one @import. For example:
```
@import "rounded-corners", "text-shadow";
```
would import both the rounded-corners and the text-shadow files.

#### Partials

If you have a SCSS or Sass file that you want to import but don't
want to compile to a CSS file, you can add an underscore to the
beginning of the filename. This will tell Sass not to compile it to
a normal CSS file. You can then import these files without using the
underscore.

For example, you might have _colors.scss. Then no _colors.css file
would be created, and you can do
```
@import "colors";
```

and _colors.scss would be imported.

Note that you may not include a partial and a non-partial with
the same name in the same directory. For example, _colors.scss may
not exist alongside colors.scss.

#### Nested @import

Although most of the time it's most useful to just have
@imports at the top level of the document, it is possible to
include them within CSS rules and @media rules.
Like a base-level @import, this includes the contents of the
@imported file. However, the imported rules will be nested in
the same place as the original @import.

For example, if example.scss contains
```
.example {
    color: red;
}
```
then
```
#main {
    @import "example";
}
```
would compile to
```
#main .example {
    color: red;
}
```
Directives that are only allowed at the base level of a document,
like @mixin or @charset, are not allowed in files that are @imported in
a nested context.

It's not possible to nest @import within mixins or control directives.


---
### Links

- [Documentation - Sass (Syntactically Awesome StyleSheets)](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)
