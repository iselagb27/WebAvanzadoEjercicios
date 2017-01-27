//Modo estricto de javascript
/*
'use strict';
//var b;
var b=10;
console.log(b);
*/

(function(){
  'use strict';

   angular
   .module("myApp",[])
   .controller("movieCtrl",movieCtrl);

   function movieCtrl(){
     var movie = this;
     /*
     movie.nombre = [{'nombre':'Isela','edad':42},{'nombre':'Victor','edad':43}];
     */

      movie.collection=[
      {
        'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MDY0NDc3MV5BMl5BanBnXkFtZTcwODE4MjgyMQ@@._V1_.jpg',
        'name':'Dinasty',
        'cast':['Linda Evans','John Forsythe','Pamela Sue Martin'],
        'year':2010,
        'category':'Comedia'
      },
      {
        'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        'name':'Me before you',
        'cast':['Sam Claflin','Emilia Clarke','Janet McTeer'],
        'year':2016,
        'category':'Novela'
      },
      {
        'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxMDA2MjM4NDReQTJeQWpwZ15BbWU3MDE0NTgxMTM@._V1_.jpg',
        'name':'Siempre a tu lado',
        'cast':['Richard Gere','Joan Allen','Cary-Hiroyuki Tagawa'],
        'year':2009,
        'category':'Novela'
      }
    ];




      //arreglo en formato JSON

   }

})();  //parentesis al final en modo estricto
