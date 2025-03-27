import Layout from "../../Components/Layout";
import './styles.scss';
const Home = () => {
    return (
        <Layout>
            <div  className={'page-home'}>
                <h1>home</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus distinctio in labore natus, quibusdam
                    sequi tenetur! Enim fuga nihil reprehenderit.
                </p>
                <h2>Users</h2>
                <table border="1">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>123 Main St, New York</td>
                        <td>Admin</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>jane@example.com</td>
                        <td>456 Maple Ave, Toronto</td>
                        <td>User</td>
                    </tr>
                    </tbody>
                </table>


                <h2>Products</h2>
                <table border="1">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>User ID</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laptop</td>
                        <td>High-performance laptop</td>
                        <td>$1200.00</td>
                        <td>1</td>
                        <td>New York</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Phone</td>
                        <td>Latest smartphone model</td>
                        <td>$800.00</td>
                        <td>2</td>
                        <td>Toronto</td>
                    </tr>
                    </tbody>
                </table>

                <h2>Product Images</h2>
                <table border="1">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product ID</th>
                        <th>Title</th>
                        <th>Image Source</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Laptop Image</td>
                        <td><img src="laptop.jpg" alt="Laptop" width="100"/></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>Phone Image</td>
                        <td><img src="phone.jpg" alt="Phone" width="100"/></td>
                    </tr>
                    </tbody>
                </table>

                <h2>Roles</h2>
                <table border="1">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Admin</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>User</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Home;