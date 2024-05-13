import Header from "../components/header";
import food from "../assets/images/soup.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

function Home() {
    return (
        <div>
            <Header />
            <div className="d-flex justify-content-between w-75 container">
                <div className="d-flex flex-column col-2">
                    <div>
                        <img src={food} alt="soup" className="w-100 h-auto rounded mb-2" />
                    </div>
                    <div className="d-flex felx-column justify-content-between ">
                    <p>Soup</p>
                    <FontAwesomeIcon className="mt-1 text-danger" icon={faHeartRegular} />
                    </div>
                    <h5>Chicken noodle</h5>
                </div>
                <div className="d-flex flex-column col-2">
                    <div>
                        <img src={food} alt="soup" className="w-100 h-auto rounded mb-2" />
                    </div>
                    <div className="d-flex felx-column justify-content-between ">
                    <p>Soup</p>
                    <FontAwesomeIcon className="mt-1 text-danger" icon={faHeartRegular} />
                    </div>
                    <h5>Chicken noodle</h5>
                </div>
                <div className="d-flex flex-column col-2">
                    <div>
                        <img src={food} alt="soup" className="w-100 h-auto rounded mb-2" />
                    </div>
                    <div className="d-flex felx-column justify-content-between ">
                    <p>Soup</p>
                    <FontAwesomeIcon className="mt-1 text-danger" icon={faHeartRegular} />
                    </div>
                    <h5>Chicken noodle</h5>
                </div>
                <div className="d-flex flex-column col-2">
                    <div>
                        <img src={food} alt="soup" className="w-100 h-auto rounded mb-2" />
                    </div>
                    <div className="d-flex felx-column justify-content-between ">
                    <p>Soup</p>
                    <FontAwesomeIcon className="mt-1 text-danger" icon={faHeartRegular} />
                    </div>
                    <h5>Chicken noodle</h5>
                </div>
                <div className="d-flex flex-column col-2">
                    <div>
                        <img src={food} alt="soup" className="w-100 h-auto rounded mb-2" />
                    </div>
                    <div className="d-flex felx-column justify-content-between ">
                    <p>Soup</p>
                    <FontAwesomeIcon className="mt-1 text-danger" icon={faHeartRegular} />
                    </div>
                    <h5>Chicken noodle</h5>
                </div>
                
            </div>
        </div>
    );
}

export default Home;