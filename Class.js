class movies {
        constructor(Name, MovieBy, Year )  {
        this.name = Name;
        this.year = Year;
        this.movieBy = MovieBy;
        
       
    }

      Movie = () => console.log(`Name: ${this.name} ,  By: ${this.movieBy}  , ReleaseDate ${this.year} `)
   
}
        const movies1 = [ new movies("Avengers End game", "Marvel", 2019) , new movies("Wanda vision", "Marvel" , 2021) , 
        new movies("Black Widow", "Marvel", 2021)  ]
  
    



    class moviesRating extends movies {
        constructor(Name,Rating) {
          super(Name);
          this.rating = Rating;
       
        }
      
        Rating = () => console.log(`${this.name} , Rating is ${this.rating} `)

          
      }


      const movies2 = [new moviesRating("Avengers End game",10) , new moviesRating("Wanda vision",7.5) , 
      new moviesRating("Black widow ","not rated")]
      

      


      class type  extends moviesRating {
        constructor(Name,Type) {
          super(Name);
          this.type = Type;
        }
       
        MovieType () {
            console.log(`${this.name} , is a ${this.type} `)
        }
    }

      
    const  Thetype = [ new type( "Wanda Vision" , " Tv show "), new type( "Avengers End Game" , " Movie"), new type ("Black widow ", "Movie")];

    
      function Details(movies1) {
        for( let movies of movies1){
        movies.Movie()
        }
      }
      console.log(` `)
      Details(movies1);
      

      function Rating(movies2) {
        for( let moviesRating of movies2){
        moviesRating.Rating()
        }
      }
      console.log(` `)
      Rating(movies2);
      
      
     
      function WhatType(Thetype) {
        for( let type of Thetype){
        type.MovieType()
        }
      }
      console.log(` `)
      WhatType(Thetype);
      
      