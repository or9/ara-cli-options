# Purpose  
To read command line arguments provided to a Node application.  
## Usage  
Various options provided below should illustrate acceptable patterns.  
```
const options = require(“cli-options”);
const FILE_LOCATION = options(“location”, "-location", "--location", "-l") || “./someDefaultLocation/“;
const EXEC_STYLE = options(“--style”, "-s", "sssssss") || “def style”;
```
Do not provide an `=` in between arguments and their values. This module requires that there is no equal sign separating an argument and its value. 
