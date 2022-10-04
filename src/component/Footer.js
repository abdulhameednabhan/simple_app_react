import React from "react";

class Footer extends React.Component{

    render(){
        return( <footer>
        <p class="text-center hidden-sm">
            <a href="/index.html" class="active">Home</a> | <a href="/about.html">About</a> | <a href="/contact.html">Contact</a>
        </p>
        <p class="text-center">
            2022 &copy; abdulhameednabhan
        </p>
    </footer>

        );
    }

}


export default Footer;