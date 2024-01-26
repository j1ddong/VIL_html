# Immutability

> In functional and in object-oriented programming, an object is considered as *immutable* when its *state* can’t be changed after it was created

> An immutable value is one whose content cannot be changed without creating an entirely new value.

- In JavaScript, primitive values are immutable — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned another value. By contrast, objects and arrays are mutable by default — their properties and elements can be changed without reassigning a new value.

### Benefit

- To improve performance (no planning for the object's future changes

- To reduce memory use (make object references instead of cloning the whole object)

- Thread-safety (multiple threads can reference the same object without interfering with one other)

- Lower developer mental burden (the object's state won't change and its behavior is always consistent)

- This approach can lead to more predictable code, reduced side effects, and easier debugging.




