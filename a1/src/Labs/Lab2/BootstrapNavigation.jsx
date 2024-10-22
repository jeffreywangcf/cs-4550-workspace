export default function BootstrapNavigation() {
    return (
        <div className="container">
            <div id="wd-css-navigating-with-tabs">
                <h2>Tabs</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            Active
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Disabled
                        </a>
                    </li>
                </ul>
            </div>

            <div id="wd-css-navigating-with-cards" className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Cards</h2>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure>
                        <img src="images/labs/teslabot.png" alt="Stacking Starship" />
                    </figure>
                    <div className="card-body">
                        <h5 className="card-title">Stacking Starship</h5>
                        <p className="card-text">
                            Stacking the most powerful rocket in history. Mars or bust!
                        </p>
                        <a href="#" className="btn">
                            Boldly Go
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
