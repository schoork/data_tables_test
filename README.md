# Data Tables Test

Use the [NPM package installation](https://datatables.net/download/npm)
to determine what yarn packages you want to install. NPM uses the form
`npm install datatables.net`, you want to change this to yarn to be
`yarn add datatables.net` (and similarily for other packages).

Also you should check your *package.json* to ensure you have jQuery
installed. It will look something like `"jquery": "^3.5.1",`. To add it
(if you don't have it) run `yarn add jquery`.

If you had to install jQuery, then add the following to
*config/webpack/environments.js*:
```
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)
```

Add a new file *app/javascript/data_tables.js* and put the the following
in it. The first three lines are required, but the rest can match what
you originally had in your *data_tables.js* file.

```
require('datatables.net-bs4')
import $ from 'jquery';
global.$ = jQuery;

$(document).ready( function () {
  $("#myTable").DataTable()
})
```

And lastly, add the following to anywhere below the main Rails require
statements *app/javascript/packs/application.js*.

```
require("data_tables")
```
