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