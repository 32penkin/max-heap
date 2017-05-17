## Priority queue task
 ### A priority queue
  is an abstract data type which is like a regular queue
or stack data structure, but where additionally each element has a "priority"
associated with it. In a priority queue, an element with high priority is served
before an element with low priority. If two elements have the same priority,
they are served according to their order in the queue.

This queue is implemented on the basis of a binary heap, the maximum element "pops up",
so called "max-heap". There are 3 components: Node, Max-heap and Queue. Also
you can use Node component for other purposes.
* The advantage of this algorithm is the maximum decomposition of the implementation
of the task into components and their methods.
* Due to the requirements of the tests, many methods use previously made methods in their
implementation. Thus, the problem of poor encapsulation


### Prerequisites
* Install [nodejs](https://nodejs.org/en/) (>= v6.2.0)
* open bash in this folder
* `npm install`

### Run tests
```sh
npm test
```

### Run in browser
```sh
npm start
```

open http://localhost:8080

---
