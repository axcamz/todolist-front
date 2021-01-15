import { CenterScreen, Container, Body } from "../../atoms"
import { Form } from "../../organisms"

const Auth = ({children, onSubmit}) => {
    

    return (
        <Body bgColor="gray">
            <Container>
                <CenterScreen>
                    <div className="h-3/4 shadow-lg max-h-card max-w-min rounded-lg overflow-hidden flex">
                        <div className="bg-gray-900 md:block hidden md:w-96 h-full"></div>
                        <div className="p-5 w-96 bg-white">
                            <Form onSubmit={onSubmit}>
                                {children}
                            </Form>
                        </div>
                    </div>
                </CenterScreen>
            </Container>
        </Body>
    )
}

export default Auth
