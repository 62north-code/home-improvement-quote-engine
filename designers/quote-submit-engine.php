<?php
$windowQuoteEngineImage = get_field('window_quote_engine_main_image', 'options');
?>

<div class="container">
    <div class="calculator-container">
        <div id="output-container"></div>
    </div>

    <div class="image-side" style="background:url('<?php echo $windowQuoteEngineImage; ?>')">
        <div class="quote-engine-selector-container">
            <a href="/window-quote-engine">
                <div class="quote-engine-tile">Add Windows To Your Quote</div>
            </a>
            <a href="/door-quote-engine">
                <div class="quote-engine-tile">Add Doors To Your Quote</div>
            </a>
            <div class="quote-engine-tile">Add a Conservatory To Your Quote</div>
            <div class="quote-engine-tile">Add Replacement Conservatory Roofing To Your Quote</div>
            <a href="/submit-quote">
                <div class="quote-engine-tile tile-full">SUBMIT QUOTE</div>
            </a>
        </div>
    </div>
</div>

<script>
// Retrieve data from local storage
var windowConfigurations = JSON.parse(localStorage.getItem('windowConfigurations'));
var doorConfigurations = JSON.parse(localStorage.getItem('doorConfigurations'));

// Prepare data for sending to PHP script
var data = {
  windowConfigurations: windowConfigurations,
  doorConfigurations: doorConfigurations
};

// Send data to PHP script using AJAX
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Handle the response from the PHP script
    document.getElementById("output-container").innerHTML = this.responseText;
  }
};
xhttp.open("POST", "/wp-content/plugins/quote-engine/quote-processor.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("data=" + encodeURIComponent(JSON.stringify(data)));
</script>
