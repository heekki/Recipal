import { register } from '../api';

const Register = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const { username, firstname, lastname, email, mobilenumber, password } = e.target.elements;
        register(username.value, firstname.value, lastname.value, email.value, mobilenumber.value, password.value)
        .then((response) => {
            alert(`User ${username.value} has been registered successfully. You may now log in.`);
            window.location.replace('/');
        })
        .catch((error) => {
            alert(error);
        });
    };

    return (
        <>

        <div className="row mb-5">
        <div className="col-sm-12 primarycolor">
        <h1>Register</h1>
        </div>
        </div>

        <div className="row mb-5">
        <div className="col-sm-12 primarycolor">
        <form onSubmit={handleRegister}>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="phone_number">Mobile Number:</label>
            <input type="tel" id="phone_number" name="mobilenumber" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className="form-control" required />
        </div>
        <div className="text-right">
            <button type="submit" className="btn btn-outline-light">Register</button>
            <br /><br />
            <a href="/login" className="primarycolor" style={{'textDecoration':'underline'}}>Already have an account? Login</a>
        </div>
        </form>
        </div>
        </div>

        </>
    );
};

export default Register;
