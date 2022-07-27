import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div class="hero min-h-screen bg-accent">
            <div class="max-w-5xl  ">
                <h1 class="text-2xl font-bold text-center my-3 text-primary">Login now!</h1>
                <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <NavLink className='link-hover' to={'/#'}>Forgat password</NavLink>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <button className='btn btn-glass hover:bg-primary border-0'>continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;