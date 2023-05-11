<?php
$windowQuoteEngineImage = get_field('window_quote_engine_main_image', 'options');
$windowStyles = get_field('window_style', 'options'); 
$windowExternalFrameColors = get_field('window_external_frame_colors', 'options'); 
$windowInternalFrameColors = get_field('window_internal_frame_colors', 'options'); 
$windowHandleColors = get_field('window_handle_colors', 'options'); 

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
                            <img src="<?php echo $windowStyleImageUrl; ?>" alt="<?php echo $windowStyleName; ?>">
                            <p><?php echo $windowStyleName; ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div class="validation-message"></div>

                <div class="button-container">
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
                            <img src="<?php echo $windowExternalFrameColorImageUrl; ?>" alt="<?php echo $windowExternalFrameColorName; ?>">
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
                            <img src="<?php echo $windowInternalFrameColorImageUrl; ?>" alt="<?php echo $windowInternalFrameColorName; ?>">
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
                            <img src="<?php echo $windowHandleColorImageUrl; ?>" alt="<?php echo $windowHandleColorName; ?>">
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
                    <div class="glazing-style">
                        <img src="https://via.placeholder.com/150" alt="Glazing Style 1">
                        <p>Glazing Style 1</p>
                    </div>
                    <div class="glazing-style">
                        <img src="https://via.placeholder.com/150" alt="Glazing Style 2">
                        <p>Glazing Style 2</p>
                    </div>
                    <div class="glazing-style">
                        <img src="https://via.placeholder.com/150" alt="Glazing Style 3">
                        <p>Glazing Style 3</p>
                    </div>
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
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" class="form-input-half" placeholder="Name" required>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" class="form-input-half" placeholder="Email" required>
                    </div>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" class="form-input-whole" required>

                    <div class="button-container">
                        <button id="configure-another-window">Configure Another Window</button>
                        <button class="submit-quote" type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <div class="image-side" style="background:url('<?php echo $windowQuoteEngineImage; ?>')">

        </div>
    </div>


