import logo from '../logo.png';

export const SignIn = () => {
    return (
        <div className='flex panel'>
            <img src={logo} className='logo' alt='logo' />
            <div className='flex-col'>
                <div className='sign-in'>
                    <div className='flex left'>
                        <h1>sign in</h1>
                    </div>
                    <div className='flex left'>
                        <p>username:</p>
                        <input type='text' />
                    </div>
                    <div className='flex left'>
                        <p>password:</p>
                        <input type='text' />
                    </div>
                    <button>enter</button>
                </div>
            </div>
        </div>
    )
}