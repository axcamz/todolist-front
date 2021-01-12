import { CenterScreen, PlayfairFont } from "../../atoms"
import { PasswordInput, TextInput } from "../../molecules"
import { Form } from "../../organisms"

const Auth = () => {
    return (
        <PlayfairFont>
            <CenterScreen>
                <div className="shadow-lg h-3/4 max-w-min rounded-lg overflow-hidden flex">
                    <div className="bg-gray-900 md:block hidden md:w-96 h-full"></div>
                    <div className="p-5 w-96">
                        <Form>
                            <TextInput className="mb-3" title="Username"/>
                            <PasswordInput className="mb-3" title="Password"/>
                            <PasswordInput className="mb-3" title="Confirm Password"/>
                        </Form>
                    </div>
                </div>
            </CenterScreen>
        </PlayfairFont>
    )
}

export default Auth
