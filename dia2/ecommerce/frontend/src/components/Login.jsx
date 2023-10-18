function Login(){
    return(
        <>
        <form>
            <h1>Login</h1>
            <label className="form-label">Email</label>
            <input type="email" id="email" name="email"
             className='form-control'/>
            <label className="form-label">Password</label>
            <input type="password" id="password" name="password"
            className="form-control"/>
            <button className="btn btn-primary" type="submit">LOGIN</button>
        </form>
        </>
    )
}

export default Login