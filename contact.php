<?php
include "core/header.php";
?>
<div class="header">
    <h1>CONTACT</h1>
</div>
<div class="contact">
    <div class="container">
        <h2>Want to get in <span>contact</span>? This is the place to be.</h2>
        <form action="/contact.php" method="POST">
            <div class="row">
                <div class="col-md-6">
                    <label for="fullname">Full name</label>
                    <div class="form-input">
                        <input type="text" name="fullname" id="fullname">
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="email">Email</label>
                    <div class="form-input">
                        <input type="email" name="email" id="email">
                    </div>
                </div>
            </div>
            <label for="message">Message</label>
            <div class="form-input">
                <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit"><span>Contact me</span></button>
        </form>
    </div>
</div>
<?php
include "core/footer.php";
?>