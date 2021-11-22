import '../App.scss'

export default function Footer() { 
    return ( 
        <footer class="footer-distributed">
            <div class="footer-left">
                <h3>About <span>NYC App</span></h3>
                <p class="footer-company-about">
                    A non-profit web application that shows you the wonders of New York City.</p>

                    <p class="footer-company-name">© 2021 NYC App</p>
            </div>

            <div className="footer-right">
                <a href='https://github.com/joshbolanos7'> Git Hub </a>
            </div>
            <div>
                <a href='https://sleepy-brook-05051.herokuapp.com/landmarks/'> Admin Login (CRUD Functions) </a>
            </div>
            
        </footer>
    )
}