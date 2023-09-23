import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function NavbarFooter() {

    window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
        if (document.getElementById('navbar')) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            } else {
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    return (
        <nav data-scroll data-scroll-id="hey" id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
ALOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        </nav>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(NavbarFooter)