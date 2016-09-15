function Foo(){
  this.name = "foo";
  this.speak = function(){
    return "Hello";
  };
}

function Bar(){
  this.name = "bar";
  this.speak = function(){
    return "Hello";
  };
  return this;
}

function Baz(){
  this.name = "baz";
  this.speak = function(){
    return "Hello";
  };
  if (!(this instanceof Baz)) return new Baz();
}

function SimpleObject(){
  this.collection = [1, "foo", 3];
  this.each = function(my_func){
    this.collection.forEach(
      function(el, index){
        my_func(el, index);
      });
  };
}

SimpleObject.each = function(my_collection, my_func){
  my_collection.forEach( function(el, index){
    my_func(el, index);
  });
};

function jQuery(selector){
  this.selector = selector;
  this.each = function(my_func){
    this.collection.forEach(function(el){
      my_func(el);
    });
  };

  if (selector instanceof Object){
    this.collection = [selector];
  } else {
    this.collection = document.querySelectorAll(selector);
  };

  this.length = this.collection.length;

  this.idx = function(index){
    return this.collection[index];
  };

  this.hasClass = function(class_name){
    var elements = this.collection;
    for (var i = 0; i < elements.length; i++){
      var el = elements[i];
      var classNamesArray = el.className.split(" ");
      for (var j = 0; j < classNamesArray.length; j++){
        var name = classNamesArray[j];
        if (name === class_name){
          return true;
        };
      };
    };
    return false;
  };

  this.addClass = function(class_names){
    this.each(function(el){
      el.className = el.className + " " + class_names;
    });
    return jQuery(this.selector);
  };

  this.removeClass = function(class_names){
    this.each(function(el){
      nameArray = class_names.split(" ");
      for (var i = 0; i < nameArray.length; i++){
        el.classList.remove(nameArray[i]);
      };
    });
    return jQuery(this.selector);
  };

  this.toggleClass = function(class_names){
    this.each(function(el){
      nameArray = class_names.split(" ");
      for (var i = 0; i < nameArray.length; i++){
        el.classList.toggle(nameArray[i]);
      };
    });
    return jQuery(this.selector)
  };

  this.val = function(val){
    if (val !== undefined){
      this.each(function(el){
        el.value = val;
      });
      return jQuery(this.selector);
    } else {
      return this.collection[0].value;
    }
  };

  this.css = function(propertyName, value){
    if (value !== undefined){
      this.each(function(el){
        el.setAttribute(propertyName, value);
      });
      return jQuery(this.selector);
    } else {
      return this.collection[0].getAttribute(propertyName);
    };
  };

  this.height = function(value){
    if (value !== undefined){
      this.each(function(el){
        el.setAttribute("height", value);
      });
      return jQuery(this.selector);
    }else {
      return this.collection[0].style.height;
    };
  };

  this.width = function(value){
    if (value !== undefined){
      this.each(function(el){
        el.setAttribute("width", value);
      });
      return jQuery(this.selector);
    } else {
      return this.collection[0].style.width;
    };
  };

  this.attr = function(propertyName, value){
    if (value !== undefined){
      this.each(function(el){
        el.setAttribute(propertyName, value);
      });
      return jQuery(this.selector);
    } else {
      return this.collection[0].getAttribute(propertyName);
    };
  };

  this.html = function(htmlString){
    if (htmlString !== undefined){
      this.each(function(el){
        el.innerHTML = htmlString;
      });
      return jQuery(this.selector);
    } else {
      return this.collection[0].outerHTML;
    };
  };

  if (!(this instanceof jQuery)) return new jQuery(selector);
}

var $ = jQuery;
