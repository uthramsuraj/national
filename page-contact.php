<?php
/**
* Template Name: Contact-Page
*/
?>
<?php get_header();?>


<section class="home-page contact-page">
    <div class="national-container">
        <h1>Contact Us</h1>
    </div>
</section>
<section class="forkit-sub-wrap">
    <div class="national-container">
        <h2>We offer a wide range of rental solutions for your job site</h2>
        <div class="forkit-sub-block-main">
            <div class="forkit-sub-block">
                <img src="<?php bloginfo('template_directory')?>/assets/images/road-roler.png">
                <h3>Rentals</h3>
                <p>If it can be rented, we will find it for you.</p>
            </div>
            <div class="forkit-sub-block">
                <img src="<?php bloginfo('template_directory')?>/assets/images/shwel.png">
                <h3>Materials</h3>
                <p>Materials dispatched to your site when you need it.</p>
            </div>
            <div class="forkit-sub-block">
                <img src="<?php bloginfo('template_directory')?>/assets/images/truck.png">
                <h3>Trucking</h3>
                <p>Material, equipment and freight to or from your site.</p>
            </div>
            <div class="forkit-sub-block">
                <img src="<?php bloginfo('template_directory')?>/assets/images/cape.png">
                <h3>Subcontracting</h3>
                <p>Qualified network of subcontractors to meet any need.</p>
            </div>
        </div>
    </div>
</section>

<section class="contact-main-wrap">
    <div class="national-container">
        <div class="contact-content-wrap">
            <div class="contact-content">
                <small>CORPORATE INFO</small>
                <p>5125 N. Gates Ave., Ste. 102 Fresno,CA93722</p>
            </div>
            <div class="contact-content">
                <small>PHONE</small>
                <p>Central Dispatch\ 559.705.2444</p>
            </div>
            <div class="contact-content">
                <small>EMAIL</small>
                <p>dispatch@nationaldispatching.com</p>
            </div>
            <div class="contact-content">
                <small>WORKING HOURS</small>
                <p>DISPATCH HOURS</p>
                <p>Customized Project Support</p><br/>
                <p>CORPORATE HOURS</p>
                <p>Mon - Fri: 7:00am - 5:00pm PST</p>
                <p>Sat - Sun: Closed</p>
            </div>
        </div>
        <div class="contact-address-wrap">
            <h2>Send us a message </br>
            A team member will respond to you shortly.</h2>
            
            <?php if( have_posts() ): while ( have_posts() ): the_post(); ?>
              <?php the_content(); ?>
            <?php endwhile; else: endif; ?>
        </div>
    </div>
</section>


<!-- Service territory section start -->
<section class="service-territory">
    <div class="national-container">
        <div class="row">
            <article class="col-lg-12 text-center">
                <h5 class="ttl-22">Service territory via our qualified partner network</h5>
                <p>Alabama, Alaska, Arizona,Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia,
                    Hawaii, Idaho, IllinoisIndiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland,
                    Massachusetts, Michigan, Minnesota, Mississippi, Missouri, MontanaNebraska, Nevada, New
                    Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma,
                    Oregon, PennsylvaniaRhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont,
                    Virginia, Washington, West Virginia, Wisconsin, Wyoming
                </p>
            </article>
        </div>
    </div>
</section>
<!-- Service territory section end -->



<?php get_footer();?>