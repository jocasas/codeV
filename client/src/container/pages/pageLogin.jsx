import Login from '../../components/userLogin/login';
import Layout from "../../hocs/layouts/layout"
function getLoginUser (){
    return(
        <Layout>
            <Login/>
        </Layout>
    )
}
export default getLoginUser;