<?php
$doorQuoteEngineImage = get_field('door_quote_engine_main_image', 'options');
$doorStyles = get_field('door_style', 'options'); 
$doorExternalFrameColors = get_field('door_external_frame_colors', 'options'); 
$doorInternalFrameColors = get_field('door_internal_frame_colors', 'options'); 
$doorHandleColors = get_field('door_handle_colors', 'options'); 
$doorGlazingStyles = get_field('door_glazing_styles', 'options'); 
?>

    <div class="container">

        <div class="calculator-container">

            <div id="step1" class="step">
                <h2>Door Style</h2>

                <div class="grid">
                    <?php foreach($doorStyles as $doorStyle): ?>
                        <?php $doorStyleName = $doorStyle['door_style']["door_style_name"]; ?>
                        <?php $doorStyleImageUrl = $doorStyle['door_style']["door_style_image"]['url']; ?>
                        <div class="door-style">
                            <img src="<?php echo $doorStyleImageUrl; ?>" alt="<?php echo $doorStyleName; ?>" data-door-style="<?php echo $doorStyleName; ?>" class="config-image-square">
                            <p><?php echo $doorStyleName; ?></p>
                            <a class="product-find-out-more" href="#">Find Out More</a>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div class="validation-message"></div>

                <div class="button-container">
                    <button id="view-quote-summary-btn" style="display:none;">View My Quote Summary</button>
                    <button class="next">Next</button>
                </div>

            </div>


            <div id="step2" class="step hidden">

                <h2>door Dimensions</h2>

                <div class="dimensions-container">
                    <label for="width">Width (mm):</label>
                    <input type="number" id="width" name="width" min="0" required>
                    <label for="height">Height (mm):</label>
                    <input type="number" id="height" name="height" min="0" required>
                </div>

                <div class="validation-message"></div>

                <div class="button-container">
                    <button class="prev">Previous</button>
                    <button class="next">Next</button>
                </div>

            </div>


            <div id="step3" class="step hidden">

                <h2>External Frame Colour</h2>

                <div class="grid">

                    <?php foreach($doorExternalFrameColors as $doorExternalFrameColor): ?>
                        <?php $doorExternalFrameColorName = $doorExternalFrameColor['door_external_frame_color']["door_external_frame_color_name"]; ?>
                        <?php $doorExternalFrameColorImageUrl = $doorExternalFrameColor['door_external_frame_color']["door_external_frame_color_swatch"]['url']; ?>
                        <div class="external-frame-color">
                            <img src="<?php echo $doorExternalFrameColorImageUrl; ?>" alt="<?php echo $doorExternalFrameColorName; ?>" data-external-frame-color="<?php echo $doorExternalFrameColorName; ?>" class="config-image-square">
                            <p><?php echo $doorExternalFrameColorName; ?></p>
                        </div>
                    <?php endforeach; ?>

                </div>

                <div class="validation-message"></div>

                <div class="button-container">
                    <button class="prev">Previous</button>
                    <button class="next">Next</button>
                </div>

            </div>


            <div id="step4" class="step hidden">

                <h2>Internal Frame Colour</h2>

                <div class="grid">

                    <?php foreach($doorInternalFrameColors as $doorInternalFrameColor): ?>
                        <?php $doorInternalFrameColorName = $doorInternalFrameColor['door_internal_frame_color']["door_internal_frame_color_name"]; ?>
                        <?php $doorInternalFrameColorImageUrl = $doorInternalFrameColor['door_internal_frame_color']["door_internal_frame_color_swatch"]['url']; ?>
                        <div class="internal-frame-color">
                            <img src="<?php echo $doorInternalFrameColorImageUrl; ?>" alt="<?php echo $doorInternalFrameColorName; ?>" data-internal-frame-color="<?php echo $doorInternalFrameColorName; ?>" class="config-image-square">
                            <p><?php echo $doorInternalFrameColorName; ?></p>
                        </div>
                    <?php endforeach; ?>

                </div>

                <div class="validation-message"></div>

                <div class="button-container">
                    <button class="prev">Previous</button>
                    <button class="next">Next</button>
                </div>

            </div>

            <div id="step4_5" class="step hidden">
                <h2>Handle Colour</h2>
                <div class="grid">

                    <?php foreach($doorHandleColors as $doorHandleColor): ?>
                        <?php $doorHandleColorName = $doorHandleColor['door_handle_color']["door_handle_color_name"]; ?>
                        <?php $doorHandleColorImageUrl = $doorHandleColor['door_handle_color']["door_handle_color_swatch"]['url']; ?>
                        <div class="handle-color">
                            <img src="<?php echo $doorHandleColorImageUrl; ?>" alt="<?php echo $doorHandleColorName; ?>" data-handle-color="<?php echo $doorHandleColorName; ?>" class="config-image-square">
                            <p><?php echo $doorHandleColorName; ?></p>
                        </div>
                    <?php endforeach; ?>


                    <!-- Add more handle colors as needed -->
                </div>
                <div class="validation-message"></div>
                <div class="button-container">

                    <button class="prev">Previous</button>
                    <button class="next">Next</button>
                </div>
            </div>


            <div id="step5" class="step hidden">
                <h2>Glazing Style</h2>
                <div class="grid">

                <?php foreach($doorGlazingStyles as $doorGlazingStyle): ?>
                        <?php $doorGlazingStyleName = $doorGlazingStyle['door_glazing_style']["door_glazing_style_name"]; ?>
                        <?php $doorGlazingStyleImageUrl = $doorGlazingStyle['door_glazing_style']["door_glazing_style_image"]['url']; ?>
                        <div class="glazing-style">
                            <img src="<?php echo $doorGlazingStyleImageUrl; ?>" alt="<?php echo $doorGlazingStyleName; ?>" data-glazing-style="<?php echo $doorGlazingStyleName; ?>" class="config-image-square">
                            <p><?php echo $doorGlazingStyleName; ?></p>
                        </div>
                    <?php endforeach; ?>
                    
                    <!-- Add more glazing styles as needed -->
                </div>
                <div class="validation-message"></div>
                <div class="button-container">
                    <button class="prev">Previous</button>
                    <button id="next-step5" class="next">Next</button>
                </div>
            </div>


            <div id="step6" class="step hidden">

                <div id="summary">
                    <h3>Your Quote Summary</h3>
                    <p id="no-config-doors-msg">You have no configured doors<br><span id="inline-begin">Click Here To Start</span></p>
                </div>

                <form id="contact-form">
                   
                <div class="form-inline-container">
                    <div class="form-field">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" class="form-input-half" placeholder="Name" required>
                    </div>
                    <div class="form-field">
                        <label label for="email">Email:</label>
                        <input type="email" id="email" name="email" class="form-input-half" placeholder="Email" required>
                    </div>
                </div>
                <div class="form-inline-container">
                    <div class="form-field">
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" class="form-input-whole" placeholder="Phone" required>
                    </div>
                    <div class="form-field">
                        <label for="postcode">Postcode:</label>
                        <input type="text" id="postcode" name="postcode" class="form-input-whole" placeholder="Postcode" required>
                    </div>

                </div>


                    <div class="button-container">
                        <button id="configure-another-door">Configure Another door</button>
                        <button class="submit-quote" type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <div class="image-side" style="background:url('<?php echo $doorQuoteEngineImage; ?>')">
            <div class="quote-engine-selector-container">
                <a href="/window-quote-engine"><div class="quote-engine-tile">Add Windows To Your Quote</div></a>
                <a href="/door-quote-engine"><div class="quote-engine-tile">Add Doors To Your Quote</div></a>
                <div class="quote-engine-tile">Add a Conservatory To Your Quote</div>
                <div class="quote-engine-tile">Add Replacement Conservatory Roofing To Your Quote</div>
                <a href="/submit-quote">
                <div class="quote-engine-tile tile-full">SUBMIT QUOTE</div>
            </a>
            </div>
        </div>
    </div>


