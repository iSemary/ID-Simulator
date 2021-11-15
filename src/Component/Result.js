import React from 'react';
import FrontID from '../Assets/0.jpg';
import BackID from '../Assets/3.png';
import DefaultAvatar from '../Assets/default-avatar-1.png';
import html2canvas from 'html2canvas'

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link);
}

function PdfHandler() {

    html2canvas(document.getElementById('PDFTarget')).then(canvas =>

        downloadURI("data:" + canvas.toDataURL("image/png"), "yourImage.png")
    );
    // console.log(img[1])

}

const Result = (props) => {
    function toArabicNumeral(en) {
        return ("" + en).replace(/[0-9]/g, function (t) {
            return "٠١٢٣٤٥٦٧٨٩".substr(+t, 1);
        });
    }

    return (
        <section className="mt-2">
            <div className="img-holder" id="PDFTarget">
                <div className="img-container">
                    <img src={FrontID} className="id-img" alt="front-id"/>
                    <p className="first-name">{props.name ? props.name.substring(0, props.name.indexOf(" ")) : ''}</p>
                    <p className="last-name">{props.name ? props.name.substring(props.name.indexOf(" ")) : ''}</p>
                    <p className="address">{props.address ? toArabicNumeral(props.address) : ''}</p>
                    <p className="center-city">
                        <span>{props.center}</span>
                        <span>&nbsp;-&nbsp;</span>
                        <span>{props.city}</span>
                    </p>
                    <p className="id-number">
                        <span>{props.dateofbirth ? props.dateofbirth.substring(0, 1) === toArabicNumeral(1) ? toArabicNumeral(2) : toArabicNumeral(3) : ''}</span>
                        <span>{props.dateofbirth ? toArabicNumeral(props.dateofbirth.replace('-', '').substring(1).replace('-', '')) : ''}</span>
                        <span>{props.city_code ? toArabicNumeral(props.city_code) : ''}</span>
                        <span>{props.last_digits ? toArabicNumeral(props.last_digits) : ''}</span>
                    </p>
                    <p className="date-of-birth">{props.dateofbirth ? toArabicNumeral(props.dateofbirth.replace('-', '/')).replace('-', '/') : ''}</p>
                    <div className="id-avatar-bg"></div>
                    <img className="id-avatar" src={props.imagePreviewUrl ? props.imagePreviewUrl : DefaultAvatar}
                         alt="default-avatar"/>

                </div>
                <div className="img-container-2">
                    <img src={BackID} className="id-img" alt="back-id"/>
                    {/*TODO Download All Div As PDF or image*/}
                    <p className="id-number-2">
                        <span>{props.dateofbirth ? props.dateofbirth.substring(0, 1) === toArabicNumeral(1) ? toArabicNumeral(2) : toArabicNumeral(3) : ''}</span>
                        <span>{props.dateofbirth ? toArabicNumeral(props.dateofbirth.replace('-', '').substring(1).replace('-', '')) : ''}</span>
                        <span>{props.city_code ? toArabicNumeral(props.city_code) : ''}</span>
                        <span>{props.last_digits ? toArabicNumeral(props.last_digits) : ''}</span>
                    </p>
                    <p className="date-created">
                        {toArabicNumeral(new Date().getFullYear())}/{toArabicNumeral(new Date().getMonth() + 1)}</p>
                    <p className="job-title">{props.job}</p>
                    <p className="gender">{props.gender}</p>
                    <p className="religion">{props.religion}</p>
                    <p className="social-status">{props.status}</p>
                    <p className="date-expire">
                        البطاقة سارية حتي&nbsp;&nbsp;
                        <span>{toArabicNumeral(new Date().getFullYear() + 7)}/{toArabicNumeral(new Date().getMonth() + 1)}/{toArabicNumeral(new Date().getDate())}</span>
                    </p>
                    <p className="lone-number">{toArabicNumeral(1)}</p>
                </div>
                <h3 className="fake-it">مزيفة/Fake</h3>
            </div>
            <div>
                <button className="btn btn-primary btn-block w-100" onClick={PdfHandler}>Download PNG</button>
            </div>
        </section>
    )
}

export default Result;