//HTTP - Hyper Text Transfer Protocol
//HTTPS- Secured ^^

//HTTP is stateless - every request is completely independant
//Similar to transactions

// HTTPS data is encrypted. SSL/TLS
//Web host needs a specific certificate
//https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/

//HTTP METHODS -
// -GET -retrieves data from the server
// -POST -submit data to the server
// -PUT -update data already on the server
// -DELETE -delete data from the server

// HTTP has a header and a body

//HTTP Header FIELDS - more exist than below. these are the main ones to know!
// ex: make a GET (method) request to the (path) url via the (protocol)HTTPS

// METHOD -> PATH -> PROTOCOL
// You will have a "header field of data"
//The Header Field -
/*//      (Often Hidden to protect from hackers)
    General:            Response:           Request:
    -Request URL         -Server             -Cookies
    -Request Method      -Set-Cookie         -Accept-xxx
    -Status Code         -Content-Type       -Content-Type
    -Remote Address      -Content-Length     -Content-Length
    -Referrer Policy     -Date               -Authorization
                                             -User-Agent
                                             -Referrer
*/

//HTTP Status Codes:
//-- 1xx : Informational
//-- 2xx : Success
//-- 3xx : Redirect
//-- 4xx : Client Error
//-- 5xx : Server Error

// Common status codes (memorize these)
/*
    200 - OK
    201 - OK created
    301 - Moved to a new URL
    304 - Not modified (Cached version)
    400 - Bad request
    401 - Unauthorized
    404 - Not found
    500 - Internal server error
*/

// HTTP/2 does exist (the changes are all mainly under the hood)
// -faster, more efficient, more secure, respond with more data, reduced latency, etc...
// grabs css/scripts all at once!

// enter dev tools in browser. In network tab on a webpage, reload the page.
// enter MAGIC LAND!

// here you can see the file Name , Status , Type , Initiator , Size , Time , Waterfall

//Define a File - a thing computers use to store data or programs for later use.
//-- Information humans can read ('text files')
//-- Information only computers can read ('binary files')

// Computer 'thoughts' are shown in 1's and 0's. BINARY

// we don't know how human thought works yet... return later

// be able to understand the difference between binary and text files
// ex: a gif or video to play would be in binary. (giving the comp data so it can reproduce an image or sound)
// ex: a javascript or python program. or even html doc would be a text file.