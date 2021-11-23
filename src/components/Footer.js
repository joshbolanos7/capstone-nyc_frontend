import '../App.scss'
// import '../pages/css/footer.scss'

export default function Footer() { 
    return ( 
        <footer className="footer-distributed">
            <div class="footer-left">
                <h3>About <span>NYC App</span></h3>
                <p class="footer-company-about">
                    A non-profit web application that shows you the wonders of New York City.</p>

                    <p class="footer-company-name">© 2021 NYC App</p>

                    <a href='https://github.com/joshbolanos7'> Git Hub </a>

                    <a href='https://www.linkedin.com/in/joshua-bolanos7/'>Linkedin </a>
            </div>

            <div className="footer-right">
                {/* <a href='https://github.com/joshbolanos7'> Git Hub </a> */}
            </div>
            <div className="footer-admin">
                <a href='https://sleepy-brook-05051.herokuapp.com/landmarks/'> Admin Login (CRUD Functions) </a>
            </div>

            <div className='logos'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_New_York_City.svg' width='75px' height='50px'></img>
            </div>
        </footer>
    )
}