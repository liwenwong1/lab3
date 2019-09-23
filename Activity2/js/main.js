/* main JS file */
var sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
];


console.log("print console")


var outerContainer = d3_container.container()
    // .margin(200)
    // .width(960)
    // .height(500);
    
// var margin = outerContainer.margin(),
//     innerWidth = outerContainer.contentWidth(),
//     innerHeight = outerContainer.contentHeight();
    
// var innerContainer = d3_container.container().margin(60),
//     padding = innerContainer.margin();

var svg = d3.select("body").append("svg")
    
    .attr("x", 100)         // position the left of the rectangle
    .attr("y", 500)    
    .attr("width", 5000)
    // .attr("margin-left",100)
    .attr("height", 1000);
   



svg.selectAll("circle")
    .data(sandwiches)
    .enter()
    .append("circle")
    .style("stroke", "black") 
    .attr("fill", function(x){
        if(x.price<=7.00){
            fill="green"
            return fill
        }
        else{
            
            return "yellow"
        }
    })
    .attr("cx", function(x,y){ return y*60 })
    .attr("cy", 30)
    .attr("r", function(x){
        if(x.size==="small"){
            size=10
            return size
        }
        else{
            return 20;
        }
    });
    // .attr("cx", function(d, index) {
    //     return (index * 60);
    // });




    