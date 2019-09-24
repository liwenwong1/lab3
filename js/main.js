/* main JS file */
let cityName=[];

var svg = d3.select("body").append("svg")
    .attr("x", 700)         // position the left of the rectangle
    .attr("y", 550)    
    .attr("width", 1200)
    
    // .attr("margin-left",100)
    .attr("height", 700)
   // .style("border", "1px solid black");




d3.csv("./data/cities.csv", function(city){
    // console.log(city)
    if(city.eu==='true'){
        // console.log(city)
        // cityName.push(city.city)
       
        return {
            city : city.city,
            population : +city.population,
            x : +city.x,
            y: +city.y
            
          };
    }
}).then(function(data) {

    d3.select("body").append("p").text(`There are ${data.length} Countries in the EU`)
        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
        //    .style("stroke", "black") 
            .attr("fill",  "pink")
            .attr("cx", function(x,y){ return x.x})
            .attr("cy", function(x,y){return x.y})
            .attr("r", function(x,y){
                if(x.population<1000000){
                    return 4
                }else{
                    return 8
                }
            })
            ;

            svg.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .attr("x", function(d){return d.x})
                .attr("y", function(d){return d.y})
                .text(function(d){
                    if(d.population>=1000000){
                        return d.city
                    }else{
                        return " "
                    }
                })
                
                ;
                
            
            





        
                            
                        
                        
                      

console.log(cityName)

                    
                        })