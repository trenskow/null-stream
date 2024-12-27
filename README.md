@trenskow/null-stream
----

A simple writeable stream that outputs to nothing.

# Usage

The usage is pretty simple.

````javascript
import NullStream from '@trenskow/null-stream';

const null = new NullStream();

null.write('Garbage.');
````

# License

See license in LICENSE.
