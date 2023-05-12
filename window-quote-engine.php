<?php
$windowQuoteEngineImage = get_field('window_quote_engine_main_image', 'options');
$windowStyles = get_field('window_style', 'options'); 
$windowExternalFrameColors = get_field('window_external_frame_colors', 'options'); 
$windowInternalFrameColors = get_field('window_internal_frame_colors', 'options'); 
$windowHandleColors = get_field('window_handle_colors', 'options'); 
$windowGlazingStyles = get_field('window_glazing_styles', 'options'); 
?>

    <div class="container">

        <div class="calculator-container">

            <div id="step1" class="step">
                <h2>Window Style</h2>

                <div class="grid">
                    <?php foreach($windowStyles as $windowStyle): ?>
                        <?php $windowStyleName = $windowStyle['window_style']["window_style_name"]; ?>
                        <?php $windowStyleImageUrl = $windowStyle['window_style']["window_style_image"]['url']; ?>
                        <div class="window-style">
                            <img src="<?php echo $windowStyleImageUrl; ?>" alt="<?php echo $windowStyleName; ?>" data-window-style="<?php echo $windowStyleName; ?>">
                            <p><?php echo $windowStyleName; ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div class="validation-message"></div>

                <div class="button-container">
                    <button id="view-quote-summary-btn">View My Quote Summary</button>
                    <button class="next">Next</button>
                </div>

            </div>


            <div id="step2" class="step hidden">

                <h2>Window Dimensions</h2>

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

                    <?php foreach($windowExternalFrameColors as $windowExternalFrameColor): ?>
                        <?php $windowExternalFrameColorName = $windowExternalFrameColor['window_external_frame_color']["window_external_frame_color_name"]; ?>
                        <?php $windowExternalFrameColorImageUrl = $windowExternalFrameColor['window_external_frame_color']["window_external_frame_color_swatch"]['url']; ?>
                        <div class="external-frame-color">
                            <img src="<?php echo $windowExternalFrameColorImageUrl; ?>" alt="<?php echo $windowExternalFrameColorName; ?>" data-external-frame-color="<?php echo $windowExternalFrameColorName; ?>">
                            <p><?php echo $windowExternalFrameColorName; ?></p>
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

                    <?php foreach($windowInternalFrameColors as $windowInternalFrameColor): ?>
                        <?php $windowInternalFrameColorName = $windowInternalFrameColor['window_internal_frame_color']["window_internal_frame_color_name"]; ?>
                        <?php $windowInternalFrameColorImageUrl = $windowInternalFrameColor['window_internal_frame_color']["window_internal_frame_color_swatch"]['url']; ?>
                        <div class="internal-frame-color">
                            <img src="<?php echo $windowInternalFrameColorImageUrl; ?>" alt="<?php echo $windowInternalFrameColorName; ?>" data-internal-frame-color="<?php echo $windowInternalFrameColorName; ?>">
                            <p><?php echo $windowInternalFrameColorName; ?></p>
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

                    <?php foreach($windowHandleColors as $windowHandleColor): ?>
                        <?php $windowHandleColorName = $windowHandleColor['window_handle_color']["window_handle_color_name"]; ?>
                        <?php $windowHandleColorImageUrl = $windowHandleColor['window_handle_color']["window_handle_color_swatch"]['url']; ?>
                        <div class="handle-color">
                            <img src="<?php echo $windowHandleColorImageUrl; ?>" alt="<?php echo $windowHandleColorName; ?>" data-handle-color="<?php echo $windowHandleColorName; ?>">
                            <p><?php echo $windowHandleColorName; ?></p>
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

                <?php foreach($windowGlazingStyles as $windowGlazingStyle): ?>
                        <?php $windowGlazingStyleName = $windowGlazingStyle['window_glazing_style']["window_glazing_style_name"]; ?>
                        <?php $windowGlazingStyleImageUrl = $windowGlazingStyle['window_glazing_style']["window_glazing_style_image"]['url']; ?>
                        <div class="glazing-style">
                            <img src="<?php echo $windowGlazingStyleImageUrl; ?>" alt="<?php echo $windowGlazingStyleName; ?>" data-glazing-style="<?php echo $windowGlazingStyleName; ?>">
                            <p><?php echo $windowGlazingStyleName; ?></p>
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
                    <h3>Summary</h3>

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
                        <button id="configure-another-window">Configure Another Window</button>
                        <button class="submit-quote" type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <div class="image-side" style="background:url('<?php echo $windowQuoteEngineImage; ?>')">
            <div class="quote-engine-selector-container">
                <div class="quote-engine-tile">Window Quote</div>
                <div class="quote-engine-tile">Door Quote</div>
                <div class="quote-engine-tile">Conservatory Quote</div>
                <div class="quote-engine-tile">Replacement Conservatory Roof Quote</div>
            </div>
        </div>
    </div>


