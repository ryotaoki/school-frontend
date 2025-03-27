import Navigation from "../Nav";
import {Container} from 'react-bootstrap';

import './styles.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Navigation/>
            <div className={'page'}>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    );
}

export default Layout;