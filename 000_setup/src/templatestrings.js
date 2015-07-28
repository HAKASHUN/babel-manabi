// https://gist.github.com/kuu/b7eb679a3ad48d980ed3

// Basic literal string creation
`In ES5  "\n" is a line-feed.`

// Multiline strings
`InES5 this is
not legal.`

// Interpolate variable bindings
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Construct an HTTP request prefix is used to interpret the replacements and construction

GET`http://foo.org/bar?a=${a}&b=${b}
    Content-Type: application/json
    X-Credentials: ${credentials}
    {
      "foo": ${foo},
      "bar": ${bar}
    }`(myOnReadyStateChangeHandler);

// html
html(`<p>HAKASHUN</p>`)
