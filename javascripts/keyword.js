<script type="text/javascript">
    // PASSWORD PROTECTION SCRIPT

    function TheLogin() {

        var password = '';

        if (this.document.login.pass.value == password) {
            top.location.href = "indexSpoidal.html";
        } else {
            window.alert("Incorrect password, please try again.");
        }
    }
      </script>



          <script type="text/javascript">
    console.log('YOOOOOOO!')
    function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split('&');
      for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split('=');
          if (decodeURIComponent(pair[0]) == variable) {
              return decodeURIComponent(pair[1]);
          }
      }
      console.log('Query variable %s not found', variable);
  }
  console.log('your variable was: ' + getQueryVariable('test') )
  console.log('this is my url: ' + window.location)
      </script>