<?php 
/**
 * Title: Custom faq pattern
 * Slug: blocks/custom-faq-pattern
 * Categories: custom-blocks
 */
?>
<!-- wp:group {"tagName":"section","className":"break-at-950","style":{"spacing":{"blockGap":"48px"}},"layout":{"type":"grid","columnCount":2,"minimumColumnWidth":null}} -->
<section class="wp-block-group break-at-950" style="padding: 96px 0px">
    <!-- wp:group {"style":{"layout":{"selfStretch":"fit","flexSize":null}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"left"}} -->
    <div class="wp-block-group"><!-- wp:paragraph {"className":"is-style-text-display"} -->
        <p class="is-style-text-display">Sadzonki P9</p>
        <!-- /wp:paragraph -->

        <!-- wp:heading -->
        <h2 class="wp-block-heading">Najczęściej zadawane pytania</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph -->
        <p>Masz pytania? Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania dotyczące zamówień, pojemników,
            dostaw oraz zasad współpracy.</p>
        <!-- /wp:paragraph -->

        <!-- wp:heading -->
        <h2 class="wp-block-heading">Skontaktuj się z nami</h2>
        <!-- /wp:heading -->

        <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
        <div class="wp-block-group">
            <!-- wp:image {"id":282,"width":"16px","height":"16px","scale":"cover","sizeSlug":"large","linkDestination":"none","className":"icon-bg-small"} -->
            <figure class="wp-block-image size-large is-resized icon-bg-small"><img
                    src="<?php echo esc_url( get_theme_file_uri( 'assets/svgs/phone-icon.svg') ); ?>" alt="" class="wp-image-282"
                    style="object-fit:cover;width:16px;height:16px" /></figure>
            <!-- /wp:image -->

            <!-- wp:paragraph -->
            <p><a href="tel:48530615600">+48 530 615 600</a></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
        <div class="wp-block-group">
            <!-- wp:image {"id":283,"width":"16px","height":"16px","scale":"cover","sizeSlug":"large","linkDestination":"none","className":"icon-bg-small"} -->
            <figure class="wp-block-image size-large is-resized icon-bg-small"><img
                    src="<?php echo esc_url( get_theme_file_uri( 'assets/svgs/mail-icon.svg') ); ?>" alt="" class="wp-image-283"
                    style="object-fit:cover;width:16px;height:16px" /></figure>
            <!-- /wp:image -->

            <!-- wp:paragraph -->
            <p><a href="mailto:biuro@sadzonkiwp9.pl">biuro@sadzonkiwp9.pl</a></p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
        <div class="wp-block-group">
            <!-- wp:image {"id":284,"width":"16px","height":"16px","scale":"cover","sizeSlug":"large","linkDestination":"none","className":"icon-bg-small"} -->
            <figure class="wp-block-image size-large is-resized icon-bg-small"><img
                    src="<?php echo esc_url( get_theme_file_uri( 'assets/svgs/location-icon.svg') ); ?>" alt="" class="wp-image-284"
                    style="object-fit:cover;width:16px;height:16px" /></figure>
            <!-- /wp:image -->

            <!-- wp:paragraph -->
            <p>Nowy Pożóg 100, 24-130 Końskowola</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:common/reactive-form -->
        <form class="wp-block-common-reactive-form">
            <div class="first-step"><label for="text" id="input-label">Sam zadaj nam pytanie</label><textarea required
                    minlength="4" id="text" name="text" rows="5"
                    title="Proszę wpisać conajmniej 4 litery"></textarea><button id="next-step" type="button">Przejdź
                    dalej</button></div>
            <div class="second-step"><label for="name">Imię i nazwisko / nazwa firmy</label><input type="text" required
                    name="name" id="name" title="Proszę podać imię i nazwisko lub nazwę firmy" /><label for="mail">Adres
                    e-mail</label><input type="email" required name="mail" id="mail"
                    title="Proszę podać poprawny adres email" />
                <div class="checkbox-wrapper"><input type="checkbox" id="privacy-policy" name="privacy-policy" required
                        title="Proszę zaakceptować politykę prywatności" /><label for="privacy-policy">Akceptuję <a
                            href="/polityka-prywatności" target="_blank">Politykę prywatnści</a></label></div><button
                    type="submit">Wyślij</button>
            </div>
        </form>
        <!-- /wp:common/reactive-form -->
    </div>
    <!-- /wp:group -->

    <!-- wp:components/faq-cards -->
    <div class="wp-block-components-faq-cards"><!-- wp:atoms/faq-card -->
        <details name="faq" class="wp-block-atoms-faq-card">
            <!-- wp:heading {"placeholder":"Czy mogę złoźyć zamówienie próbne?"} -->
            <h2 class="wp-block-heading">Czy mogę złożyć zamówienie próbne?</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"placeholder":"Oczywiście – zamówienie próbne to świetny sposób, by bez ryzyka sprawdzić jakość naszych sadzonek P9. Wystarczy wypełnić krótki formularz na stronie, podać rodzaj roślin, ilość oraz preferowany termin odbioru."} -->
            <p>Oczywiście – zamówienie próbne to świetny sposób, by bez ryzyka sprawdzić jakość naszych sadzonek P9.
                Wystarczy wypełnić krótki formularz na stronie, podać rodzaj roślin, ilość oraz preferowany termin
                odbioru.</p>
            <!-- /wp:paragraph -->
        </details>
        <!-- /wp:atoms/faq-card -->

        <!-- wp:atoms/faq-card -->
        <details name="faq" class="wp-block-atoms-faq-card">
            <!-- wp:heading {"placeholder":"Czy mogę złoźyć zamówienie próbne?"} -->
            <h2 class="wp-block-heading">Jak mogę złożyć zamówienie hurtowe?</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"placeholder":"Oczywiście – zamówienie próbne to świetny sposób, by bez ryzyka sprawdzić jakość naszych sadzonek P9. Wystarczy wypełnić krótki formularz na stronie, podać rodzaj roślin, ilość oraz preferowany termin odbioru."} -->
            <p>Jak mogę złożyć zamówienie hurtowe?</p>
            <!-- /wp:paragraph -->
        </details>
        <!-- /wp:atoms/faq-card -->

        <!-- wp:atoms/faq-card -->
        <details name="faq" class="wp-block-atoms-faq-card">
            <!-- wp:heading {"placeholder":"Czy mogę złoźyć zamówienie próbne?"} -->
            <h2 class="wp-block-heading">Jakie formy transportu i dostawy oferujecie?</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"placeholder":"Oczywiście – zamówienie próbne to świetny sposób, by bez ryzyka sprawdzić jakość naszych sadzonek P9. Wystarczy wypełnić krótki formularz na stronie, podać rodzaj roślin, ilość oraz preferowany termin odbioru."} -->
            <p>Jakie formy transportu i dostawy oferujecie?</p>
            <!-- /wp:paragraph -->
        </details>
        <!-- /wp:atoms/faq-card -->

        <!-- wp:atoms/faq-card -->
        <details name="faq" class="wp-block-atoms-faq-card">
            <!-- wp:heading {"placeholder":"Czy mogę złoźyć zamówienie próbne?"} -->
            <h2 class="wp-block-heading">W jakich pojemnikach są oferowane rośliny</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"placeholder":"Oczywiście – zamówienie próbne to świetny sposób, by bez ryzyka sprawdzić jakość naszych sadzonek P9. Wystarczy wypełnić krótki formularz na stronie, podać rodzaj roślin, ilość oraz preferowany termin odbioru."} -->
            <p>W jakich pojemnikach są oferowane rośliny</p>
            <!-- /wp:paragraph -->
        </details>
        <!-- /wp:atoms/faq-card -->

        <!-- wp:atoms/faq-card -->
        <details name="faq" class="wp-block-atoms-faq-card">
            <!-- wp:heading {"placeholder":"Czy mogę złoźyć zamówienie próbne?"} -->
            <h2 class="wp-block-heading">Czy dostarczacie rośliny za granicę?</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"placeholder":"Oczywiście – zamówienie próbne to świetny sposób, by bez ryzyka sprawdzić jakość naszych sadzonek P9. Wystarczy wypełnić krótki formularz na stronie, podać rodzaj roślin, ilość oraz preferowany termin odbioru."} -->
            <p>Czy dostarczacie rośliny za granicę?</p>
            <!-- /wp:paragraph -->
        </details>
        <!-- /wp:atoms/faq-card -->

        <!-- wp:atoms/faq-card -->
        <details name="faq" class="wp-block-atoms-faq-card">
            <!-- wp:heading {"placeholder":"Czy mogę złoźyć zamówienie próbne?"} -->
            <h2 class="wp-block-heading">Dla jakich klientów skierowana jest Wasza oferta?</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"placeholder":"Oczywiście – zamówienie próbne to świetny sposób, by bez ryzyka sprawdzić jakość naszych sadzonek P9. Wystarczy wypełnić krótki formularz na stronie, podać rodzaj roślin, ilość oraz preferowany termin odbioru."} -->
            <p>Dla jakich klientów skierowana jest Wasza oferta?</p>
            <!-- /wp:paragraph -->
        </details>
        <!-- /wp:atoms/faq-card -->
    </div>
    <!-- /wp:components/faq-cards -->
</section>
<!-- /wp:group -->