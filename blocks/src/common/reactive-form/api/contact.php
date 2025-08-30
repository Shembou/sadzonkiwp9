<?php
namespace api;

class contact {
    public static function register_contact_route() {
        register_rest_route('blocks/v1', '/contact', array(
            'methods'  => 'POST',
            'callback' => [self::class, 'handle_custom_form_submission'],
            'permission_callback' => '__return_true',
        ));
    }

    public static function handle_custom_form_submission(\WP_REST_Request $request) {
        $text   = sanitize_textarea_field($request->get_param('text'));
        $name   = sanitize_text_field($request->get_param('name'));
        $email  = sanitize_email($request->get_param('mail'));
        $policy = $request->get_param('privacy-policy');

        if (empty($text) || empty($name) || empty($email)) {
            return new \WP_REST_Response([
                'success' => false,
                'message' => 'All fields are required.'
            ], 400);
        }

        if (!is_email($email)) {
            return new \WP_REST_Response([
                'success' => false,
                'message' => 'Invalid email address provided.'
            ], 400);
        }

        if (empty($policy)) {
            return new \WP_REST_Response([
                'success' => false,
                'message' => 'You must accept the privacy policy.'
            ], 400);
        }

        $to      = get_option('admin_email');
        $subject = 'New contact form submission';
        $headers = ['Content-Type: text/html; charset=UTF-8'];
        $message = "
            <h2>New contact form submission</h2>
            <p><strong>Message:</strong> {$text}</p>
            <p><strong>Name / Company:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
        ";

        $mail_sent = wp_mail($to, $subject, $message, $headers);

        if ($mail_sent) {
            return new \WP_REST_Response([
                'success' => true,
                'message' => 'Thank you! Your message has been sent successfully.'
            ], 200);
        } else {
            return new \WP_REST_Response([
                'success' => false,
                'message' => 'An error occurred while sending the message.'
            ], 500);
        }
    }
}
