## CSS3 no HTML5

CSS3 vem com pseudo-classes úteis que nos permitem estilizar qualquer campo de formulário dependendo de seu estado. Essas classes são as seguintes:
```html
    :valid
    :invalid
    :required
    :optional
    :in-range
    :out-of-range
    :read-only
    :read-write
```
### Alguns exemplos:
```css
input:required{
  border:1px solid blue;
}
```
```css
input:required:invalid, input:focus:invalid { 
  background: red;
}
input:required:valid { 
  background: blue;
}
```
```css
input:invalid {
  border: 2px solid red;
}

input:valid {
  border: 2px solid green;
}
```
```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid green;
}
```
```css
input:valid,
input:in-range {
    background:hsl(120, 50%, 90%);
    border-color:hsl(120, 50%, 50%);
}

input:invalid,
input:out-of-range {
    border-color:hsl(0, 50%, 50%);
    background:hsl(0, 50%, 90%);
}
```
```css
body {
    font-family: Helvetica, Arial;
    font-size:12px;
}
h1 {
    font-size:200%;
}
legend {
    padding:0 5px;
    text-align:right;
}
fieldset > div {
    margin:10px 0;
}
fieldset > legend + div {
    margin-top:0;
}
fieldset > div:last-child {
    margin-bottom:0;
}
label {
    display:inline-block;
    width:100px;
}
input {
    width:200px;
}
input[type="number"] {
    width:30px;
}
div > input[type="submit"] {
    background: #ccc;
    border:1px solid #999;
    width:auto;
}
input:required {
    background:hsl(180, 50%, 90%);
    border:1px solid #999;
}
input:optional {
    background:hsl(300, 50%, 90%);
    border:1px dotted hsl(180, 50%, 90%);
}
input:valid,
input:in-range {
    background:hsl(120, 50%, 90%);
    border-color:hsl(120, 50%, 50%);
}

input:invalid,
input:out-of-range {
    border-color:hsl(0, 50%, 50%);
    background:hsl(0, 50%, 90%);
}
input:focus + .help {
    display:inline-block;
}
div.submit {
    margin-left:100px;
}
```

```css
/* This is just to make the example nicer */
body {
  font: 1em sans-serif;
  padding: 0;
  margin : 0;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input[type=email]{
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* This is our style for the invalid fields */
input:invalid{
  border-color: #900;
  background-color: #FDD;
}

input:focus:invalid {
  outline: none;
}

/* This is the style of our error messages */
.error {
  width  : 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}  
```
```html
<form action="somefile.php">
    <input
        type="text"
        name="username"
        placeholder="Username"
        pattern="[a-z]{1,15}"
        id="username">
</form>
```
```html
<style type="text/css">
  input:required:invalid, input:focus:invalid {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeVJREFUeNqkU01oE1EQ/mazSTdRmqSxLVSJVKU9RYoHD8WfHr16kh5EFA8eSy6hXrwUPBSKZ6E9V1CU4tGf0DZWDEQrGkhprRDbCvlpavan3ezu+LLSUnADLZnHwHvzmJlvvpkhZkY7IqFNaTuAfPhhP/8Uo87SGSaDsP27hgYM/lUpy6lHdqsAtM+BPfvqKp3ufYKwcgmWCug6oKmrrG3PoaqngWjdd/922hOBs5C/jJA6x7AiUt8VYVUAVQXXShfIqCYRMZO8/N1N+B8H1sOUwivpSUSVCJ2MAjtVwBAIdv+AQkHQqbOgc+fBvorjyQENDcch16/BtkQdAlC4E6jrYHGgGU18Io3gmhzJuwub6/fQJYNi/YBpCifhbDaAPXFvCBVxXbvfbNGFeN8DkjogWAd8DljV3KRutcEAeHMN/HXZ4p9bhncJHCyhNx52R0Kv/XNuQvYBnM+CP7xddXL5KaJw0TMAF8qjnMvegeK/SLHubhpKDKIrJDlvXoMX3y9xcSMZyBQ+tpyk5hzsa2Ns7LGdfWdbL6fZvHn92d7dgROH/730YBLtiZmEdGPkFnhX4kxmjVe2xgPfCtrRd6GHRtEh9zsL8xVe+pwSzj+OtwvletZZ/wLeKD71L+ZeHHWZ/gowABkp7AwwnEjFAAAAAElFTkSuQmCC);
    background-position: right top;
    background-repeat: no-repeat;
    -moz-box-shadow: none;
  }
  input:required:valid {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAepJREFUeNrEk79PFEEUx9/uDDd7v/AAQQnEQokmJCRGwc7/QeM/YGVxsZJQYI/EhCChICYmUJigNBSGzobQaI5SaYRw6imne0d2D/bYmZ3dGd+YQKEHYiyc5GUyb3Y+77vfeWNpreFfhvXfAWAAJtbKi7dff1rWK9vPHx3mThP2Iaipk5EzTg8Qmru38H7izmkFHAF4WH1R52654PR0Oamzj2dKxYt/Bbg1OPZuY3d9aU82VGem/5LtnJscLxWzfzRxaWNqWJP0XUadIbSzu5DuvUJpzq7sfYBKsP1GJeLB+PWpt8cCXm4+2+zLXx4guKiLXWA2Nc5ChOuacMEPv20FkT+dIawyenVi5VcAbcigWzXLeNiDRCdwId0LFm5IUMBIBgrp8wOEsFlfeCGm23/zoBZWn9a4C314A1nCoM1OAVccuGyCkPs/P+pIdVIOkG9pIh6YlyqCrwhRKD3GygK9PUBImIQQxRi4b2O+JcCLg8+e8NZiLVEygwCrWpYF0jQJziYU/ho2TUuCPTn8hHcQNuZy1/94sAMOzQHDeqaij7Cd8Dt8CatGhX3iWxgtFW/m29pnUjR7TSQcRCIAVW1FSr6KAVYdi+5Pj8yunviYHq7f72po3Y9dbi7CxzDO1+duzCXH9cEPAQYAhJELY/AqBtwAAAAASUVORK5CYII=);
    background-position: right top;
    background-repeat: no-repeat;
  }

</style>
```
```css
body {
    font-family: 'Myriad-Pro', 'myriad', helvetica, arial, sans-serif;
    text-align: center;
}
input { font-size: 14px; font-weight: bold;  }
 
input[type=range]:before { content: attr(min); padding-right: 5px; }
input[type=range]:after { content: attr(max); padding-left: 5px;}
 
output {
    display: block;
    font-size: 5.5em;
    font-weight: bold;
}
```


