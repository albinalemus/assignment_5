document.addEventListener("DOMContentLoaded", function () {
    // Sales data
    const salesData = [
        { month: "Jan-Mar", sales: 2005.00 },
        { month: "April-Jun", sales: 1471.31 },
        { month: "Jul-Sep", sales: 892.86 },
        { month: "Oct-Dec", sales: 531.60 }
    ];

    // Colorblind-friendly colors
    const graphColors = ["#1f78b4", "#33a02c", "#e31a1c", "#ff7f00"];

    // Create a bar graph using canvas
    const canvas = document.getElementById("salesGraphCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    const canvasWidth = 500; // Increased canvas width
    const canvasHeight = 350;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Draw the graph
    const barWidth = (canvasWidth - 40) / salesData.length; // Adjusted bar width and removed padding
    const maxSales = Math.max(...salesData.map(data => data.sales));

    function drawGraph() {
        salesData.forEach((data, index) => {
            const barHeight = (data.sales / maxSales) * (canvasHeight - 40); // Adjusted bar height and removed padding
            const x = 20 + index * barWidth; // Adjusted x position

            // Draw the bar
            ctx.fillStyle = graphColors[index];
            ctx.fillRect(x, canvasHeight - barHeight - 20, barWidth, barHeight); // Adjusted y position

            // Display month below the bar
            ctx.fillStyle = "#000";
            ctx.fillText(data.month, x + barWidth / 2, canvasHeight - 5);
        });
    }

    drawGraph(); // Initial drawing

    // Reset graph button
    const resetGraphButton = document.getElementById("resetGraph");

    resetGraphButton.addEventListener("click", function () {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

      
      
    });
});
