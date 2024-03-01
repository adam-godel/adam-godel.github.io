<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adam Godel</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
    <meta property='og:title' content='Adam Godel' />
    <meta property='og:image' content='https://i.ibb.co/Q9csYNJ/AGThumbnail.png' />
    <meta property='og:description'
        content='I am a first-year student studying mathematics and computer science at Boston University.' />
    <meta property='og:url' content='https://adam-godel.github.io/' />
    <meta property='og:image:width' content='1230' />
    <meta property='og:image:height' content='640' />
    <meta name="twitter:site" content="Adam Godel">
    <meta name="twitter:title" content="Adam Godel">
    <meta name="twitter:description"
        content="I am a first-year student studying mathematics and computer science at Boston University.">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image:src" content="https://i.ibb.co/Q9csYNJ/AGThumbnail.png">
    <meta name="theme-color" content="#DEDEDE">
</head>

<body>
    <?php
    $errors = [];
    $errorMessage = '';

    if (!empty($_POST)) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        if (empty($name)) {
            $errors[] = 'Name is empty';
        }

        if (empty($email)) {
            $errors[] = 'Email is empty';
        } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Email is invalid';
        }

        if (empty($message)) {
            $errors[] = 'Message is empty';
        }

        if (empty($errors)) {
            $toEmail = 'adam.godel@icloud.com';
            $emailSubject = 'New Email From Website';
            $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
            $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", $message];
            $body = join(PHP_EOL, $bodyParagraphs);

            if (mail($toEmail, $emailSubject, $body, $headers)) {
                header('Location: thank-you.html');
            } else {
                $errorMessage = 'Oops, something went wrong. Please try again later';
            }

        } else {
            $allErrors = join('<br/>', $errors);
            $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
        }
    }
    ?>
    <div id="navbar">
        <h2 id="main-nav">Adam Godel</h2>
        <p id="about-nav">About</a>
        <p id="projects-nav">Projects</a>
        <p id="classes-nav">Classes</a>
    </div>
    <div class="body">
        <div id="profile">
            <img width="250" src="images/dc.png" />
            <div id="profile-text">
                <p>Hello, I am</p>
                <h2 id="my-name">Adam Godel</h2>
                <p>Boston University Student</p>
                <div class="icons">
                    <img id="linkedin-img" width="50" src="images/linkedin.png" />
                    <img id="github-img" width="50" src="images/github.png" />
                </div>
            </div>
        </div>
        <div class="contact">
            <form method="post" id="contact-form">
                <h1 style="margin-bottom: 8px">Contact Me</h1>
                <?php echo ((!empty($errorMessage)) ? $errorMessage : '') ?>
                <h4><label>Name:</label> <input name="name" type="text" /></h4>
                <h4><label>Email:</label> <input name="email" type="text" /></h4>
                <h4><label>Message:</label> <br> <textarea name="message" rows=10></textarea></h4>
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
    <script src="contact.js"></script>
</body>

</html>