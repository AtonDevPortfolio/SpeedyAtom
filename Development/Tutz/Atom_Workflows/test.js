var Human = (function() {
  function Human(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.fullname = this.first + ' ' + this.last;
  }
  Human.prototype = {
    toString: function() {
      return 'Human: ' + this.first + ' is ' + this.age + ' years old.';
    }
  }

};
return Human
}());


// ctrl-alt-k = select all
