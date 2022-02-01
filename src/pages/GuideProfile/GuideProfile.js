
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai";
import { RiShieldStarLine } from "react-icons/ri";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom'
import firebase from 'firebase/compat';

import { db } from '../../firebase/firebase';
import { AuthContext } from '../../context/AuthContext'
import './GuideProfile.css'

function GuideProfile() {

    const [guide, setGuide] = useState({})
    const [info, setInfo] = useState([])
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState('');
    const { id } = useParams();

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        var docRef = db.collection("guides").doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setGuide(doc.data());
            } 
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        var userRef = db.collection("users").doc(currentUser.uid);
        userRef.get().then((doc) => {
            if (doc.exists) {
                setInfo(doc.data());
            } 
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        db.collection('guides').doc(guide.username).collection('reviews').orderBy('createdAt', 'desc').onSnapshot(snapshot => (
            setReviews(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        ))

    }, [id, setGuide, currentUser.uid, guide.username]);

    const submitReview = (e) => {
        e.preventDefault()
        if(review) {
            db.collection('guides').doc(guide.username).collection('reviews').add({
                review: review,
                name: info.name,
                profilePic: info.profilePhoto,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
        } else {
            alert('Enter Review :)')
        }

        setReview('')
    }

    console.log(reviews)


    return (
        <div className='guideProfile'>
            <div className='guideNav'>
                <div className='navbar_btn'>
                    <Link to="/home">
                        <MdArrowBackIosNew className='guideNav__icon' color='#f5f0e1' size={28}/>
                    </Link>
                </div>

                <div className='navbar_btn'>
                    {guide.verified && (
                        <RiShieldStarLine color='#00e64d' size={22} className='guideNav__icon'/>
                    )}
                </div>
            </div>
            <div className='guideProfile__header'>
                <div className='gp__header_content'>
                    <h1>{guide.name}</h1>
                    <p>{guide.username}</p>
                </div>
            </div>
            <div className='guideProfile__container'>
                <div className='gp__container_left'>
                    <div className='gp_left_content'>
                        <img src={guide.profilePic} alt="" />
                        <div className='gp_content'>
                            <div className='gp_content_div flex-col'>
                                <h6>Address:</h6>
                                <p>{guide.address}</p>
                            </div>
                            <div className='gp_content_div'>
                                <h6>Pincode:</h6>
                                <p>{guide.pincode}</p>
                            </div>
                            <div className='gp_content_div'>
                                <h6><AiOutlinePhone size={20} color='#1a1a1a'/></h6>
                                <a href={`tel:${guide.phone}`}>{guide.phone}</a>
                            </div>
                            <div className='gp_content_div flex-col'>
                                <h6>Languages:</h6>
                                <p>{guide.languages}</p>
                            </div>
                            <a href={guide.documentURL} target="_blank" rel="noreferrer">
                                <button className='document_btn'>Documents</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='gp__container_right'>
                    <h2>Reviews:</h2>
                    <form className='reviews_form' onSubmit={submitReview}>
                        <input value={review} onChange={(e) => setReview(e.target.value)} type="text" placeholder='Add your review' className='edit_input' />
                        <button type='submit' className='review_btn'>Submit</button>
                    </form>
                    <div className='reviews_container'>
                        { reviews.map((review) => (
                        <div className="reviewCard" key={review.id}>
                            <img src={review.data.profilePic} alt="" />
                            <div className="reviewCard__info">
                                <h1>{review.data.name}</h1>
                                <p>{review.data.review}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuideProfile;
