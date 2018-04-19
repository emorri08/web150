<!DOCTYPE html>
<!-- Eleanor Boyd - Accordion Example -->

<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>About</title>
    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
   <script src="https://s3.amazonaws.com/menumaker/menumaker.min.js" type="text/javascript"></script>
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/blitzer/jquery-ui.css">
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/nav.css" />
    <link href="https://fonts.googleapis.com/css?family=Raleway:500" rel="stylesheet">
   

</head>
<body>
    <header>
        <div id="banner">
<!-- banner -->
       
            <img id="bannerImg" class="bannerImage" src="images/paws.png" alt="Banner Image">
 
    <!-- end -->        </div>
            
        <nav id="cssmenu">
            <ul id="menu">
                <li id="home" class="active">
                    <a href="index.html">
                        <span><i class="fa fa-fw fa-home"></i> Home</span>
                    </a>
                </li>
                
                <li id="about">
                    <a href="about.html">
                        <span><i class="fa fa-fw fa-star"></i> About</span>
                    </a>
                </li>
                
                <li id="resources">
                    <a href="resources.html">
                        <span><i class="fa fa-fw fa-paw"></i> Resources</span>
                    </a>
                </li>
                
                <li id="contact">
                    <a href="contact.html">
                        <span><i class="fa fa-fw fa-envelope"></i> Contact</span>
                    </a>
                </li>
                
                <li id="extras" class="has-sub">
                    <a href="extras.html">
                        <span><i class="fa fa-fw fa-gift"></i> Extras!</span>
                    </a>
                    
                        <ul id="sub-nav">
                            <li id="photoGallery">
                                <a href="gallery.html">
                                    <span><i class="fa fa-fw fa-camera-retro"></i> Photo Gallery</span>
                                </a>
                            </li>
                            
                            <li id="drumKit">
                                <a href="drums.html">
                                    <span><i class="fa fa-fw fa-music"></i> Drum Kit</span>
                                </a>
                            </li>
                            
                            <li id="clock">
                                <a href="clock.html">
                                    <span><i class="fa fa-fw fa-clock-o"></i> Clock</span>
                                </a>
                            </li>
                        </ul>
                </li>
            </ul>
        </nav>
    </header>
    
<div id="content">
   <div id="after_submit"></div>
<form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
  <div class="row">
    <label class="required" for="name">Your name:</label><br />
    <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
    <span id="name_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="email">Your email:</label><br />
    <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
    <span id="email_validation" class="error_message"></span>
  </div>
  <div class="row">
    <label class="required" for="message">Your message:</label><br />
    <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
    <span id="message_validation" class="error_message"></span>
  </div>
    
    <input id="submit_button" type="submit" value="Send email" />
</form>
    
    <?php //$_REQUEST - the data that is coming from the form, through AJAX
    $params = $_REQUEST;
    //Do something with the parameters.....save to database
    if (everything_went_ok) echo "Everything is ok. Your submission was saved";
    else (something_went_wrong) echo "There was a problem. Your submission could not be saved"; ?>
    
   <button><a href="index.html">Back to Home Page</a></button>
    
</div>
   <footer>
        <p>
            <small>&copy; 2017, E. Boyd, <a href="http://3tabbies.com">3 Tabbies</a>, All Rights Reserved.</small>
        </p>
    </footer>
        <script src="js/script.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>       
</body>
</html>