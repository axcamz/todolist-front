import { CenterScreen, Container, PlayfairFont } from "../../atoms"
import { Form } from "../../organisms"

const Auth = ({children, onSubmit}) => {
    

    return (
        <PlayfairFont>
            <Container>
                <CenterScreen>
                    <div className="shadow-lg h-3/4 max-w-min rounded-lg overflow-hidden flex">
                        <div className="bg-gray-900 md:block hidden md:w-96 h-full"></div>
                        <div className="p-5 w-96">
                            <Form onSubmit={onSubmit}>
                                {children}
                            </Form>
                        </div>
                    </div>
                </CenterScreen>
            </Container>
        </PlayfairFont>
    )
}

export default Auth
