function Footer() {
    return (
        <footer className='page-footer #212121 grey darken-4'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
