import Link from "next/link";

export default function Contact() {
    return (
        <div className="contact">
            <h2 className="contact__title">
                Any questions? <span className="colored">Contact us.</span>
            </h2>
            <a href="mailto:support@kesports.com?subject=What am I doing here?&body=Hi,I found this website and thought you might like details, visit http://www.github.com/baokhoavu/kristeenajs">
                <button>Contact Us</button>
            </a>
        </div>
    );
}
