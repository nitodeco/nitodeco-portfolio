const Navigation = () => {
    return (
        <nav className="navbar shadow">
            <h1>Nico Moehn</h1>
            <div className="links">
                <div className="btn"><a href="/">Home</a></div>
                <div className="btn"><a href="/projects">Projects</a></div>
                <div className="btn"><a href="/about">About</a></div>
            </div>
        </nav>
    );
}
 
export default Navigation;