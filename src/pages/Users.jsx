import Heading from "../ui/Heading";
import SignUpForm from "../features/authentication/SignupForm";
import Row from "../ui/Row";

function NewUsers() {
  return (
    <Row>
      <Heading as="h1">Create a new user</Heading>
      <SignUpForm />
    </Row>
  );
}

export default NewUsers;
