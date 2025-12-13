/** Node Modules */
import { SignUp } from "@clerk/clerk-react";

/** Components */
import Head from "@/components/Head";


const RegisterPage = () => {
  return (
    <>
        <Head title="Sign Up for ADHD Ally AI"/>

        <section>
            <div className='container flex justify-center'>
                <SignUp signInUrl='/login'/>
            </div>
        </section>
    </>
  );
};

export default RegisterPage;
