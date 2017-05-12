(function (global, $) {
    
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastName, language);
    }
    
    var supportedLangs = ['en', 'es'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }
    
    Greeter.prototype = {
        
        fullname: function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formarGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function () {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal){
                msg = this.formalGreeting();
            } 
            else {
                msg = this.greeting();
            }
            
            if(console){
                console.log(msg);
            }
            
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        log: function() {
            if(console){
                console.log(logMessages[this.language] + ': ') + this.fullname();
            }
            
            return this;
        }
        
    };
    
    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        
        self.firstName = firstName || '';
        self.lastName = lastNamr || '';
        self.language = language || 'en';
    }
    
    Greetr.init.prototype = Greeter.prototype;
    
    global.Greetr = Greetr.G$ = Greetr;
    
}(window, jQuery));