import './Navbar.scss';
import facebooklogo from '/images/facebook.png';
import instalogo from '/images/instagram.png';
import youtubelogo from '/images/youtube.png';
import linkedinlogo from '/images/linkedin.png';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                {/* sidebar */}
                <div className="wrapper">
                    <div className="left">
                        <h3>GAURAV DEV</h3>
                    </div>
                    <div className="right">
                        <a href=""><img className='logo-social' src={facebooklogo} /></a>
                        <a href=""><img className='logo-social' src={instalogo} /></a>
                        <a href=""><img className='logo-social' src={youtubelogo} /></a>
                        <a href=""><img className='logo-social' src={linkedinlogo} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
