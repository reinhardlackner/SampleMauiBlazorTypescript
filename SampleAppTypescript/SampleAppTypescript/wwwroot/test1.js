var test1;
(function (test1) {
    function sayHello() {
        alert("Hello");
    }
    test1.sayHello = sayHello;
})(test1 || (test1 = {}));
//# sourceMappingURL=test1.js.map