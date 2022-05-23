const Nav = () => {
    
    const style = {
        section: {
            margin: '5px'
        }
    }
    // eslint-disable-next-line
    return (
        <section style={style.section}>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/ecommerce">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Deals</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Cart</a>
                </li>
            </ul>
        </section>
    )
}

export default Nav;