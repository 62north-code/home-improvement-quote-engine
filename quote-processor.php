<?php
// Retrieve the data sent via AJAX
$data = json_decode($_POST['data'], true);

// Access the window configurations
$windowConfigurations = $data['windowConfigurations'];
// Access the door configurations
$doorConfigurations = $data['doorConfigurations'];

// Combine window and door configurations into an array
$configurations = array(
  'windowConfigurations' => $windowConfigurations,
  'doorConfigurations' => $doorConfigurations
);

// Generate styled blocks for each configuration
$output = '';
foreach ($configurations as $type => $items) {
    foreach ($items as $item) {
        $output .= '<div class="config-block">';
        if ($type === 'windowConfigurations') {
            $output .= '<p>Customer Window SKU: ' . $item['id'] . '</p>';
            $output .= '<p>Window Style: ' . $item['windowStyle'] . '</p>';
            $output .= '<p>Window Dimensions: ' . $item['dimensionsWidth'] . ' x ' . $item['dimensionsHeight'] . ' mm</p>';
            $output .= '<p>External Frame Color: ' . $item['externalFrameColor'] . '</p>';
            $output .= '<p>Internal Frame Color: ' . $item['internalFrameColor'] . '</p>';
            $output .= '<p>Handle Color: ' . $item['handleColor'] . '</p>';
            $output .= '<p>Glazing Style: ' . $item['glazingStyle'] . '</p>';
        } elseif ($type === 'doorConfigurations') {
            $output .= '<p>Customer Door SKU: ' . $item['id'] . '</p>';
            $output .= '<p>Door Style: ' . $item['doorStyle'] . '</p>';
            $output .= '<p>Door Dimensions: ' . $item['dimensionsWidth'] . ' x ' . $item['dimensionsHeight'] . ' mm</p>';
            $output .= '<p>External Door Frame Color: ' . $item['externalFrameColor'] . '</p>';
            $output .= '<p>Internal Door Frame Color: ' . $item['internalFrameColor'] . '</p>';
            $output .= '<p>Door Handle Color: ' . $item['handleColor'] . '</p>';
            $output .= '<p>Door Glazing Style: ' . $item['glazingStyle'] . '</p>';
        }
        $output .= '</div>';
    }
}

// Return the output
echo $output;
?>
